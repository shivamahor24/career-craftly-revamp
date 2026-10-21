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
              <p className="eyebrow text-[#a492ed]">{current.virtue}</p>
              <p className="font-display mt-3 bg-gradient-to-b from-white via-[#d3d3d3] to-[#a492ed] bg-clip-text text-[clamp(6rem,10vw,9rem)] leading-none tracking-tight text-transparent">
                {current.roman}
              </p>
              <p className="mt-4 font-display text-3xl tracking-tight text-white">{current.title}</p>
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
                <p className="eyebrow text-[#a492ed]">{current.virtue}</p>
                <p className="font-display mt-3 bg-gradient-to-b from-white via-[#d3d3d3] to-[#a492ed] bg-clip-text text-[clamp(6rem,10vw,9rem)] leading-none tracking-tight text-transparent">
                  {current.roman}
                </p>
                <p className="mt-4 font-display text-3xl tracking-tight text-white">{current.title}</p>
              </motion.div>
            </AnimatePresence>
          )}

          <div className="relative mt-10 pl-5">
            <div aria-hidden className="absolute top-1 bottom-1 left-0 w-px bg-[#a492ed]/20" />
            {!reduce ? (
              <motion.div
                aria-hidden
                className="absolute top-1 bottom-1 left-0 w-px origin-top bg-gradient-to-b from-[#6d3fea] to-[#a492ed] shadow-[0_0_16px_rgba(109,63,234,0.65)]"
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
                        className="absolute top-2.5 -left-[22.5px] size-1.5 rounded-full bg-[#6d3fea] ring-2 ring-[#a492ed]/45 shadow-[0_0_16px_rgba(109,63,234,0.85)]"
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      />
                    ) : null}
                    <a
                      href={`#step-${step.n}`}
                      className={`flex items-baseline gap-4 rounded-xl px-2.5 py-1.5 font-mono text-xs tracking-[0.18em] uppercase transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 border border-[#a492ed]/25 bg-[#a492ed]/12 text-white shadow-[0_0_24px_rgba(109,63,234,0.2)]"
                          : "border border-transparent text-[#d3d3d3]/45 hover:border-[#a492ed]/15 hover:bg-[#a492ed]/[0.05] hover:text-[#d3d3d3]"
                      }`}
                    >
                      <span className={`w-6 ${isActive ? "text-[#a492ed]" : ""}`}>{step.roman}</span>
                      <span>
                        {step.virtue}
                        <span className={`mt-1 block normal-case tracking-normal ${isActive ? "text-[#d3d3d3]" : "text-[#d3d3d3]/50"}`}>
                          {step.title}
                        </span>
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
                  className={`rounded-3xl border p-6 transition-all duration-500 md:p-8 ${
                    isActive
                      ? "border-[#6d3fea]/40 bg-[#a492ed]/12 opacity-100 shadow-[0_0_36px_rgba(109,63,234,0.18)]"
                      : "border-transparent bg-transparent lg:opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-[#a492ed]/30 bg-[#6d3fea]/20 px-2.5 py-0.5 font-mono text-[0.65rem] tracking-[0.2em] text-[#a492ed]">
                      {step.n}
                    </span>
                    <span aria-hidden className="h-px w-6 bg-[#6d3fea]/60" />
                    <p className="eyebrow">{step.virtue}</p>
                  </div>
                  <p className="font-display mt-3 text-6xl tracking-tight text-[#a492ed] lg:hidden">{step.roman}</p>
                  <h3 className="font-display mt-4 text-4xl tracking-tight text-white md:text-6xl">{step.title}</h3>
                  <p className="mt-4 font-mono text-xs tracking-[0.16em] text-[#a492ed]/80 uppercase">{step.gloss}</p>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-[#d3d3d3]">{step.body}</p>
                </div>
              </Reveal>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
