"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ProjectDetail } from "@/components/ProjectDetail";
import { SectionIntro } from "@/components/SectionIntro";
import type { Project } from "@/lib/types";

type Props = {
  projects: Project[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showMoreHref?: string;
  showMoreLabel?: string;
};

export function ProjectList({
  projects,
  eyebrow = "Selected work",
  title = "Projects with demos, screenshots, and recordings.",
  description = "Open any project for media, stack details, GitHub, and live demo links.",
  showMoreHref,
  showMoreLabel = "Browse all projects",
}: Props) {
  const [active, setActive] = useState<Project | null>(null);
  const reduce = useReducedMotion();

  return (
    <section className="section-pad py-24 md:py-28">
      <div className="section-max">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          description={description}
          href={showMoreHref}
          cta={showMoreLabel}
        />

        <ul className="divide-y divide-line border-y border-line">
          {projects.map((project, index) => (
            <motion.li
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setActive(project)}
                className="group grid w-full grid-cols-1 items-stretch gap-6 py-8 text-left md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-10 md:py-10"
              >
                <div className="order-2 flex flex-col justify-center md:order-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                    <span className="mono tracking-[0.12em] uppercase">{project.year}</span>
                    <span aria-hidden>·</span>
                    <span>{project.role}</span>
                  </div>
                  <h3 className="display mt-3 text-3xl font-semibold transition-colors group-hover:text-accent md:text-[2.05rem]">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-[1.05rem] leading-8 text-ink-soft">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                    <span className="link-quiet text-accent">
                      View media & details
                      <span aria-hidden>→</span>
                    </span>
                    <span className="text-muted">
                      {project.media.screenshots.length} screenshot
                      {project.media.screenshots.length === 1 ? "" : "s"}
                      {project.media.recording ? " · recording" : ""}
                      {project.media.demoUrl || project.liveUrl ? " · demo" : ""}
                    </span>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <div className="media-frame aspect-[16/10] transition duration-500 group-hover:-translate-y-1">
                    <Image
                      src={project.media.cover}
                      alt=""
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 520px"
                    />
                  </div>
                </div>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
}
