import { site, socials } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="section-pad border-t border-line py-10">
      <div className="section-max flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-lg font-semibold">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">Built with Next.js, TypeScript, Tailwind, and Motion.</p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm">
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
