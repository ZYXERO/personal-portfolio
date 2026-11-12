"use client";

import { motion, useReducedMotion } from "motion/react";
import { site, socials } from "@/data/site";

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="section-pad scroll-mt-24 pb-24 pt-8 md:pb-32">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
        className="section-max overflow-hidden rounded-[1.75rem] border border-line bg-[linear-gradient(135deg,rgba(255,255,255,0.72),rgba(215,235,231,0.45))] px-6 py-12 shadow-[var(--shadow-soft)] md:px-12 md:py-16"
      >
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="display max-w-3xl text-4xl font-semibold md:text-5xl">
          Let’s talk about roles, internships, or building something useful.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">
          {site.availability}. The fastest way to reach me is email.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            {site.email}
          </a>
          {socials
            .filter((item) => item.label !== "Email")
            .map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                {item.label}
              </a>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
