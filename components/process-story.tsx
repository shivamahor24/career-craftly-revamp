"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Reveal } from "@/components/reveal"
import { process as processSteps } from "@/lib/site"

export function ProcessStory() {
  const [active, setActive] = useState(0)
  const items = useRef<Array<HTMLLIElement | null>>([])
  const reduce = useReducedMotion()

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
  const progress = (active + 1) / processSteps.length

  return (
    <div className="mx-auto grid max-w-[92rem] gap-6 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-32">
          {reduce ? (
            <div>
              <p className="eyebrow">{current.virtue}</p>
              <p className="font-display mt-3 text-[clamp(6rem,10vw,9rem)] leading-none tracking-tight">
                {current.roman}
              </p>
              <p className="mt-4 font-display text-3xl tracking-tight">{current.title}</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={current.n}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="eyebrow">{current.virtue}</p>
                <p className="font-display mt-3 text-[clamp(6rem,10vw,9rem)] leading-none tracking-tight">
                  {current.roman}
                </p>
                <p className="mt-4 font-display text-3xl tracking-tight">{current.title}</p>
              </motion.div>
            </AnimatePresence>
          )}

          <div className="relative mt-10 pl-5">
            <div aria-hidden className="absolute top-1 bottom-1 left-0 w-px bg-white/15" />
            {!reduce ? (
              <motion.div
                aria-hidden
                className="absolute top-1 bottom-1 left-0 w-px origin-top bg-white"
                animate={{ scaleY: progress }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <ol className="space-y-3">
              {processSteps.map((step, index) => {
                const isActive = index === active
                return (
                  <li key={step.n} className="relative">
                    {isActive && !reduce ? (
                      <motion.span
                        layoutId="process-active-dot"
                        aria-hidden
                        className="absolute top-2.5 -left-[22.5px] size-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.85)]"
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ) : null}
                    <a
                      href={`#step-${step.n}`}
                      className={`flex items-baseline gap-4 py-1 font-mono text-xs tracking-[0.18em] uppercase transition-all duration-300 ${
                        isActive ? "translate-x-1 text-foreground" : "text-foreground/35 hover:text-foreground/70"
                      }`}
                    >
                      <span className="w-6">{step.roman}</span>
                      <span>
                        {step.virtue}
                        <span className="mt-1 block normal-case tracking-normal text-foreground/45">{step.title}</span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
      <ol className="lg:col-span-7">
        {processSteps.map((step, index) => {
          const isActive = index === active
          return (
            <li
              key={step.n}
              id={`step-${step.n}`}
              data-index={index}
              ref={(node) => {
                items.current[index] = node
              }}
              className="flex min-h-[62vh] scroll-mt-28 flex-col justify-center border-t border-white/10 py-16"
            >
              <Reveal delay={0.05} y={24}>
                <div
                  className={`transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "lg:opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-white/40">{step.n}</span>
                    <span aria-hidden className="h-px w-6 bg-white/20" />
                    <p className="eyebrow">{step.virtue}</p>
                  </div>
                  <p className="font-display mt-3 text-6xl tracking-tight text-white/80 lg:hidden">{step.roman}</p>
                  <h3 className="font-display mt-4 text-4xl tracking-tight md:text-6xl">{step.title}</h3>
                  <p className="mt-4 font-mono text-xs tracking-[0.16em] text-foreground/50 uppercase">{step.gloss}</p>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/70">{step.body}</p>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
