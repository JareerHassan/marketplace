'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, ArrowRight, Phone, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import emailjs from "@emailjs/browser";

export default function ContactPage() {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [popup, setPopup] = useState({
    show: false,
    type: "success",
    message: ""
  });

  const showPopup = (type: "success" | "error", message: string) => {
    setPopup({ show: true, type, message });

    setTimeout(() => {
      setPopup((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.email || !form.name || !form.message) {
      showPopup("error", "Please fill required fields ❌");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        "service_ykcw9wg",
        "template_1o3ooa8",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        },
        "bgEfiKFVAjDM-J00e"
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      showPopup("success", "Message sent successfully 🎉");

    } catch (error) {
      console.error(error);
      showPopup("error", "Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection />

      <main className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-28">

        <div className="space-y-4 sm:space-y-6 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Get in touch with our team.
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl text-center mx-auto">
            Whether you have a technical question, need help with a product,
            want to discuss enterprise solutions, or are interested in selling
            on our marketplace, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT SIDE (UNCHANGED DESIGN) */}
          <div className="lg:col-span-5 space-y-10 sm:space-y-12">

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
                  <a href="mailto:ai.app.space@gmail.com">
                    ai.app.space@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* PHONE BOX (UNCHANGED) */}
            <div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 px-5 sm:px-8 py-6 sm:py-8 rounded-[1rem] bg-white/5 border border-white/10 hover:border-green-400/50 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer shadow-2xl">
              <Phone className="text-green-400" />
              <div>
                <p className="text-slate-100">+49 160 90338154</p>
              </div>
            </div>

            {/* LOCATION (UNCHANGED) */}
            <div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 px-5 sm:px-8 py-6 sm:py-8 rounded-[1rem] bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer shadow-2xl">
              <MapPin className="text-blue-400" />
              <div>
                <p className="text-slate-100">Meiringen, Switzerland</p>
              </div>
            </div>

          </div>

          {/* FORM (ONLY LOGIC ADDED, DESIGN SAME) */}
          <div className="lg:col-span-7 bg-card/20 border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm">

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

                <div className="space-y-3">
                  <Label>Full Name</Label>
                  <Input id="name" value={form.name} onChange={handleChange} />
                </div>

                <div className="space-y-3">
                  <Label>Email</Label>
                  <Input id="email" type="email" value={form.email} onChange={handleChange} />
                </div>

              </div>

              <div className="space-y-3">
                <Label>Subject</Label>
                <Input id="subject" value={form.subject} onChange={handleChange} />
              </div>

              <div className="space-y-3">
                <Label>Message</Label>
                <Textarea id="message" rows={6} value={form.message} onChange={handleChange} />
              </div>

              <Button type="submit" className="w-full h-14" disabled={loading}>
                {loading ? "Sending..." : "Submit Transmission"}
              </Button>

            </form>

          </div>
        </div>

      </main>

      {/* POPUP (TOAST) */}
      {popup.show && (
        <div
          className={`fixed top-5 right-5 z-[9999] px-5 py-3 rounded-xl text-white shadow-lg
          ${popup.type === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {popup.message}
        </div>
      )}

    </div>
  );
}