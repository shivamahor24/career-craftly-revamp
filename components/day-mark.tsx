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
    <div className="border-t border-white/15 pt-6">
      <p className="eyebrow">Memento · a short interval</p>
      <p className="font-display mt-4 text-6xl tracking-tight tabular-nums md:text-7xl" suppressHydrationWarning>
        {time ?? "——"}
      </p>
      <p className="mt-4 max-w-xs font-display text-xl italic leading-snug text-foreground/80">“{quotes.time.text}”</p>
      <p className="mt-3 font-mono text-[0.65rem] tracking-[0.16em] text-foreground/45 uppercase">{quotes.time.cite}</p>
    </div>
  )
}
