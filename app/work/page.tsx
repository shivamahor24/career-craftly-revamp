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

const statColors = ["text-[#6d3fea]", "text-[#a492ed]", "text-[#02ab7a]"]
const badgeDotColors = ["bg-[#6d3fea]", "bg-[#0061ff]", "bg-[#02ab7a]", "bg-[#f7931a]", "bg-[#ff5000]", "bg-[#aa15dd]"]

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <Reveal y={14}>
        <p className="eyebrow">Portfolio</p>
      </Reveal>
      <Reveal delay={0.06} y={24}>
        <h1 className="font-display mt-4 max-w-4xl text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.92] tracking-tight text-white">
          Selected work
        </h1>
      </Reveal>
      <Reveal delay={0.14} y={20}>
        <p className="mt-6 max-w-2xl text-lg text-[#d3d3d3]">
          Ten written case studies from the Career Craftly portfolio, plus two engagements named in the index. Figures below are the portfolio cover stats.
        </p>
      </Reveal>
      <StaggerGroup as="dl" className="mt-12 grid grid-cols-1 gap-6 border-y border-white/10 py-8 sm:grid-cols-3" stagger={0.1}>
        {portfolioStats.map((stat, index) => (
          <StaggerItem key={stat.label}>
            <dt>
              <CountUp value={stat.value} className={`font-display text-5xl ${statColors[index % statColors.length]}`} />
            </dt>
            <dd className="mt-2 text-sm text-[#d3d3d3]">{stat.label}</dd>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-[#d3d3d3]/75">
          In addition to the projects listed, 5 more projects are part of delivery but are not included in the portfolio because of active confidentiality commitments.
        </p>
      </Reveal>
      <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2" stagger={0.09}>
        {caseStudies.map((study, index) => (
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
                <div className="flex h-40 items-end bg-[#a492ed]/[0.06] p-6">
                  <p className="text-xs tracking-[0.18em] text-[#a492ed] uppercase">Index listing</p>
                </div>
              )}
              <div className="p-6">
                <p className="inline-flex items-center gap-2 rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 px-2.5 py-0.5 font-mono text-xs tracking-[0.18em] text-[#a492ed] uppercase">
                  <span aria-hidden className={`size-1.5 rounded-full ${badgeDotColors[index % badgeDotColors.length]}`} />
                  {study.number}
                </p>
                <h2 className="font-display mt-3 text-4xl tracking-tight text-white">
                  <Link href={`/work/${study.slug}`} className="transition-colors hover:text-[#a492ed]">
                    {study.name}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-[#d3d3d3]">{study.category}</p>
                {study.metrics[0] ? (
                  <p className="mt-4 font-display text-3xl text-[#a492ed]">
                    {study.metrics[0].value}{" "}
                    <span className="font-sans text-sm text-[#d3d3d3]/75">{study.metrics[0].label}</span>
                  </p>
                ) : null}
                <Link
                  href={`/work/${study.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#a492ed] transition-all duration-300 group-hover:translate-x-1 hover:text-white"
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
