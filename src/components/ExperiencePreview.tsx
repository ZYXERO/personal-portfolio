"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionIntro } from "@/components/SectionIntro";
import { experience, skillGroups } from "@/data/experience";

export function ExperiencePreview() {
  const reduce = useReducedMotion();
  const topRoles = experience.slice(0, 2);
  const topSkills = skillGroups.slice(0, 4);

  return (
    <section className="section-pad py-24 md:py-28">
      <div className="section-max">
        <SectionIntro
          eyebrow="Resume"
          title="Experience, skills, and downloadable resumes."
          description="A compact preview of roles and skill groups. Open the resume page for interactive detail and PDF downloads."
          href="/resume"
          cta="Open resume page"
        />

        <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ul className="space-y-6">
            {topRoles.map((role, index) => (
              <motion.li
                key={role.id}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="border-b border-line pb-6"
              >
                <p className="mono text-xs tracking-[0.14em] text-muted uppercase">
                  {role.dates}
                </p>
                <h3 className="display mt-2 text-2xl font-semibold">{role.role}</h3>
                <p className="mt-1 text-sm text-muted">{role.org}</p>
                <p className="mt-3 text-[1.02rem] leading-7 text-ink-soft">{role.summary}</p>
              </motion.li>
            ))}
          </ul>

          <div className="grid gap-3 sm:grid-cols-2">
            {topSkills.map((group) => (
              <div
                key={group.id}
                className="rounded-[1.1rem] border border-line bg-[color-mix(in_oklab,white_55%,transparent)] p-4"
                title={group.summary}
              >
                <p className="text-sm font-medium text-ink">{group.label}</p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {group.items.slice(0, 4).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
