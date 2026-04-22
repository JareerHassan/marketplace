import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import FloatingChatbot from '@/components/floating-chatbot';
import CookieConsent from "@/components/Cookies";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}

        <CookieConsent />

      </main>
      <Footer />
      <FloatingChatbot />
    </div>
  );
}
