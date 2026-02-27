'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/landing', label: 'Landing' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/categories', label: 'Categories' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/faq', label: 'FAQ' },
   { href: '/contact', label: 'Contact Us' },
];

function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const token =
      typeof window !== 'undefined'
        ? localStorage.getItem('userToken')
        : null;
    setIsLoggedIn(!!token);
  }, []);

  const handleSubmitTool = () => {
    const token =
      typeof window !== 'undefined'
        ? localStorage.getItem('userToken')
        : null;

    if (token) {
      router.push('/seller/dashboard/submit-tool');
    } else {
      router.push('/auth/login');
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(
        `/products?search=${encodeURIComponent(searchQuery.trim())}`
      );
      setSearchQuery('');
    }
  };

  const renderNavLinks = (isMobile = false) => (
    <nav
      className={cn(
        'flex items-center gap-4 lg:gap-6',
        isMobile ? 'flex-col items-start' : 'hidden lg:flex'
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            pathname.startsWith(link.href)
              ? 'text-primary'
              : 'text-foreground/70',
            isMobile && 'text-lg'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-3">

        {/* Desktop Logo + Nav */}
        <div className="mr-4 hidden lg:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.Logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Neural Nexus
            </span>
          </Link>
          {renderNavLinks()}
        </div>

        {/* Mobile + Tablet Toggle */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Icons.Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="pr-0">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Icons.Logo className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">
                Neural Nexus
              </span>
            </Link>

            <div className="my-4 px-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="relative mb-4"
              >
                <Input
                  type="search"
                  placeholder="Search tools..."
                  className="w-full pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <Icons.Search className="h-4 w-4 text-muted-foreground" />
                </button>
              </form>
            </div>

            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {renderNavLinks(true)}
                <Button
                  onClick={handleSubmitTool}
                  variant="default"
                  className="w-40 mt-4 bg-primary hover:bg-primary/90"
                >
                  Submit Tool
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-between space-x-2 lg:justify-end">

          {/* Desktop Search */}
          <div className="w-full flex-1 lg:w-auto lg:flex-none max-w-md hidden lg:block">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="relative"
            >
              <Input
                type="search"
                placeholder="Search tools, tags, use cases..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Icons.Search className="h-4 w-4 text-muted-foreground" />
              </button>
            </form>
          </div>

          {/* Theme + Submit */}
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              onClick={handleSubmitTool}
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90 hidden lg:inline-flex"
            >
              Submit Tool
            </Button>
          </nav>

        </div>
      </div>
    </header>
  );
}