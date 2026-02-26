'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import api from '@/lib/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://marketplacebackend.oxmite.com/api';

export function SearchParamsWrapper({ onCategoryChange }: { onCategoryChange: (category: string | null, products: any[]) => void }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params: any = {};
        if (category) params.category = category; // category filter
        const response = await api.get('/products', { params });
        setProducts(response.data || []);
      } catch (error) {
        setProducts([]);
      }
    };
    fetchProducts();
  }, [category]);

  useEffect(() => {
    onCategoryChange(category, products);
  }, [category, products, onCategoryChange]);

  return null;
}
