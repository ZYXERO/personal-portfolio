"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionIntro } from "@/components/SectionIntro";
import { site } from "@/data/site";

export function AboutPreview() {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad py-24 md:py-28">
      <div className="section-max">
        <SectionIntro
          eyebrow="About"
          title={site.motto}
          description="A quick intro — who I am, where I’m at in school, and what I’m aiming for."
          href="/about"
          cta="More about me"
        />
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 border-t border-line pt-10 md:grid-cols-[1.35fr_0.65fr]"
        >
          <p className="text-lg leading-8 text-ink-soft">{site.aboutPreview}</p>
          <div className="space-y-5 text-sm leading-7 text-muted">
            <p>
              <span className="text-ink">School</span>
              <br />
              {site.graduation}
            </p>
            <p>
              <span className="text-ink">Based in</span>
              <br />
              {site.location}
            </p>
            <p>
              <span className="text-ink">Looking for</span>
              <br />
              {site.availability}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
