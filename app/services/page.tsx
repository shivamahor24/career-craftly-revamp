import type { Metadata } from "next"
import Link from "next/link"
import { Chapter } from "@/components/chapter"
import { Magnetic } from "@/components/magnetic"
import { Reveal, SpotlightCard, StaggerGroup, StaggerItem } from "@/components/reveal"
import { buttonVariants } from "@/components/ui/button"
import { offerings, site } from "@/lib/site"
import { cn } from "cn"

export const metadata: Metadata = {
  title: "Programs and services",
  description:
    "Technical and career programs from Career Craftly: websites, apps, software, AI agents, digital marketing, coaching, resumes, and interview preparation.",
  alternates: { canonical: "/services" },
}

function ProgramGrid({
  id,
  kicker,
  title,
  accentColor,
  items,
}: {
  id: string
  kicker: string
  title: string
  accentColor: string
  items: { title: string; desc: string; perks: string[] }[]
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <Reveal className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 px-3 py-1 font-mono text-[0.68rem] tracking-[0.2em] text-[#a492ed] uppercase">
            <span aria-hidden className={`size-1.5 rounded-full ${accentColor}`} />
            {kicker}
          </p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-white md:text-5xl">{title}</h2>
        </div>
      </Reveal>
      <StaggerGroup className="grid gap-4 md:grid-cols-2" stagger={0.09}>
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <SpotlightCard as="article" className="glass tilt h-full rounded-3xl p-7">
              <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#d3d3d3]">{item.desc}</p>
              <ul className="mt-5 space-y-2">
                {item.perks.map((perk) => (
                  <li key={perk} className="flex gap-2 text-sm text-[#d3d3d3]">
                    <span aria-hidden className="text-[#a492ed]">
                      +
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#a492ed] transition-all duration-300 group-hover:translate-x-1 hover:text-white"
              >
                Talk to us about {item.title}
                <span aria-hidden>→</span>
              </Link>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <Chapter book="IV" title="The disciplines" />
      <Reveal delay={0.06} y={24}>
        <h1 className="font-display mt-4 max-w-4xl text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.92] tracking-tight text-white">
          Programs & services
        </h1>
      </Reveal>
      <Reveal delay={0.14} y={20}>
        <p className="mt-6 max-w-2xl text-lg text-[#d3d3d3]">
          End-to-end solutions for professionals building careers and companies scaling with AI — all under one roof.
        </p>
      </Reveal>
      <div className="mt-16 space-y-20">
        <ProgramGrid
          id="technical"
          kicker="Discipline I — Technical"
          title="Technical programs"
          accentColor="bg-[#0061ff]"
          items={offerings.technical}
        />
        <ProgramGrid
          id="career"
          kicker="Discipline II — Career"
          title="Career programs"
          accentColor="bg-[#aa15dd]"
          items={offerings.career}
        />
      </div>
      <Reveal className="mt-20" y={28}>
        <SpotlightCard className="glass rounded-[2rem] px-6 py-12 text-center md:px-12">
          <h2 className="font-display text-4xl tracking-tight text-white md:text-5xl">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[#d3d3d3]">
            Let&apos;s discuss how our services can help you achieve your goals — book a free discovery call today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Magnetic>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full border border-[#a492ed]/30 bg-[#6d3fea] px-7 text-base text-white shadow-[0_0_28px_rgba(109,63,234,0.45)] hover:bg-[#7b4df2]"
                )}
              >
                Book a free call
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-[#a492ed]/25 bg-[#a492ed]/12 px-7 text-base text-[#d3d3d3] hover:border-[#a492ed]/50 hover:bg-[#a492ed]/20 hover:text-white"
                )}
              >
                Email us directly
              </a>
            </Magnetic>
          </div>
        </SpotlightCard>
      </Reveal>
    </div>
  )
}
