"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-[var(--header-h)]">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/hero-atmosphere.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_40%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,247,245,0.28)_0%,rgba(244,247,245,0.55)_42%,rgba(244,247,245,0.94)_78%,var(--paper)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(215,235,231,0.45),transparent_42%)]" />
      </div>

      <div className="section-pad section-max relative flex min-h-[calc(100svh-var(--header-h))] flex-col justify-end pb-16 pt-20 md:pb-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="eyebrow mb-6">{site.availability}</p>

          <h1 className="display text-[clamp(3.4rem,11vw,7.4rem)] font-semibold leading-[0.9] text-ink">
            {site.name}
          </h1>

          <p className="mt-7 max-w-2xl text-[1.15rem] leading-8 text-ink-soft md:text-[1.3rem] md:leading-9">
            {site.headline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              View selected work
            </a>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">
              Email me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6 text-sm text-muted"
        >
          <span>{site.title}</span>
          <span>{site.school}</span>
          <span>{site.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
