import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  platform: [
    { href: '/products', label: 'Products' },
    { href: '/categories', label: 'Categories' },
    { href: '/seller/register', label: 'Become a Seller' },
    { href: '/chatbot', label: 'AI Assistant' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/blogs', label: 'Blog' },
  ],
  legal: [
    { href: '/terms', label: 'Terms' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/cookies', label: 'Cookies' },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="mx-auto  px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Brand Section: Spans 4 columns on large screens */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <Icons.Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">Neural Nexus</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Empowering the future of digital commerce with next-generation AI products and intelligent solutions.
            </p>
            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Github className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Links Sections: Spans 8 columns on large screens */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Platform</h3>
              <nav className="flex flex-col gap-3">
                {footerLinks.platform.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <nav className="flex flex-col gap-3">
                {footerLinks.company.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Section: Adjusted alignment for icons */}
            <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-sm text-muted-foreground group">
                  <Mail className="h-4 w-4 shrink-0 group-hover:text-primary transition-colors" />
                  <a href="mailto:hello@neuralnexus.com" className="hover:text-primary transition-colors">
                    hello@neuralnexus.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+1 (555) 000-0000</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Silicon Valley, CA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Better horizontal alignment */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Neural Nexus Inc. All rights reserved.
          </p>
       
        </div>
      </div>
    </footer>
  );
}