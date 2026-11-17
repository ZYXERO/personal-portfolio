import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kaushik Selvakumar — Computer Engineering student at USF finishing up in December 2026, building toward software and applied AI roles.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="section-pad py-16 md:py-24">
        <div className="section-max max-w-3xl">
          <p className="eyebrow mb-4">About</p>
          <h1 className="display text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
            {site.motto}
          </h1>
          <div className="mt-10 space-y-6 text-lg leading-8 text-ink-soft">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Right now I’m based in {site.location}. Outside of class and projects, I’m usually
              tinkering with AI tooling, cloud setups, or whatever bug is currently winning.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/resume" className="btn btn-primary">
              View resume
            </Link>
            <Link href="/work" className="btn btn-ghost">
              See projects
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
