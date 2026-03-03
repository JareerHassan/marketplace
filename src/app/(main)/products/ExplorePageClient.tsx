"use client"

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import api from '@/lib/api';
import axios from 'axios';
import HeroSection from "@/components/HeroSection";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com/api';

const dynamicWords = ["Templates", "AI Bots", "Datasets", "Models", "Prompts"];

function ExplorePageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [typedWord, setTypedWord] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [forward, setForward] = useState(true);

  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters and search
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'latest' | 'alphabetical' | 'free-first'>('latest');

  // UI states
  const [showFilters, setShowFilters] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    useCases: false,
    tags: false,
  });
  const [categorySearch, setCategorySearch] = useState('');
  const [useCaseSearch, setUseCaseSearch] = useState('');
  const [tagSearch, setTagSearch] = useState('');

  // Help sync URL → filters only once at mount
  const [isInitialSyncDone, setIsInitialSyncDone] = useState(false);

  const typingRef = useRef<NodeJS.Timeout | null>(null);

  // ─── Typing animation ────────────────────────────────────────────────
  useEffect(() => {
    const currentWord = dynamicWords[currentWordIndex];
    let charIndex = forward ? 0 : currentWord.length;

    const type = () => {
      if (forward) {
        if (charIndex <= currentWord.length) {
          setTypedWord(currentWord.slice(0, charIndex));
          charIndex++;
          if (charIndex > currentWord.length) {
            typingRef.current = setTimeout(() => setForward(false), 1000);
          } else {
            typingRef.current = setTimeout(type, 150);
          }
        }
      } else {
        if (charIndex >= 0) {
          setTypedWord(currentWord.slice(0, charIndex));
          charIndex--;
          if (charIndex < 0) {
            setForward(true);
            setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
          }
          typingRef.current = setTimeout(type, 100);
        }
      }
    };

    type();

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [currentWordIndex, forward]);

  // ─── Helpers ─────────────────────────────────────────────────────────
  const getCategoryIdFromSlug = (slugOrId: string): string | null => {
    if (!slugOrId) return null;
    if (/^[0-9a-fA-F]{24}$/.test(slugOrId)) return slugOrId;

    const category = categories.find(
      (cat) => cat.slug === slugOrId || cat.slug?.toLowerCase() === slugOrId.toLowerCase()
    );
    return category ? (category._id || category.id) : null;
  };

  // ─── Fetch categories once ───────────────────────────────────────────
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/categories/active`);
        setCategories(response.data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // ─── Read category from URL params once categories are loaded ────────
  useEffect(() => {
    if (categories.length === 0 || isInitialSyncDone) return;

    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      const categoryId = getCategoryIdFromSlug(categoryParam);
      if (categoryId && !selectedCategories.includes(categoryId)) {
        setSelectedCategories([categoryId]);
      }
    }

    setIsInitialSyncDone(true);
  }, [categories, searchParams, isInitialSyncDone]);

  // ─── Fetch products when filters or sync status changes ──────────────
  useEffect(() => {
    // Wait until initial URL → filter sync is complete
    if (!isInitialSyncDone) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const params: any = {};

        if (searchQuery) params.search = searchQuery;
        if (selectedCategories.length > 0) {
          // Currently supporting only one category — adjust if you want multiple
          const catId = selectedCategories[0];
          params.category = catId; // backend expects ObjectId or slug (your choice)
        }
        if (selectedUseCases.length > 0) params.useCase = selectedUseCases[0];
        if (selectedTags.length > 0) params.tag = selectedTags[0];
        if (sortBy) params.sort = sortBy;

        console.log("Fetching with params:", params); // ← debug tip

        const response = await api.get('/products', { params });
        setProducts(response.data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [
    isInitialSyncDone,
    searchQuery,
    selectedCategories,
    selectedUseCases,
    selectedTags,
    sortBy,
  ]);

  // ─── Handlers ────────────────────────────────────────────────────────
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) => {
      const isAlreadySelected = prev.includes(categoryId);

      let newCategories: string[];

      if (isAlreadySelected) {
        // If same category clicked → unselect
        newCategories = [];
      } else {
        // Always keep only ONE category
        newCategories = [categoryId];
      }

      const urlParams = new URLSearchParams(searchParams.toString());

      if (newCategories.length > 0) {
        const category = categories.find(
          (c) => (c._id || c.id) === categoryId
        );
        const slug = category?.slug || categoryId;
        urlParams.set("category", slug);
      } else {
        urlParams.delete("category");
      }

      router.push(`/products?${urlParams.toString()}`);

      return newCategories;
    });
  };
  const handleUseCaseToggle = (useCase: string) => {
    setSelectedUseCases((prev) =>
      prev.includes(useCase) ? prev.filter((uc) => uc !== useCase) : [...prev, useCase]
    );
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedUseCases([]);
    setSelectedTags([]);
    setSortBy('latest');
    router.push('/products');
  };

  // ─── Derived data ────────────────────────────────────────────────────
  const allUseCases = Array.from(new Set(products.flatMap((p) => (p.useCase ? [p.useCase] : []))));
  const allTags = Array.from(new Set(products.flatMap((p) => p.tags || [])));

  const filteredCategories = categories.filter((cat) =>
    cat.name?.toLowerCase().includes(categorySearch.toLowerCase())
  );
  const filteredUseCases = allUseCases.filter((uc) =>
    uc.toLowerCase().includes(useCaseSearch.toLowerCase())
  );
  const filteredTags = allTags.filter((tag) =>
    tag.toLowerCase().includes(tagSearch.toLowerCase())
  );

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedUseCases.length > 0 ||
    selectedTags.length > 0 ||
    !!searchQuery;

  return (
    <>
      <HeroSection />

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Explore <span className="text-primary">{typedWord}</span>
              <span className="animate-blink">|</span>
            </h1>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Icons.Filter className="h-4 w-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {selectedCategories.length + selectedUseCases.length + selectedTags.length}
                  </Badge>
                )}
              </Button>
              <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
                <SelectTrigger className="w-[160px] md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                  <SelectItem value="free-first">Free First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-2xl">
            <Input
              type="search"
              placeholder="Search products, tags, use cases..."
              className="w-full !py-6 !pl-12 !pr-12 text-base"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Icons.Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                onClick={() => handleSearch('')}
              >
                <Icons.X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Active filters */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedCategories.map((catId) => {
                const cat = categories.find((c) => (c._id || c.id) === catId);
                return cat ? (
                  <Badge key={catId} variant="secondary" className="gap-1">
                    {cat.name}
                    <button
                      onClick={() => handleCategoryToggle(catId)}
                      className="ml-1 hover:text-destructive"
                    >
                      ×
                    </button>
                  </Badge>
                ) : null;
              })}
              {selectedUseCases.map((uc, i) => (
                <Badge key={i} variant="secondary" className="gap-1">
                  {uc}
                  <button
                    onClick={() => handleUseCaseToggle(uc)}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              ))}
              {selectedTags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="gap-1">
                  {tag}
                  <button
                    onClick={() => handleTagToggle(tag)}
                    className="ml-1 hover:text-destructive"
                  >
                    ×
                  </button>
                </Badge>
              ))}
              <Button variant="ghost" size="sm" onClick={clearFilters} className="h-7 text-xs">
                Clear all
              </Button>
            </div>
          )}

          {/* Category chips */}
          {categories.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {categories.map((category) => {
                  const catId = category._id || category.id;
                  const isSelected = selectedCategories.includes(catId);
                  return (
                    <Button
                      key={catId}
                      variant={isSelected ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleCategoryToggle(catId)}
                      className="whitespace-nowrap shrink-0"
                    >
                      {category.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters sidebar */}
          <aside className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="lg:sticky lg:top-24 bg-card border rounded-lg p-4 space-y-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
              <div className="flex items-center justify-between pb-2 border-b">
                <h2 className="text-lg font-semibold">Filters</h2>
                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs h-7">
                    Clear
                  </Button>
                )}
              </div>

              {/* Categories */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleSection('categories')}
                  className="w-full flex items-center justify-between text-sm font-medium hover:text-foreground"
                >
                  <span>Categories</span>
                  <span className="text-xs text-muted-foreground">
                    {selectedCategories.length > 0 && `(${selectedCategories.length})`}
                  </span>
                  <Icons.ChevronDown
                    className={`h-4 w-4 transition-transform ${expandedSections.categories ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedSections.categories && (
                  <div className="space-y-2 pl-2">
                    <Input
                      placeholder="Search categories..."
                      value={categorySearch}
                      onChange={(e) => setCategorySearch(e.target.value)}
                      className="h-8 text-sm"
                    />
                    <div className="max-h-60 overflow-y-auto space-y-1.5">
                      {filteredCategories.map((category) => {
                        const catId = category._id || category.id;
                        const isSelected = selectedCategories.includes(catId);
                        return (
                          <div key={catId} className="flex items-center space-x-2">
                            <Checkbox
                              id={`cat-${catId}`}
                              checked={isSelected}
                              onCheckedChange={() => handleCategoryToggle(catId)}
                            />
                            <Label htmlFor={`cat-${catId}`} className="text-xs cursor-pointer flex-1">
                              {category.name}
                            </Label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Use Cases */}
              {allUseCases.length > 0 && (
                <div className="space-y-2">
                  <button
                    onClick={() => toggleSection('useCases')}
                    className="w-full flex items-center justify-between text-sm font-medium hover:text-foreground"
                  >
                    <span>Use Cases</span>
                    <span className="text-xs text-muted-foreground">
                      {selectedUseCases.length > 0 && `(${selectedUseCases.length})`}
                    </span>
                    <Icons.ChevronDown
                      className={`h-4 w-4 transition-transform ${expandedSections.useCases ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedSections.useCases && (
                    <div className="space-y-2 pl-2">
                      <Input
                        placeholder="Search use cases..."
                        value={useCaseSearch}
                        onChange={(e) => setUseCaseSearch(e.target.value)}
                        className="h-8 text-sm"
                      />
                      <div className="max-h-60 overflow-y-auto space-y-1.5">
                        {filteredUseCases.map((useCase, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Checkbox
                              id={`uc-${i}`}
                              checked={selectedUseCases.includes(useCase)}
                              onCheckedChange={() => handleUseCaseToggle(useCase)}
                            />
                            <Label htmlFor={`uc-${i}`} className="text-xs cursor-pointer flex-1">
                              {useCase}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Tags */}
              {allTags.length > 0 && (
                <div className="space-y-2">
                  <button
                    onClick={() => toggleSection('tags')}
                    className="w-full flex items-center justify-between text-sm font-medium hover:text-foreground"
                  >
                    <span>Tags</span>
                    <span className="text-xs text-muted-foreground">
                      {selectedTags.length > 0 && `(${selectedTags.length})`}
                    </span>
                    <Icons.ChevronDown
                      className={`h-4 w-4 transition-transform ${expandedSections.tags ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedSections.tags && (
                    <div className="space-y-2 pl-2">
                      <Input
                        placeholder="Search tags..."
                        value={tagSearch}
                        onChange={(e) => setTagSearch(e.target.value)}
                        className="h-8 text-sm"
                      />
                      <div className="max-h-60 overflow-y-auto flex flex-wrap gap-1.5">
                        {filteredTags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant={selectedTags.includes(tag) ? "default" : "outline"}
                            className="cursor-pointer text-xs"
                            onClick={() => handleTagToggle(tag)}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </aside>

          {/* Products */}
          <main className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                {loading ? 'Loading...' : `${products.length} product${products.length !== 1 ? 's' : ''} found`}
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-24">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-24 bg-card border rounded-lg">
                <Icons.Component className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search query
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {products.map((product) => (
                  <ProductCard key={product._id || product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default function ExplorePage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      }
    >
      <ExplorePageContent />
    </Suspense>
  );
}