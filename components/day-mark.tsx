"use client"

import { useEffect, useState } from "react"
import { quotes } from "@/lib/philosophy"

export function DayMark() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }))
    }
    tick()
    const id = window.setInterval(tick, 30000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="rounded-2xl border border-[#a492ed]/20 bg-[#a492ed]/[0.06] p-6">
      <p className="eyebrow">Memento · a short interval</p>
      <p
        className="font-display mt-4 bg-gradient-to-r from-white via-[#d3d3d3] to-[#a492ed] bg-clip-text text-6xl tracking-tight text-transparent tabular-nums md:text-7xl"
        suppressHydrationWarning
      >
        {time ?? "——"}
      </p>
      <p className="mt-4 max-w-xs font-display text-xl italic leading-snug text-[#d3d3d3]">“{quotes.time.text}”</p>
      <p className="mt-3 font-mono text-[0.65rem] tracking-[0.16em] text-[#a492ed]/80 uppercase">{quotes.time.cite}</p>
    </div>
  )
}
