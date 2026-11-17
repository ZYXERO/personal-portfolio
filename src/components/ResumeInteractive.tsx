"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ResumeViewer } from "@/components/ResumeViewer";
import { certifications, experience, skillGroups } from "@/data/experience";

export function ResumeInteractive() {
  const reduce = useReducedMotion();
  const [activeSkill, setActiveSkill] = useState(skillGroups[0]?.id ?? "");
  const activeGroup = skillGroups.find((group) => group.id === activeSkill) ?? skillGroups[0];

  return (
    <div className="space-y-16">
      <ResumeViewer />

      <section>
        <p className="eyebrow mb-4">Experience</p>
        <h2 className="display text-3xl font-semibold md:text-4xl">Roles & research</h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {experience.map((role, index) => (
            <motion.li
              key={role.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group py-7"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="display text-2xl font-semibold">{role.role}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {role.org} · {role.location}
                  </p>
                </div>
                <p className="mono text-xs tracking-[0.12em] text-muted uppercase">
                  {role.dates}
                </p>
              </div>
              <p className="mt-4 max-w-3xl text-[1.05rem] leading-8 text-ink-soft">
                {role.summary}
              </p>
              <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-7 text-muted opacity-90 transition group-hover:opacity-100">
                {role.highlights.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      <section>
        <p className="eyebrow mb-4">Skills</p>
        <h2 className="display text-3xl font-semibold md:text-4xl">Grouped by craft</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
          Hover or select a group for a short summary of how that skill set shows up in my work.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-wrap gap-2 lg:flex-col">
            {skillGroups.map((group) => {
              const active = group.id === activeGroup?.id;
              return (
                <button
                  key={group.id}
                  type="button"
                  onMouseEnter={() => setActiveSkill(group.id)}
                  onFocus={() => setActiveSkill(group.id)}
                  onClick={() => setActiveSkill(group.id)}
                  className={`rounded-full border px-4 py-2 text-left text-sm transition lg:rounded-[1rem] lg:px-4 lg:py-3 ${
                    active
                      ? "border-accent bg-accent-soft text-ink"
                      : "border-line text-ink-soft hover:border-accent"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>
          <div className="rounded-[1.35rem] border border-line bg-[color-mix(in_oklab,white_62%,transparent)] p-6 md:p-8">
            <h3 className="display text-2xl font-semibold">{activeGroup?.label}</h3>
            <p className="mt-3 text-[1.05rem] leading-8 text-ink-soft">{activeGroup?.summary}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {activeGroup?.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <p className="eyebrow mb-4">Certifications</p>
        <h2 className="display text-3xl font-semibold md:text-4xl">Credentials</h2>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {certifications.map((cert) => (
            <li
              key={cert.id}
              className="rounded-[1.2rem] border border-line p-5 transition hover:border-accent"
              title={cert.detail}
            >
              <h3 className="font-medium text-ink">{cert.name}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{cert.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
