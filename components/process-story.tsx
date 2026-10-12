"use client"

import { useEffect, useRef, useState } from "react"
import { process as processSteps } from "@/lib/site"

export function ProcessStory() {
  const [active, setActive] = useState(0)
  const items = useRef<Array<HTMLLIElement | null>>([])

  useEffect(() => {
    const nodes = items.current.filter((node): node is HTMLLIElement => Boolean(node))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const index = Number((visible.target as HTMLElement).dataset.index)
        if (!Number.isNaN(index)) setActive(index)
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.5, 0.8] }
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const current = processSteps[active]

  return (
    <div className="mx-auto grid max-w-[92rem] gap-6 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-32">
          <p className="eyebrow">{current.virtue}</p>
          <p className="font-display mt-3 text-[clamp(6rem,10vw,9rem)] leading-none tracking-tight">{current.roman}</p>
          <p className="mt-4 font-display text-3xl tracking-tight">{current.title}</p>
          <ol className="mt-10 space-y-3">
            {processSteps.map((step, index) => (
              <li key={step.n}>
                <a
                  href={`#step-${step.n}`}
                  className={`flex items-baseline gap-4 py-1 font-mono text-xs tracking-[0.18em] uppercase transition-colors ${
                    index === active ? "text-foreground" : "text-foreground/35 hover:text-foreground/70"
                  }`}
                >
                  <span className="w-6">{step.roman}</span>
                  <span>
                    {step.virtue}
                    <span className="mt-1 block normal-case tracking-normal text-foreground/45">{step.title}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <ol className="lg:col-span-7">
        {processSteps.map((step, index) => (
          <li
            key={step.n}
            id={`step-${step.n}`}
            data-index={index}
            ref={(node) => {
              items.current[index] = node
            }}
            className="flex min-h-[62vh] scroll-mt-28 flex-col justify-center border-t border-white/10 py-16"
          >
            <p className="eyebrow">{step.virtue}</p>
            <p className="font-display mt-3 text-6xl tracking-tight text-white/80 lg:hidden">{step.roman}</p>
            <h3 className="font-display mt-4 text-4xl tracking-tight md:text-6xl">{step.title}</h3>
            <p className="mt-4 font-mono text-xs tracking-[0.16em] text-foreground/50 uppercase">{step.gloss}</p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/70">{step.body}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
