"use client"

import { useRef, type ReactNode } from "react"

export function Magnetic({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  function move(event: React.MouseEvent<HTMLSpanElement>) {
    const node = ref.current
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const box = node.getBoundingClientRect()
    const x = event.clientX - (box.left + box.width / 2)
    const y = event.clientY - (box.top + box.height / 2)
    node.style.transform = `translate(${x * 0.28}px, ${y * 0.4}px)`
  }

  function leave() {
    if (ref.current) ref.current.style.transform = ""
  }

  return (
    <span
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`inline-flex transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </span>
  )
}
