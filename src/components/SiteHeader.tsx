"use client";

import { useEffect, useState } from "react";
import { nav, site, socials } from "@/data/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-line bg-[color-mix(in_oklab,var(--paper)_82%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-pad section-max flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#top" className="display text-[1.05rem] font-semibold tracking-[-0.05em]">
          {site.shortName}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-quiet text-sm">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-sm">
          {socials.slice(0, 2).map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="link-quiet hidden sm:inline-flex"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary text-sm">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
