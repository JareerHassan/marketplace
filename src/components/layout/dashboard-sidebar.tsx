'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

type DashboardSidebarProps = {
  userType: 'buyer' | 'seller';
};

const buyerNav = [
  { href: '/buyer/dashboard', label: 'Dashboard', icon: 'LayoutGrid' },
  { href: '/buyer/dashboard/purchases', label: 'Purchase History', icon: 'Download' },
  { href: '/buyer/dashboard/saved', label: 'Saved Items', icon: 'Heart' },
  { href: '/buyer/dashboard/messages', label: 'Messages', icon: 'MessageSquare' },
  { href: '/buyer/dashboard/settings', label: 'Profile Settings', icon: 'Settings' },
];

const sellerNav = [
  { href: '/seller/dashboard', label: 'Overview', icon: 'BarChart', visible: true },
  { href: '/seller/dashboard/submit-tool', label: 'Submit Tool', icon: 'Upload', visible: true },
  { href: '/seller/dashboard/products', label: 'My Tools', icon: 'Component', visible: true },
  { href: '/seller/add-product', label: 'Add Product', icon: 'PlusCircle', visible: false }, // Hidden but code kept
  { href: '/seller/dashboard/orders', label: 'Orders', icon: 'ShoppingCart', visible: false }, // Hidden but code kept
  { href: '/seller/dashboard/earnings', label: 'Withdraw Earnings', icon: 'Wallet', visible: false }, // Hidden but code kept
  { href: '/seller/dashboard/messages', label: 'Messages', icon: 'MessageSquare', visible: false }, // Hidden but code kept
];

export default function DashboardSidebar({ userType }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // Get user from localStorage
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('user');
      if (userData) {
        try {
          const parsedUser = JSON.parse(userData);
          setUser({
            name: parsedUser.name || 'User',
            email: parsedUser.email || '',
          });
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userToken');
      localStorage.removeItem('user');
      router.push('/auth/login');
    }
  };

  const navItems = userType === 'seller' ? sellerNav : buyerNav;
  const userInitial = user?.name?.charAt(0).toUpperCase() || 'U';

  return (
    <aside className="w-72 flex-shrink-0 bg-gradient-to-b from-background to-muted/20 border-r border-border/50 shadow-sm flex flex-col">
      {/* Logo/Brand Section */}
      <div className="p-6 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
        <Link href={userType === 'seller' ? '/seller/dashboard' : '/buyer/dashboard'} className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-md">
            <Icons.Component className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-lg bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Seller Hub
            </h2>
            <p className="text-xs text-muted-foreground">Dashboard</p>
          </div>
        </Link>
      </div>

      {/* User Profile Section */}
      <div className="p-5 border-b border-border/50 bg-card/50">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 border-2 border-primary/20 shadow-md ring-2 ring-primary/10">
            <AvatarFallback className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground font-bold text-lg shadow-inner">
              {userInitial}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-base truncate text-foreground">{user?.name || 'Loading...'}</p>
            <p className="text-xs text-muted-foreground truncate mt-0.5">{user?.email || ''}</p>
            <div className="mt-1.5">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {userType === 'seller' ? 'Seller' : 'Buyer'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <div className="mb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">
            Navigation
          </p>
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = Icons[item.icon as keyof typeof Icons] || Icons.Home;
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              // Hide items that are not visible, but keep code
              if (item.visible === false) {
                return null;
              }
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      'w-full justify-start h-11 px-3 rounded-lg transition-all duration-200',
                      isActive
                        ? 'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md shadow-primary/20 hover:from-primary/90 hover:to-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    )}
                  >
                    <Icon className={cn(
                      'mr-3 h-5 w-5 transition-transform',
                      isActive ? 'text-primary-foreground' : 'text-muted-foreground',
                      isActive && 'scale-110'
                    )} />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto h-2 w-2 rounded-full bg-primary-foreground/80" />
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Logout Section */}
      <div className="p-4 border-t border-border/50 bg-muted/30">
        <Button 
          variant="ghost" 
          className="w-full justify-start h-11 px-3 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-200 border border-transparent hover:border-destructive/20"
          onClick={handleLogout}
        >
          <Icons.LogOut className="mr-3 h-5 w-5" />
          <span className="font-medium">Logout</span>
        </Button>
      </div>
    </aside>
  );
}
