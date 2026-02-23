"use client";
import { usePathname } from "next/navigation";
import { HERO_CONFIG } from "@/app/data/heroConfig";
export default function HeroSection() {
  const pathname = usePathname();
  const data = HERO_CONFIG[pathname];
  if (!data) return null;
  return (
    <section className="relative w-full overflow-hidden border-b border-border">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/15 via-blue-600/10 to-cyan-500/15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl px-4 py-20 md:py-28">

        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-muted-foreground">
          {data.breadcrumb.map((item, index) => (
            <span key={index}>
              <a href={item.href} className="hover:underline text-accent hover:text-blue-400">
                {item.label}
              </a>
              {index < data.breadcrumb.length - 1 && " / "}
            </span>
          ))}
        </nav>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary">
          {data.title}
        </h1>
        {data.subtitle && (
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            {data.subtitle}
          </p>
        )}
      </div>
    </section>
  );
}