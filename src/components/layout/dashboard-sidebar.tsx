'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type DashboardSidebarProps = {
  userType: 'buyer' | 'seller';
};

type NavItem = { href: string; label: string; icon: string; visible?: boolean };

const buyerNav: NavItem[] = [
  { href: '/buyer/dashboard', label: 'Dashboard', icon: 'LayoutGrid' },
  { href: '/buyer/dashboard/purchases', label: 'Purchase History', icon: 'Download' },
  { href: '/buyer/dashboard/saved', label: 'Saved Items', icon: 'Heart' },
  { href: '/buyer/dashboard/messages', label: 'Messages', icon: 'MessageSquare' },
  { href: '/buyer/dashboard/settings', label: 'Profile Settings', icon: 'Settings' },
];

const sellerNav: NavItem[] = [
  { href: '/seller/dashboard', label: 'Overview', icon: 'BarChart', visible: true },
  { href: '/seller/dashboard/submit-tool', label: 'Submit Tool', icon: 'Upload', visible: true },
  { href: '/seller/dashboard/products', label: 'My Tools', icon: 'Component', visible: true },
  { href: '/seller/add-product', label: 'Add Product', icon: 'PlusCircle', visible: false },
  { href: '/seller/dashboard/orders', label: 'Orders', icon: 'ShoppingCart', visible: false },
  { href: '/seller/dashboard/earnings', label: 'Withdraw Earnings', icon: 'Wallet', visible: false },
  { href: '/seller/dashboard/messages', label: 'Messages', icon: 'MessageSquare', visible: false },
];

export default function DashboardSidebar({ userType }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsed = JSON.parse(userData);
        setUser({
          name: parsed.name || 'User',
          email: parsed.email || '',
        });
      } catch (err) {
        console.error('Failed to parse user from localStorage', err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
    router.push('/auth/login');
    setOpen(false);
  };

  const navItems = userType === 'seller' ? sellerNav : buyerNav;
  const userInitial = user?.name?.charAt(0)?.toUpperCase() || 'U';

  const isActive = (href: string) =>
    href === '/seller/dashboard' || href === '/buyer/dashboard'
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  const SidebarContent = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className={cn(
        'flex flex-col h-full bg-gradient-to-b from-background to-muted/10',
        mobile && 'pb-[env(safe-area-inset-bottom)]'
      )}
    >
      {/* Header / Brand */}
      <div className="shrink-0 border-b border-border/60 bg-gradient-to-r from-primary/5 to-transparent">
        <div className="px-5 py-6">
          <Link
            href={userType === 'seller' ? '/seller/dashboard' : '/buyer/dashboard'}
            className="flex items-center gap-4"
            onClick={() => mobile && setOpen(false)}
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
              <Icons.Component className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h2 className="font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {userType === 'seller' ? 'Seller' : 'Buyer'} Hub
              </h2>
              <p className="text-sm text-muted-foreground mt-0.5">Dashboard</p>
            </div>
          </Link>
        </div>
      </div>

      {/* User Info */}
      <div className="shrink-0 border-b border-border/60 bg-card/40 px-5 py-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14 border-2 border-primary/30 ring-1 ring-primary/10">
            <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold text-xl">
              {userInitial}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-lg truncate">{user?.name || 'User'}</p>
            <p className="text-sm text-muted-foreground truncate mt-1">
              {user?.email || '—'}
            </p>
            <div className="mt-2">
              <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                {userType === 'seller' ? 'Seller' : 'Buyer'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <h3 className="px-4 mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h3>
            <div className="space-y-1.5">
              {navItems.map((item) => {
                if (item.visible === false) return null;
                const Icon = Icons[item.icon as keyof typeof Icons] || Icons.Circle;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => mobile && setOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className={cn(
                        'w-full justify-start h-12 px-4 text-base font-medium rounded-xl transition-all',
                        active
                          ? 'bg-primary/10 text-primary hover:bg-primary/15 shadow-sm'
                          : 'hover:bg-muted/70 text-muted-foreground hover:text-foreground'
                      )}
                    >
                      <Icon className={cn('mr-3.5 h-5 w-5 shrink-0', active && 'text-primary')} />
                      {item.label}
                      {active && (
                        <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
                      )}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Logout */}
      <div className="shrink-0 border-t border-border/60 bg-muted/30 px-5 py-5">
        <Button
          variant="ghost"
          className="w-full justify-start h-12 px-4 text-base text-destructive/90 hover:text-destructive hover:bg-destructive/10 border border-transparent hover:border-destructive/20 rounded-xl"
          onClick={handleLogout}
        >
          <Icons.LogOut className="mr-3.5 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* ─── Mobile Hamburger Menu Button ─── */}
      <div className="fixed left-4 top-16 z-50 md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-8 rounded-1 bg-background/90 mt-5  backdrop-blur-lg border border-border/60 shadow-lg hover:bg-accent hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Icons.Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[85vw] max-w-[340px] p-0 border-r-0"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <SidebarContent mobile />
          </SheetContent>
        </Sheet>
      </div>

      {/* ─── Desktop Sidebar ─── */}
      <aside
        className={cn(
          'hidden md:flex md:w-64 lg:w-72 flex-col border-r bg-gradient-to-b from-background to-muted/5 shadow-sm transition-all duration-300'
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}