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
  { href: '/explore', label: 'Explore' },
  { href: '/categories', label: 'Categories' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/faq', label: 'FAQ' },
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

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('userToken') : null;
    setIsLoggedIn(!!token);
  }, []);

  const handleSubmitTool = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('userToken') : null;
    if (token) {
      router.push('/seller/dashboard/submit-tool');
    } else {
      router.push('/auth/login');
    }
  };

  const renderNavLinks = (isMobile = false) => (
    <nav
      className={cn(
        'flex items-center gap-4 lg:gap-6',
        isMobile ? 'flex-col items-start' : 'hidden md:flex'
      )}
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-accent',
            pathname.startsWith(link.href) ? 'text-accent' : 'text-foreground/70',
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
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.Logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Neural Nexus
            </span>
          </Link>
          {renderNavLinks()}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Icons.Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Icons.Logo className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline">Neural Nexus</span>
            </Link>
            <div className="my-4 px-6">
              <div className="relative mb-4">
                <Input
                  type="search"
                  placeholder="Search tools..."
                  className="w-full pr-10"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const value = (e.target as HTMLInputElement).value;
                      if (value.trim()) {
                        router.push(`/explore?search=${encodeURIComponent(value.trim())}`);
                      }
                    }
                  }}
                />
                <Icons.Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {renderNavLinks(true)}
                <Button 
                  onClick={handleSubmitTool}
                  variant="default"
                  className="w-full mt-4 bg-primary hover:bg-primary/90"
                >
                  Submit Tool
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none max-w-md hidden md:block">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search tools, tags, use cases..."
                className="w-full pr-10"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const value = (e.target as HTMLInputElement).value;
                    if (value.trim()) {
                      router.push(`/explore?search=${encodeURIComponent(value.trim())}`);
                    }
                  }
                }}
              />
              <Icons.Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <ThemeToggle />
            <Button 
              onClick={handleSubmitTool}
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              Submit Tool
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
