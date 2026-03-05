import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, ArrowRight, Phone, MapPin, } from 'lucide-react';
import HeroSection from "@/components/HeroSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection />

      <main className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-28">
        <div className="space-y-4 sm:space-y-6 text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
                Get in touch with our team.
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-center mx-auto">
                Whether you have a technical question, need help with a product, want to discuss enterprise solutions, or are interested in selling on our marketplace, our team is ready to assist you.              </p>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-10 sm:space-y-12">

            
            <div className="grid gap-6 sm:gap-8">

              {/* EMAIL BOX */}
              <div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 px-5 sm:px-8 py-6 sm:py-8 rounded-[1rem] bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer shadow-2xl">
                <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-primary shadow-inner">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-primary transition-colors">
                    Direct Communication
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold text-slate-100 mt-1 sm:mt-2 break-all">
                    <a href="mailto:ai.app.space@gmail.com" className="hover:text-primary transition-colors">
                      ai.app.space@gmail.com
                    </a>
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs font-bold text-primary opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300">
                    SEND EMAIL <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* PHONE / WHATSAPP BOX */}
              <div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 px-5 sm:px-8 py-6 sm:py-8 rounded-[1rem] bg-white/5 border border-white/10 hover:border-green-400/50 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer shadow-2xl">
                <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-green-400 shadow-inner">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-green-400 transition-colors">
                    Phone / WhatsApp
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold text-slate-100 mt-1 sm:mt-2 break-all">
                    <a href="tel:+4916090338154" className="hover:text-green-400 transition-colors">+49 160 90338154 (Phone)</a> /{' '}
                    <a href="https://wa.me/4916090338154" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                      WhatsApp
                    </a>
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs font-bold text-green-400 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300">
                    CONTACT NOW <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* LOCATION BOX */}
              <div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 px-5 sm:px-8 py-6 sm:py-8 rounded-[1rem] bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer shadow-2xl">
                <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-blue-400 shadow-inner">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-blue-400 transition-colors">
                    Location
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold text-slate-100 mt-1 sm:mt-2 break-all">
                    Meiringen, Switzerland
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs font-bold text-blue-400 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300">
                    FIND US <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7 bg-card/20 border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm">
            <form className="space-y-6 sm:space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Full Name
                  </Label>
                  <Input id="name" placeholder="John Doe" className="bg-background border-border h-12 w-full" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Business Email
                  </Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="bg-background border-border h-12 w-full" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Subject
                </Label>
                <Input id="subject" placeholder="Integration Inquiry" className="bg-background border-border h-12 w-full" />
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Message
                </Label>
                <Textarea id="message" rows={6} placeholder="Tell us about your needs..." className="bg-background border-border resize-none    w-full" />
              </div>

              <Button type="submit" className="w-full h-14 text-md font-semibold bg-primary hover:bg-primary/90 transition-all rounded-lg">
                Submit Transmission
              </Button>

            </form>
          </div>

        </div>
      </main>
    </div>
  );
}