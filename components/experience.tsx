"use client"

import Lenis from "lenis"
import { useEffect, useState } from "react"

export function Experience() {
  const [intro, setIntro] = useState<"off" | "on" | "leave">("off")

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const coarse = window.matchMedia("(pointer: coarse)").matches
    let lenis: Lenis | null = null
    let raf = 0

    if (!reduce && !coarse) {
      lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
      })
      const loop = (time: number) => {
        lenis?.raf(time)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }

    let hideTimer = 0
    let startTimer = 0
    if (!reduce && sessionStorage.getItem("cc-intro") !== "1") {
      startTimer = window.setTimeout(() => setIntro("on"), 40)
      hideTimer = window.setTimeout(() => {
        sessionStorage.setItem("cc-intro", "1")
        setIntro("leave")
      }, 1600)
    }

    return () => {
      cancelAnimationFrame(raf)
      lenis?.destroy()
      window.clearTimeout(hideTimer)
      window.clearTimeout(startTimer)
    }
  }, [])

  useEffect(() => {
    if (intro !== "leave") return
    const timer = window.setTimeout(() => setIntro("off"), 480)
    return () => window.clearTimeout(timer)
  }, [intro])

  return (
    <>
      <Cursor />
      {intro !== "off" ? (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[60]">
          <div className={`intro-bar ${intro === "on" ? "is-on" : ""}`} />
          <button
            type="button"
            className="pointer-events-auto absolute top-20 right-5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.18em] text-white/80 uppercase backdrop-blur-md md:right-8"
            onClick={() => {
              sessionStorage.setItem("cc-intro", "1")
              setIntro("leave")
            }}
          >
            Skip intro
          </button>
        </div>
      ) : null}
    </>
  )
}

function Cursor() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const fine = window.matchMedia("(pointer: fine)").matches
    if (reduce || !fine) return
    const ring = document.getElementById("cursor-ring")
    if (!ring) return
    setReady(true)
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let cx = x
    let cy = y
    let raf = 0
    const move = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      const target = event.target
      const hot =
        target instanceof Element &&
        Boolean(target.closest("a, button, input, textarea, select, summary, [role='button']"))
      ring.dataset.hot = hot ? "1" : "0"
    }
    const loop = () => {
      cx += (x - cx) * 0.18
      cy += (y - cy) * 0.18
      ring.style.transform = `translate3d(${cx}px, ${cy}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener("pointermove", move, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("pointermove", move)
    }
  }, [])

  return (
    <div
      id="cursor-ring"
      aria-hidden
      data-ready={ready ? "1" : "0"}
      className="cursor-ring pointer-events-none fixed top-0 left-0 z-[70]"
    />
  )
}
