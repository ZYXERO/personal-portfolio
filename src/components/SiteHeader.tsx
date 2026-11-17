"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, socials } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      suppressHydrationWarning
      className={`fixed inset-x-0 top-0 z-40 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line bg-[color-mix(in_oklab,var(--paper)_82%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-pad section-max flex min-h-[var(--header-h)] flex-col justify-center gap-2 py-3 md:flex-row md:items-center md:justify-between md:gap-6 md:py-0">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="display text-[1.05rem] font-semibold tracking-[-0.05em]">
            {site.shortName}
            <span className="text-accent">.</span>
          </Link>
          <Link href="/contact" className="btn btn-primary text-sm md:hidden">
            Contact
          </Link>
        </div>

        <nav className="flex items-center gap-4 overflow-x-auto pb-1 text-sm md:gap-7 md:pb-0" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-quiet shrink-0 ${active ? "text-accent" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 text-sm md:flex">
          {socials.slice(0, 2).map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="link-quiet"
            >
              {item.label}
            </a>
          ))}
          <Link href="/contact" className="btn btn-primary text-sm">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
