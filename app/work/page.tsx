import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CountUp } from "@/components/count-up"
import { Reveal, SpotlightCard, StaggerGroup, StaggerItem } from "@/components/reveal"
import { caseStudies } from "@/lib/case-studies"
import { portfolioStats } from "@/lib/site"

export const metadata: Metadata = {
  title: "Case studies",
  description:
    "Selected Career Craftly projects from the studio portfolio, including Forenotes, The GP Edge, MarketMover AI, Luxe Ride, and Canticle Event Company.",
  alternates: { canonical: "/work" },
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <Reveal y={14}>
        <p className="eyebrow">Portfolio</p>
      </Reveal>
      <Reveal delay={0.06} y={24}>
        <h1 className="font-display mt-4 max-w-4xl text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.92] tracking-tight">
          Selected work
        </h1>
      </Reveal>
      <Reveal delay={0.14} y={20}>
        <p className="mt-6 max-w-2xl text-lg text-foreground/75">
          Ten written case studies from the Career Craftly portfolio, plus two engagements named in the index. Figures below are the portfolio cover stats.
        </p>
      </Reveal>
      <StaggerGroup as="dl" className="mt-12 grid grid-cols-1 gap-6 border-y border-white/10 py-8 sm:grid-cols-3" stagger={0.1}>
        {portfolioStats.map((stat) => (
          <StaggerItem key={stat.label}>
            <dt>
              <CountUp value={stat.value} className="font-display text-5xl" />
            </dt>
            <dd className="mt-2 text-sm text-foreground/65">{stat.label}</dd>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-foreground/60">
          In addition to the projects listed, 5 more projects are part of delivery but are not included in the portfolio because of active confidentiality commitments.
        </p>
      </Reveal>
      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2" stagger={0.09}>
        {caseStudies.map((study) => (
          <StaggerItem key={study.slug}>
            <SpotlightCard as="article" className="glass tilt h-full overflow-hidden rounded-3xl">
              {study.image ? (
                <Link href={`/work/${study.slug}`} className="zoom-frame block">
                  <Image
                    src={study.image}
                    alt={study.imageAlt ?? ""}
                    width={900}
                    height={577}
                    className="h-64 w-full object-cover object-top"
                  />
                </Link>
              ) : (
                <div className="flex h-40 items-end bg-white/[0.03] p-6">
                  <p className="text-xs tracking-[0.18em] text-foreground/50 uppercase">Index listing</p>
                </div>
              )}
              <div className="p-6">
                <p className="text-xs tracking-[0.18em] text-primary uppercase">{study.number}</p>
                <h2 className="font-display mt-2 text-4xl tracking-tight">
                  <Link href={`/work/${study.slug}`}>{study.name}</Link>
                </h2>
                <p className="mt-2 text-sm text-foreground/65">{study.category}</p>
                {study.metrics[0] ? (
                  <p className="mt-4 font-display text-3xl text-primary">
                    {study.metrics[0].value}{" "}
                    <span className="font-sans text-sm text-foreground/60">{study.metrics[0].label}</span>
                  </p>
                ) : null}
                <Link
                  href={`/work/${study.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary transition-transform duration-300 group-hover:translate-x-1"
                >
                  {study.limited ? "View listing" : "Read case study"}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  )
}
