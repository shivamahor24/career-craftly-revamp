"use client"

import { motion, useReducedMotion } from "motion/react"

export function Chapter({ book, title }: { book: string; title: string }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <p className="eyebrow inline-flex items-center gap-2.5 text-[#a492ed]">
        <span aria-hidden className="size-1.5 rounded-full bg-[#6d3fea] shadow-[0_0_12px_rgba(109,63,234,0.8)]" />
        <span aria-hidden className="h-px w-3 bg-[#a492ed]/50" />
        <span>
          Book {book}
          <span className="mx-2 text-[#a492ed]/50">—</span>
          {title}
        </span>
      </p>
    )
  }

  return (
    <motion.p
      initial={{ opacity: 0, x: -12, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="eyebrow inline-flex items-center gap-2.5 text-[#a492ed]"
    >
      <motion.span
        aria-hidden
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="size-1.5 rounded-full bg-[#6d3fea] shadow-[0_0_12px_rgba(109,63,234,0.8)]"
      />
      <span aria-hidden className="h-px w-3 bg-[#a492ed]/50" />
      <span>
        Book {book}
        <span className="mx-2 text-[#a492ed]/50">—</span>
        {title}
      </span>
    </motion.p>
  )
}
