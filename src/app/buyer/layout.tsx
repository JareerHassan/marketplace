import DashboardSidebar from '@/components/layout/dashboard-sidebar';
import Header from '@/components/layout/header';

export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header />
    <div className="flex min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)]">
      <DashboardSidebar userType="buyer" />
      <main className="flex-1 p-4 pl-[max(3.5rem,calc(env(safe-area-inset-left)+3rem))] pr-[max(1rem,env(safe-area-inset-right))] pb-[max(1.5rem,env(safe-area-inset-bottom))] md:pl-8 md:p-8 bg-background min-w-0 overflow-x-hidden">
        {children}
      </main>
    </div>
    </>
  );
}
