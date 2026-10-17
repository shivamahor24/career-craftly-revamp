"use client"

import { motion, useReducedMotion } from "motion/react"

export function Interlude({ text, cite }: { text: string; cite: string }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <figure className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
        <blockquote className="font-display text-[clamp(1.55rem,3vw,2.45rem)] leading-[1.2] tracking-tight">
          “{text}”
        </blockquote>
        <figcaption className="mt-6 font-mono text-[0.65rem] tracking-[0.16em] text-foreground/70 uppercase">
          {cite}
        </figcaption>
      </figure>
    )
  }

  return (
    <figure className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
      <motion.div
        aria-hidden
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mb-6 h-px w-12 bg-white/25"
      />
      <motion.blockquote
        initial={{ opacity: 0, y: 24, filter: "blur(8px)", clipPath: "inset(0 0 100% 0)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-[clamp(1.55rem,3vw,2.45rem)] leading-[1.2] tracking-tight"
      >
        “{text}”
      </motion.blockquote>
      <motion.figcaption
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 font-mono text-[0.65rem] tracking-[0.16em] text-foreground/70 uppercase"
      >
        {cite}
      </motion.figcaption>
    </figure>
  )
}
