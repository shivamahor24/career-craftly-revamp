"use client"

import { useEffect, useRef, useState } from "react"

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/)
    if (!match || reduce) return

    const prefix = match[1]
    const num = match[2]
    const suffix = match[3]
    const target = Number(num)
    const decimals = num.includes(".") ? num.split(".")[1].length : 0
    let started = false
    let frame = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 1100)
          const eased = 1 - (1 - progress) ** 3
          const current = target * eased
          const shown = decimals ? current.toFixed(decimals) : String(Math.round(current))
          setDisplay(`${prefix}${shown}${suffix}`)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
