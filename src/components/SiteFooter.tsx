import Link from "next/link";
import { nav, site, socials } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="section-pad border-t border-line py-10">
      <div className="section-max flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="display text-lg font-semibold">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            {site.title}. Built with Next.js, TypeScript, Tailwind, and Motion.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="link-quiet">
              {item.label}
            </Link>
          ))}
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "Email" ? undefined : "_blank"}
              rel={item.label === "Email" ? undefined : "noreferrer"}
              className="link-quiet"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
