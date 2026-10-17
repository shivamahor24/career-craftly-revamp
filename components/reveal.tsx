"use client"

import { motion, useReducedMotion } from "motion/react"
import { useRef, useState, type MouseEvent, type ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "none"

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.75,
  y = 28,
  blur = true,
  scale = 1,
  direction = "up",
  margin = "-70px",
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  blur?: boolean
  scale?: number
  direction?: Direction
  margin?: `${number}px`
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>

  const offset = {
    up: { x: 0, y },
    down: { x: 0, y: -y },
    left: { x: y, y: 0 },
    right: { x: -y, y: 0 },
    none: { x: 0, y: 0 },
  }[direction]

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale,
        filter: blur ? "blur(8px)" : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

type ContainerTag = "div" | "ul" | "ol" | "dl" | "section"
type ItemTag = "div" | "li" | "article" | "figure"

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.04,
  as = "div",
  margin = "-60px",
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delayChildren?: number
  as?: ContainerTag
  margin?: `${number}px`
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    const StaticTag = as
    return <StaticTag className={className}>{children}</StaticTag>
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({
  children,
  className,
  as = "div",
  y = 22,
  blur = true,
  scale = 0.985,
}: {
  children: ReactNode
  className?: string
  as?: ItemTag
  y?: number
  blur?: boolean
  scale?: number
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    const StaticTag = as
    return <StaticTag className={className}>{children}</StaticTag>
  }

  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y,
          scale,
          filter: blur ? "blur(6px)" : "blur(0px)",
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.68,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}

export function SpotlightCard({
  children,
  className,
  as = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "article" | "li"
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const reduce = useReducedMotion()

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const Tag = as

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        ref.current = node
      }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden ${className ?? ""}`}
    >
      {!reduce ? (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.09), transparent 45%)`,
          }}
        />
      ) : null}
      <div className="relative z-10 h-full">{children}</div>
    </Tag>
  )
}

export function AnimatedLine({
  className,
  delay = 0,
  vertical = false,
}: {
  className?: string
  delay?: number
  vertical?: boolean
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    return (
      <div
        aria-hidden
        className={`${vertical ? "w-px" : "h-px w-full"} bg-white/15 ${className ?? ""}`}
      />
    )
  }

  return (
    <motion.div
      aria-hidden
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: vertical ? "top center" : "left center" }}
      className={`${vertical ? "w-px" : "h-px w-full"} bg-white/15 ${className ?? ""}`}
    />
  )
}
