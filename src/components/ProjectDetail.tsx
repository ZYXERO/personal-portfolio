"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Project } from "@/lib/types";
import { isExternalVideo, toEmbedUrl } from "@/lib/media";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDetail({ project, onClose }: Props) {
  const titleId = useId();
  const reduce = useReducedMotion();
  const [activeShot, setActiveShot] = useState(0);
  const [showRecording, setShowRecording] = useState(false);

  useEffect(() => {
    if (!project) return;
    setActiveShot(0);
    setShowRecording(Boolean(project.media.recording));
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  const shots = project?.media.screenshots ?? [];
  const recording = project?.media.recording;
  const demo = project?.media.demoUrl ?? project?.liveUrl;

  return (
    <AnimatePresence>
      {project ? (
        <>
          <motion.button
            type="button"
            aria-label="Close project details"
            className="dialog-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="dialog-shell">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="dialog-panel section-pad"
              initial={reduce ? false : { opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 py-7 md:py-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mono text-xs tracking-[0.16em] text-muted uppercase">
                    {project.year} · {project.role}
                  </p>
                  <h3 id={titleId} className="display mt-2 text-3xl font-semibold md:text-4xl">
                    {project.title}
                  </h3>
                </div>
                <button type="button" className="btn btn-ghost" onClick={onClose}>
                  Close
                </button>
              </div>

              <div className="media-frame aspect-[16/10]">
                {showRecording && recording ? (
                  isExternalVideo(recording) ? (
                    <iframe
                      title={`${project.title} recording`}
                      src={toEmbedUrl(recording)}
                      className="h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      key={recording}
                      src={recording}
                      controls
                      className="h-full w-full object-cover"
                    />
                  )
                ) : (
                  <Image
                    src={shots[activeShot] ?? project.media.cover}
                    alt={`${project.title} screenshot ${activeShot + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 980px) 100vw, 980px"
                  />
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {shots.map((shot, index) => (
                  <button
                    key={shot}
                    type="button"
                    onClick={() => {
                      setShowRecording(false);
                      setActiveShot(index);
                    }}
                    className={`relative h-16 w-24 overflow-hidden rounded-xl border transition ${
                      !showRecording && activeShot === index
                        ? "border-accent"
                        : "border-line opacity-80 hover:opacity-100"
                    }`}
                    aria-label={`View screenshot ${index + 1}`}
                  >
                    <Image src={shot} alt="" fill className="object-cover" sizes="96px" />
                  </button>
                ))}

                {recording ? (
                  <button
                    type="button"
                    onClick={() => setShowRecording(true)}
                    className={`h-16 min-w-28 rounded-xl border px-3 text-sm transition ${
                      showRecording
                        ? "border-accent bg-accent-soft text-ink"
                        : "border-line text-muted hover:border-accent hover:text-accent"
                    }`}
                  >
                    Recording
                  </button>
                ) : null}
              </div>

              <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr]">
                <div>
                  <p className="text-[1.05rem] leading-8 text-ink-soft">{project.description}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="eyebrow mb-3">Stack</p>
                    <ul className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-line px-3 py-1 text-sm text-ink-soft"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    {demo ? (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary w-full"
                      >
                        Open live demo
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost w-full"
                      >
                        View on GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
