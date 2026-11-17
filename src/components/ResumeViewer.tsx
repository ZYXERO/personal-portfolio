"use client";

import { resumes } from "@/data/experience";

export function ResumeViewer() {
  return (
    <section>
      <p className="eyebrow mb-4">Resumes</p>
      <h2 className="display text-3xl font-semibold md:text-4xl">View first, download anytime</h2>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
        Both PDFs are on the page as soon as you land here. Click the preview to open the full file
        in a new tab, or use Download PDF below each one.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {resumes.map((resume) => (
          <article
            key={resume.id}
            className="flex flex-col overflow-hidden rounded-[1.35rem] border border-line bg-white"
          >
            <div className="border-b border-line px-5 py-5">
              <h3 className="display text-2xl font-semibold tracking-[-0.03em]">{resume.label}</h3>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Focus areas">
                {resume.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium tracking-[0.02em] text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink-soft">{resume.description}</p>
            </div>

            <a
              href={resume.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block w-full"
              aria-label={`Open ${resume.label} in a new tab`}
            >
              <div className="relative aspect-[8.5/11] w-full overflow-hidden bg-fog">
                <iframe
                  title={`${resume.label} preview`}
                  src={`${resume.href}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="pointer-events-none absolute inset-0 h-full w-full border-0"
                />
                <div className="absolute inset-0 bg-transparent transition group-hover:bg-[color-mix(in_oklab,var(--ink)_6%,transparent)]" />
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-line bg-[color-mix(in_oklab,var(--paper)_88%,transparent)] px-4 py-2 text-sm text-ink backdrop-blur-md opacity-0 transition group-hover:opacity-100">
                  Open in new tab
                </span>
              </div>
            </a>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4">
              <p className="text-sm text-muted">Click preview to open in a new tab</p>
              <a href={resume.href} download className="btn btn-primary text-sm">
                Download PDF
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
