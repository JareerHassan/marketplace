import Link from 'next/link';
import { Icons } from '@/components/icons';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';


const footerLinks = {
  platform: [
    { href: '/products', label: 'Products' },
    { href: '/featuredapps', label: 'Featured Apps' },
    { href: '/auth/login', label: 'Become a Seller' },
    { href: '/chatbot', label: 'AI Assistant' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/blogs', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },

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
              <Image
                src="/assets/logo2.png"
                alt="AiAppSpace Logo"
                width={180}
                height={20}
                className="object-contain "
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Empowering the future of digital commerce with next-generation AI products and intelligent solutions.
            </p>
            {/* <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Github className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
            </div> */}
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
                  <a href="mailto:ai.app.space@gmail.com" className="hover:text-primary transition-colors">
                    ai.app.space@gmail.com
                  </a>
                </li>
                <ul className="flex flex-col gap-3">
                  {/* Phone */}
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 shrink-0" />
                    <a href="tel:+4916090338154" className="hover:text-primary transition-colors">
                      +49 160 90338154
                    </a>
                  </li>

                  {/* WhatsApp */}
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 shrink-0" />
                    <a
                      href="https://wa.me/4916090338154"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      WhatsApp: +49 160 90338154
                    </a>
                  </li>
                </ul>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>Meiringen, Switzerland</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Better horizontal alignment */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AiAppSpace. All rights reserved.<Link
              href="https://oxmite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary  hover:text-primary/80"
            >
              Developed by Oxmite Digital Ltd
            </Link>
          </p>

        </div>
      </div>
    </footer>
  );
}