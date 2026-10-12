"use client"

import { useEffect, useRef } from "react"

type Node = { x: number; y: number; vx: number; vy: number }

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const narrow = window.matchMedia("(max-width: 767px)").matches
    if (reduce || narrow) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let width = 0
    let height = 0
    let raf = 0
    let running = true
    const pointer = { x: -9999, y: -9999 }
    const nodes: Node[] = Array.from({ length: 42 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00028,
      vy: (Math.random() - 0.5) * 0.00028,
    }))

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.x = event.clientX - rect.left
      pointer.y = event.clientY - rect.top
    }

    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
    })

    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!running || width === 0) return
      const drift = window.scrollY * 0.04
      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = "rgba(255,255,255,0.07)"
      ctx.beginPath()
      ctx.ellipse(width * 0.72, height * 0.4, Math.min(width, 920) * 0.24, height * 0.2, 0, 0, Math.PI * 2)
      ctx.stroke()
      ctx.beginPath()
      ctx.ellipse(width * 0.72, height * 0.4, Math.min(width, 920) * 0.12, height * 0.1, 0, 0, Math.PI * 2)
      ctx.stroke()

      for (const node of nodes) {
        if (pointer.x > 0) {
          const dx = pointer.x / width - node.x
          const dy = pointer.y / height - node.y
          const dist = Math.hypot(dx, dy)
          if (dist < 0.28) {
            node.vx += dx * 0.00009
            node.vy += dy * 0.00009
          }
        }
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0.02 || node.x > 0.98) node.vx *= -1
        if (node.y < 0.02 || node.y > 0.98) node.vy *= -1
        node.vx *= 0.992
        node.vy *= 0.992
      }

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        const ax = a.x * width
        const ay = a.y * height + drift
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const bx = b.x * width
          const by = b.y * height + drift
          const distance = Math.hypot(ax - bx, ay - by)
          if (distance < 150) {
            ctx.strokeStyle = `rgba(255,255,255,${(1 - distance / 150) * 0.2})`
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(bx, by)
            ctx.stroke()
          }
        }
        ctx.fillStyle = "rgba(255,255,255,0.82)"
        ctx.beginPath()
        ctx.arc(ax, ay, 1.35, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    resize()
    io.observe(canvas)
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("blur", onLeave)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("blur", onLeave)
    }
  }, [])

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />
}
