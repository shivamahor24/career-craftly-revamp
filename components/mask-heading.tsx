"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

export function MaskHeading({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion()
  if (reduce) return <h2 className={className}>{children}</h2>
  return (
    <h2 className={`overflow-hidden pb-[0.08em] ${className ?? ""}`}>
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </h2>
  )
}
