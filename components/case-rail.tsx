"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"

type RailStudy = {
  slug: string
  name: string
  number: string
  category: string
  image: string
  imageAlt: string
  metric?: string
  metricLabel?: string
  obstacle?: string
}

export function CaseRail({ studies }: { studies: RailStudy[] }) {
  const wrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const root = wrap.current
    const inner = track.current
    if (!root || !inner) return
    const desktop = window.matchMedia("(min-width: 1024px)")
    if (!desktop.matches) return

    const onScroll = () => {
      const rect = root.getBoundingClientRect()
      const distance = root.offsetHeight - window.innerHeight
      const progress = distance <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / distance))
      const travel = Math.max(0, inner.scrollWidth - window.innerWidth + 48)
      inner.style.transform = `translate3d(${-progress * travel}px,0,0)`
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      inner.style.transform = ""
    }
  }, [reduce])

  const cards = studies.map((study) => (
    <Link
      key={study.slug}
      href={`/work/${study.slug}`}
      className="zoom-frame group flex w-[84vw] shrink-0 snap-center flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] lg:w-[44vw]"
    >
      <div className="overflow-hidden">
        {/* Native img: next/image inside this client scroller breaks static prerender. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={study.image}
          alt={study.imageAlt}
          width={900}
          height={577}
          className="aspect-[16/10] w-full object-cover object-top"
        />
      </div>
      <div className="flex items-end justify-between gap-6 p-6 md:p-8">
        <div>
          <p className="eyebrow">
            {study.number}
            <span className="mx-2 text-white/30">/</span>
            Case study
          </p>
          <h3 className="font-display mt-3 text-4xl tracking-tight md:text-5xl">{study.name}</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/60">{study.category}</p>
          {study.obstacle ? (
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/75">
              <span className="eyebrow mr-2">Obstacle</span>
              {study.obstacle}
            </p>
          ) : null}
        </div>
        {study.metric ? (
          <p className="text-right">
            <span className="font-display block text-4xl tracking-tight md:text-5xl">{study.metric}</span>
            <span className="mt-1 block max-w-[8rem] text-xs text-foreground/50">{study.metricLabel}</span>
          </p>
        ) : null}
      </div>
    </Link>
  ))

  if (reduce) {
    return <div className="mx-auto grid max-w-[92rem] gap-4 px-5 md:px-8 lg:grid-cols-2">{cards}</div>
  }

  return (
    <div ref={wrap} className="relative lg:h-[340vh]">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:overflow-hidden">
        <div className="w-full max-lg:overflow-x-auto max-lg:snap-x max-lg:pb-2">
          <div ref={track} className="flex w-max gap-4 px-5 md:px-8">
            {cards}
          </div>
        </div>
      </div>
    </div>
  )
}
