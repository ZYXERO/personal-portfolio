import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { site, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kaushik Selvakumar — email, GitHub, and LinkedIn.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="section-pad py-16 md:py-24">
        <div className="section-max max-w-3xl">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="display text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
            Let’s talk.
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink-soft">
            {site.availability}. The fastest path is email — LinkedIn and GitHub work too.
          </p>

          <div className="mt-12 space-y-4">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center justify-between rounded-[1.2rem] border border-line px-5 py-4 transition hover:border-accent"
            >
              <span>
                <span className="block text-sm text-muted">Email</span>
                <span className="mt-1 block text-lg text-ink">{site.email}</span>
              </span>
              <span aria-hidden className="text-accent">
                →
              </span>
            </a>
            {socials
              .filter((item) => item.label !== "Email")
              .map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.2rem] border border-line px-5 py-4 transition hover:border-accent"
                >
                  <span>
                    <span className="block text-sm text-muted">{item.label}</span>
                    <span className="mt-1 block text-lg text-ink">{item.href.replace("https://", "")}</span>
                  </span>
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                </a>
              ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
