import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ResumeInteractive } from "@/components/ResumeInteractive";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Interactive resume for Kaushik Selvakumar — experience, skills, certifications, and PDF downloads for SWE and computer engineering.",
};

export default function ResumePage() {
  return (
    <PageShell>
      <div className="section-pad py-16 md:py-24">
        <div className="section-max">
          <div className="mb-14 max-w-3xl">
            <p className="eyebrow mb-4">Resume</p>
            <h1 className="display text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
              Experience made scannable.
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Both resume PDFs are visible on this page right away — click either one to open it in a
              new tab. Below that: roles, skill groups, and certifications. Project deep-dives live
              on the{" "}
              <Link href="/work" className="link-quiet text-accent">
                work page
              </Link>
              .
            </p>
          </div>
          <ResumeInteractive />
        </div>
      </div>
    </PageShell>
  );
}
