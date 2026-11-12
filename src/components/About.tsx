"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="section-pad scroll-mt-24 py-24 md:py-32">
      <div className="section-max grid gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="eyebrow mb-4">About</p>
          <h2 className="display text-4xl font-semibold md:text-5xl">Quiet systems. Clear interfaces.</h2>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="space-y-6 text-lg leading-8 text-ink-soft"
        >
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="pt-2 text-base text-muted">
            Currently based in {site.location}, studying Computer Engineering at {site.school}.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
