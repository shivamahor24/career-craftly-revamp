import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { CaseRail } from "@/components/case-rail"
import { Chapter } from "@/components/chapter"
import { ColumnMark } from "@/components/column-mark"
import { Interlude } from "@/components/interlude"
import { CountUp } from "@/components/count-up"
import { DayMark } from "@/components/day-mark"
import { HeroTitle } from "@/components/hero-title"
import { Magnetic } from "@/components/magnetic"
import { MaskHeading } from "@/components/mask-heading"
import { ParticleField } from "@/components/particle-field"
import { ProcessStory } from "@/components/process-story"
import { AnimatedLine, Reveal, SpotlightCard, StaggerGroup, StaggerItem } from "@/components/reveal"
import { caseStudies } from "@/lib/case-studies"
import { inOurControl, maxims, notInOurControl, quotes } from "@/lib/philosophy"
import {
  benefitChips,
  homeStats,
  offerings,
  serviceTicker,
  site,
  testimonials,
  tools,
  trustCards,
  whyFigures,
  whyPoints,
} from "@/lib/site"
import { cn } from "cn"

const featured = caseStudies.find((study) => study.slug === "forenotes") ?? caseStudies[0]
const rail = caseStudies
  .filter((study) => study.image)
  .map((study) => ({
    slug: study.slug,
    name: study.name,
    number: study.number,
    category: study.category,
    image: study.image!,
    imageAlt: study.imageAlt ?? study.name,
    metric: study.metrics[0]?.value,
    metricLabel: study.metrics[0]?.label,
    obstacle: study.problems[0],
  }))

const toolsReversed = [...tools].reverse()

const statAccents = ["text-[#6d3fea]", "text-[#a492ed]", "text-[#02ab7a]", "text-[#0061ff]"]
const trustAccents = ["text-[#a492ed]", "text-[#02ab7a]", "text-[#f7931a]"]

const ctaClass = cn(
  buttonVariants({ size: "lg" }),
  "h-12 rounded-full border border-[#a492ed]/30 bg-[#6d3fea] px-7 text-base text-white shadow-[0_0_28px_rgba(109,63,234,0.45)] hover:bg-[#7b4df2]"
)
const ghostClass = cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "h-12 rounded-full border-[#a492ed]/25 bg-[#a492ed]/12 px-7 text-base text-[#d3d3d3] hover:border-[#a492ed]/50 hover:bg-[#a492ed]/20 hover:text-white"
)

export default function HomePage() {
  return (
    <>
      <section className="hero-stage relative flex min-h-[100svh] flex-col overflow-hidden">
        <div aria-hidden className="hero-grid pointer-events-none absolute inset-0" />
        <div aria-hidden className="hero-glow pointer-events-none absolute top-16 right-[6%]" />
        <ParticleField />
        <div className="relative mx-auto flex w-full max-w-[92rem] flex-1 flex-col justify-center px-5 pt-24 pb-8 md:px-8">
          <Chapter book="I" title="On the work" />
          <Reveal delay={0.08} y={16}>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 px-3.5 py-1 font-mono text-[0.68rem] tracking-[0.2em] text-[#a492ed] uppercase">
              <span aria-hidden className="size-1.5 rounded-full bg-[#6d3fea] shadow-[0_0_8px_#6d3fea]" />
              AI solutions for modern businesses
            </p>
          </Reveal>
          <Reveal delay={0.16} y={20}>
            <p className="mt-4 max-w-xl font-display text-base italic leading-snug text-[#d3d3d3] md:text-lg">
              “{quotes.rising.text}”
              <span className="mt-2 block font-mono text-[0.62rem] not-italic tracking-[0.18em] text-[#a492ed]/75 uppercase">
                {quotes.rising.cite}
              </span>
            </p>
          </Reveal>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <HeroTitle text="Where intelligent automation meets real-world execution." />
            </div>
            <div className="lg:col-span-4 lg:pb-3">
              <Reveal delay={0.32} y={24}>
                <p className="max-w-md text-base leading-relaxed text-[#d3d3d3] md:text-lg">
                  We blend creativity with technical expertise to help businesses build engaging digital products,
                  strengthen their online presence, and grow faster with AI-powered, user-centric solutions.
                </p>
              </Reveal>
              <Reveal delay={0.44} y={20}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Magnetic>
                    <Link href="/contact" className={ctaClass}>
                      Get started
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link href="/work" className={ghostClass}>
                      View case studies
                    </Link>
                  </Magnetic>
                </div>
              </Reveal>
              <Reveal delay={0.54} y={14}>
                <p className="mt-6 font-mono text-xs tracking-[0.18em] text-[#a492ed]/80 uppercase">{site.location}</p>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="relative border-y border-white/10 bg-[#020010]/70 backdrop-blur-md">
          <div className="marquee-mask overflow-hidden py-4">
            <div className="marquee-track flex w-max gap-10 pr-10">
              {[...serviceTicker, ...serviceTicker].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="font-mono text-xs font-medium tracking-[0.22em] text-[#d3d3d3] uppercase transition-colors hover:text-white"
                >
                  {item}
                  <span aria-hidden className="ml-10 text-[#6d3fea]">
                    ·
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="code" className="light-band scroll-mt-24 border-b border-white/10">
        <div className="mx-auto max-w-[92rem] px-5 py-16 md:px-8 md:py-20">
          <Chapter book="II" title="Our code" />
          <MaskHeading className="font-display mt-4 max-w-4xl text-[clamp(2.6rem,4.6vw,4.4rem)] leading-[0.92] tracking-tight text-white">
            What is ours to do
          </MaskHeading>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7" delay={0.08}>
              <figure>
                <div className="flex items-start gap-6">
                  <ColumnMark className="mt-1 hidden h-40 w-12 shrink-0 text-[#a492ed]/65 sm:block" />
                  <blockquote className="font-display text-[clamp(1.45rem,2.3vw,2.15rem)] leading-[1.2] tracking-tight text-white">
                    “{quotes.obstacle.text}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 font-mono text-[0.65rem] tracking-[0.16em] text-[#a492ed] uppercase">
                  {quotes.obstacle.cite}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.18} direction="left">
              <DayMark />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#d3d3d3]">“{quotes.interval.text}”</p>
              <p className="mt-2 font-mono text-[0.65rem] tracking-[0.16em] text-[#a492ed]/80 uppercase">{quotes.interval.cite}</p>
            </Reveal>
          </div>

          <div className="mt-10 pt-8">
            <AnimatedLine className="mb-8" />
            <Reveal>
              <p className="eyebrow">{quotes.control.cite}</p>
              <p className="font-display mt-4 max-w-3xl text-3xl leading-snug tracking-tight text-white md:text-4xl">
                “{quotes.control.text}”
              </p>
            </Reveal>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div className="rounded-3xl border border-[#a492ed]/20 bg-[#a492ed]/[0.05] p-6 md:p-8">
                <Reveal delay={0.05}>
                  <h3 className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-[#02ab7a] uppercase">
                    <span aria-hidden className="size-1.5 rounded-full bg-[#02ab7a] shadow-[0_0_8px_#02ab7a]" />
                    In our control
                  </h3>
                </Reveal>
                <AnimatedLine className="mt-5" delay={0.1} />
                <StaggerGroup as="ul" className="mt-5 space-y-4" stagger={0.07}>
                  {inOurControl.map((line) => (
                    <StaggerItem as="li" key={line} className="text-sm leading-relaxed text-[#d3d3d3]">
                      {line}
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <Reveal delay={0.12}>
                  <h3 className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-[#a492ed]/75 uppercase">
                    <span aria-hidden className="size-1.5 rounded-full bg-[#a492ed]/60" />
                    Not in our control
                  </h3>
                </Reveal>
                <AnimatedLine className="mt-5" delay={0.18} />
                <StaggerGroup as="ul" className="mt-5 space-y-4" stagger={0.07} delayChildren={0.12}>
                  {notInOurControl.map((line) => (
                    <StaggerItem as="li" key={line} className="text-sm leading-relaxed text-[#d3d3d3]/70">
                      {line}
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#020010]" aria-label="Maxims">
        <p className="px-5 pt-8 text-center font-mono text-[0.62rem] tracking-[0.22em] text-[#a492ed] uppercase md:px-8">
          Principles
        </p>
        <div className="marquee-mask overflow-hidden py-6">
          <div className="marquee-track marquee-slow flex w-max gap-12 pr-12">
            {[...maxims, ...maxims].map((line, index) => (
              <span key={`${line}-${index}`} className="font-display text-lg italic tracking-tight text-[#d3d3d3] md:text-2xl">
                {line}
                <span aria-hidden className="ml-12 text-[#6d3fea]">
                  ·
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[92rem] px-5 pt-16 md:px-8">
          <Chapter book="III" title="The reckoning" />
          <Reveal delay={0.08}>
            <p className="mt-4 max-w-xl font-display text-2xl italic leading-snug text-[#d3d3d3] md:text-3xl">
              Count only what the work changed.
            </p>
          </Reveal>
        </div>
        <StaggerGroup className="mx-auto grid max-w-[92rem] grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {homeStats.map((stat, index) => (
            <StaggerItem
              key={stat.label}
              className="relative border-white/10 px-5 py-12 md:px-8 md:py-20 lg:border-r lg:last:border-r-0"
            >
              <AnimatedLine className="mb-6" delay={index * 0.08} />
              <CountUp
                value={stat.value}
                className={`font-display text-6xl tracking-tight md:text-7xl lg:text-8xl ${statAccents[index % statAccents.length]}`}
              />
              <p className="mt-4 max-w-[12rem] text-sm text-[#d3d3d3]">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-24 md:px-8 md:py-36">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Chapter book="IV" title="The disciplines" />
            <MaskHeading className="font-display mt-4 text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-tight">
              Everything you need to grow
            </MaskHeading>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl font-display text-2xl italic leading-snug text-[#a492ed]">
                A discipline is a promise kept in the work.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5" delay={0.18}>
            <p className="max-w-md text-lg text-[#d3d3d3]">
              From technical development to career transformation — end-to-end solutions for professionals and businesses.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-4 lg:grid-cols-2" stagger={0.12}>
          <StaggerItem>
            <SpotlightCard className="glass tilt rounded-3xl p-8 md:p-10">
              <Link href="/services#technical" className="group block">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#0061ff]/35 bg-[#0061ff]/15 px-3 py-1 font-mono text-[0.65rem] tracking-[0.2em] text-[#a492ed] uppercase">
                    <span aria-hidden className="size-1.5 rounded-full bg-[#0061ff]" />
                    Discipline I — Technical
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-sm text-[#a492ed] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                  >
                    →
                  </span>
                </div>
                <h3 className="font-display mt-6 text-5xl tracking-tight text-white transition-transform duration-500 group-hover:translate-x-2 md:text-7xl">
                  Technical programs
                </h3>
                <p className="mt-6 max-w-md text-[#d3d3d3]">
                  Websites, apps, software, digital marketing, and custom AI agents built to scale with the work.
                </p>
              </Link>
            </SpotlightCard>
          </StaggerItem>
          <StaggerItem>
            <SpotlightCard className="glass tilt rounded-3xl p-8 md:p-10">
              <Link href="/services#career" className="group block">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#aa15dd]/35 bg-[#aa15dd]/15 px-3 py-1 font-mono text-[0.65rem] tracking-[0.2em] text-[#a492ed] uppercase">
                    <span aria-hidden className="size-1.5 rounded-full bg-[#aa15dd]" />
                    Discipline II — Career
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-sm text-[#a492ed] transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                  >
                    →
                  </span>
                </div>
                <h3 className="font-display mt-6 text-5xl tracking-tight text-white transition-transform duration-500 group-hover:translate-x-2 md:text-7xl">
                  Career programs
                </h3>
                <p className="mt-6 max-w-md text-[#d3d3d3]">
                  Coaching, resumes, skill development, interview preparation, and an AI career assistant.
                </p>
              </Link>
            </SpotlightCard>
          </StaggerItem>
        </StaggerGroup>

        <StaggerGroup className="mt-10 border-t border-white/10" stagger={0.05}>
          {offerings.technical.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href="/services#technical"
                className="group grid gap-3 border-b border-white/10 px-2 py-8 transition-colors duration-300 hover:bg-[#a492ed]/[0.05] md:grid-cols-12 md:items-start md:gap-8"
              >
                <p className="eyebrow md:col-span-3">Discipline · Technical</p>
                <h3 className="font-display text-3xl tracking-tight text-white transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-[#a492ed] md:col-span-4 md:text-4xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#d3d3d3] md:col-span-5">{item.desc}</p>
              </Link>
            </StaggerItem>
          ))}
          {offerings.career.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href="/services#career"
                className="group grid gap-3 border-b border-white/10 px-2 py-8 transition-colors duration-300 hover:bg-[#a492ed]/[0.05] md:grid-cols-12 md:items-start md:gap-8"
              >
                <p className="eyebrow md:col-span-3">Discipline · Career</p>
                <h3 className="font-display text-3xl tracking-tight text-white transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-[#a492ed] md:col-span-4 md:text-4xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#d3d3d3] md:col-span-5">{item.desc}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-[92rem] px-5 py-24 md:px-8 md:py-36">
          <Chapter book="V" title="On trust" />
          <MaskHeading className="font-display mt-4 max-w-4xl text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-tight">
            Why brands trust Career Craftly
          </MaskHeading>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-xl font-display text-2xl italic text-[#a492ed]">Trust is what remains after the work is counted.</p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg text-[#d3d3d3]">
              AI-powered solutions that are fast, reliable, and built to scale with your ambitions.
            </p>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-px bg-[#a492ed]/20 md:grid-cols-3" stagger={0.12}>
            {trustCards.map((card, index) => (
              <StaggerItem key={card.title} className="bg-[#020010]">
                <SpotlightCard as="article" className="h-full bg-[#020010] p-8 md:p-10">
                  <p
                    className={`font-display text-4xl tracking-tight transition-transform duration-500 group-hover:-translate-y-0.5 ${trustAccents[index % trustAccents.length]}`}
                  >
                    {card.metric}
                  </p>
                  <h3 className="mt-8 text-xl font-medium text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#d3d3d3]">{card.body}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <StaggerGroup as="ul" className="mt-8 flex flex-wrap gap-2" stagger={0.05} delayChildren={0.15}>
            {benefitChips.map((chip) => (
              <StaggerItem
                as="li"
                key={chip}
                className="rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 px-4 py-2 font-mono text-xs tracking-wide text-[#d3d3d3] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a492ed]/50 hover:text-white"
              >
                {chip}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="pt-24 md:pt-36">
        <div className="mx-auto flex max-w-[92rem] items-end justify-between gap-6 px-5 md:px-8">
          <div>
            <Chapter book="VI" title="On obstacles" />
            <MaskHeading className="font-display mt-4 text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-tight">
              Case studies
            </MaskHeading>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl font-display text-2xl italic text-[#a492ed]">
                Name the obstacle. Do the work. Then read what changed.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link href="/work" className="nav-link hidden text-sm text-[#a492ed] hover:text-white sm:inline">
              All projects
            </Link>
          </Reveal>
        </div>

        <article className="mx-auto mt-14 grid max-w-[92rem] items-center gap-10 px-5 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 px-3 py-1 font-mono text-[0.68rem] tracking-[0.2em] text-[#a492ed] uppercase">
                <span aria-hidden className="size-1.5 rounded-full bg-[#f7931a]" />
                {featured.number} · {featured.category}
              </p>
              <h3 className="font-display mt-5 text-6xl tracking-tight md:text-7xl">
                <Link href={`/work/${featured.slug}`} className="transition-colors hover:text-[#a492ed]">
                  {featured.name}
                </Link>
              </h3>
              <p className="mt-6 text-[#d3d3d3]">{featured.summary}</p>
            </Reveal>
            {featured.problems[0] && featured.built[0] ? (
              <StaggerGroup as="ol" className="mt-8 space-y-5 border-t border-white/10 pt-8" stagger={0.08}>
                <StaggerItem as="li">
                  <p className="eyebrow">I · The obstacle</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#d3d3d3]">{featured.problems[0]}</p>
                </StaggerItem>
                <StaggerItem as="li">
                  <p className="eyebrow">II · The action</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#d3d3d3]">{featured.built[0]}</p>
                </StaggerItem>
                <StaggerItem as="li">
                  <p className="eyebrow">III · The outcome</p>
                  <p className="mt-2 text-sm text-[#d3d3d3]/75">Measured below, from the work itself.</p>
                </StaggerItem>
              </StaggerGroup>
            ) : null}
            <StaggerGroup as="dl" className="mt-10 grid grid-cols-2 gap-8" stagger={0.08}>
              {featured.metrics.slice(0, 4).map((metric, index) => (
                <StaggerItem key={metric.label}>
                  <dt className={`font-display text-5xl tracking-tight md:text-6xl ${statAccents[index % statAccents.length]}`}>
                    {metric.value}
                  </dt>
                  <dd className="mt-2 text-sm text-[#d3d3d3]">{metric.label}</dd>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal delay={0.2}>
              <Link href={`/work/${featured.slug}`} className="nav-link mt-10 inline-block text-sm text-[#a492ed] hover:text-white">
                Read the case study
              </Link>
            </Reveal>
          </div>
          {featured.image ? (
            <Reveal className="lg:col-span-7" delay={0.12} scale={0.97}>
              <Link
                href={`/work/${featured.slug}`}
                className="zoom-frame block overflow-hidden rounded-[1.6rem] border border-[#a492ed]/25 shadow-[0_0_50px_rgba(109,63,234,0.18)] transition-all hover:border-[#a492ed]/50 hover:shadow-[0_0_60px_rgba(109,63,234,0.3)]"
              >
                <Image
                  src={featured.image}
                  alt={featured.imageAlt ?? featured.name}
                  width={900}
                  height={577}
                  className="h-auto w-full"
                />
              </Link>
            </Reveal>
          ) : null}
        </article>
        <Link href="/work" className="nav-link mx-auto mt-8 block max-w-[92rem] px-5 text-sm text-[#a492ed] sm:hidden md:px-8">
          All projects
        </Link>
      </section>

      <section className="mt-16 md:mt-24" aria-label="Project showcase">
        <CaseRail studies={rail} />
      </section>

      <Interlude text={quotes.disturbed.text} cite={quotes.disturbed.cite} />

      <section id="virtues" className="light-band scroll-mt-24 border-y border-white/10 py-24 md:py-36">
        <div className="mx-auto max-w-[92rem] px-5 md:px-8">
          <Chapter book="VII" title="The virtues" />
          <Reveal delay={0.05}>
            <p className="mt-3 font-mono text-[0.65rem] tracking-[0.18em] text-[#a492ed]/80 uppercase">
              I Wisdom · II Justice · III Courage · IV Temperance
            </p>
          </Reveal>
          <MaskHeading className="font-display mt-4 max-w-4xl text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-tight text-white">
            How Career Craftly works
          </MaskHeading>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl font-display text-2xl italic text-[#a492ed]">
              See clearly. Fit the plan. Act. Then measure, and stop.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-[#d3d3d3]">
              A structured, result-driven process designed to move you from where you are to where you want to be.
            </p>
          </Reveal>
        </div>
        <div className="mt-8">
          <ProcessStory />
        </div>
      </section>

      <section className="mx-auto grid max-w-[92rem] gap-16 px-5 py-24 md:px-8 md:py-36 lg:grid-cols-2">
        <div>
          <Chapter book="VIII" title="Why the work" />
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-md font-display text-2xl italic text-[#a492ed]">
              What is ours to do, we do. The rest we leave.
            </p>
          </Reveal>
          <MaskHeading className="font-display mt-4 text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.92] tracking-tight">
            Built for ambitious professionals and brands
          </MaskHeading>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg text-[#d3d3d3]">
              We combine cutting-edge AI with deep industry expertise to deliver outcomes that matter — faster careers, leaner operations, and measurable growth.
            </p>
          </Reveal>
          <StaggerGroup as="ul" className="mt-8 space-y-3" stagger={0.06}>
            {whyPoints.map((point) => (
              <StaggerItem as="li" key={point} className="flex gap-3 text-sm text-[#d3d3d3]">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#6d3fea] shadow-[0_0_8px_#6d3fea]" />
                {point}
              </StaggerItem>
            ))}
          </StaggerGroup>
          <Reveal delay={0.2}>
            <Magnetic className="mt-10">
              <Link href="/contact" className={ctaClass}>
                Book a free consultation
              </Link>
            </Magnetic>
          </Reveal>
        </div>
        <StaggerGroup className="grid content-start grid-cols-2 gap-px bg-[#a492ed]/20" stagger={0.1}>
          {whyFigures.map((figure, index) => (
            <StaggerItem key={figure.label} className="bg-[#020010]">
              <SpotlightCard className="h-full bg-[#020010] p-7 md:p-10">
                <CountUp
                  value={figure.value}
                  className={`font-display text-5xl md:text-6xl ${statAccents[index % statAccents.length]}`}
                />
                <p className="mt-3 text-sm text-[#d3d3d3]">{figure.label}</p>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <Interlude text={quotes.dyed.text} cite={quotes.dyed.cite} />

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[92rem] px-5 py-24 md:px-8 md:py-36">
          <Chapter book="IX" title="Witnesses" />
          <MaskHeading className="font-display mt-4 text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-tight">
            Real people. Real results.
          </MaskHeading>
          <Reveal delay={0.08}>
            <p className="mt-5 max-w-2xl font-display text-2xl italic text-[#a492ed]">A life is read by its acts.</p>
            <p className="mt-4 max-w-2xl text-[#d3d3d3]">
              Professionals who transformed their careers and businesses with Career Craftly.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-7" delay={0.1}>
              <figure className="rounded-3xl border border-[#a492ed]/25 bg-[#a492ed]/[0.06] p-8 md:p-10">
                <blockquote className="font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.15] tracking-tight text-white">
                  “{testimonials[0].quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <span className="block font-medium text-white">{testimonials[0].name}</span>
                  <span className="text-[#a492ed]">{testimonials[0].role}</span>
                </figcaption>
              </figure>
            </Reveal>
            <StaggerGroup className="flex flex-col justify-end gap-12 lg:col-span-5" stagger={0.14}>
              {testimonials.slice(1).map((item) => (
                <StaggerItem as="figure" key={item.name} className="border-t border-[#a492ed]/25 pt-6">
                  <blockquote className="font-display text-2xl leading-snug tracking-tight text-white">“{item.quote}”</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="block font-medium text-white">{item.name}</span>
                    <span className="text-[#a492ed]">{item.role}</span>
                  </figcaption>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="py-16" aria-label="Technologies and tools we use">
        <Reveal>
          <p className="text-center font-mono text-[0.68rem] tracking-[0.22em] text-[#a492ed] uppercase">
            Technologies and tools we use
          </p>
        </Reveal>
        <div className="marquee-mask mt-8 space-y-3 overflow-hidden">
          <div className="marquee-track flex w-max gap-3 px-4">
            {[...tools, ...tools].map((tool, index) => (
              <span
                key={`row1-${tool}-${index}`}
                className="rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 px-5 py-2 font-mono text-xs text-[#d3d3d3] transition-all duration-300 hover:border-[#a492ed]/50 hover:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="marquee-track marquee-reverse flex w-max gap-3 px-4">
            {[...toolsReversed, ...toolsReversed].map((tool, index) => (
              <span
                key={`row2-${tool}-${index}`}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-mono text-xs text-[#d3d3d3]/80 transition-all duration-300 hover:border-[#a492ed]/40 hover:bg-[#a492ed]/12 hover:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[92rem] px-5 py-28 text-center md:px-8 md:py-40">
          <Chapter book="X" title="The summons" />
          <Reveal delay={0.06}>
            <p className="mx-auto mt-4 max-w-lg font-display text-2xl italic text-[#a492ed]">
              Rise, and do the work of the day.
            </p>
          </Reveal>
          <Reveal delay={0.14} scale={0.96} y={32}>
            <h2 className="font-display mx-auto mt-6 max-w-5xl text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.04em] text-white">
              Ready to accelerate your growth?
            </h2>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-[#d3d3d3]">
              Join 200+ forward-thinking professionals and businesses already leveraging AI to stay ahead.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic>
                <Link href="/contact" className={ctaClass}>
                  Start your transformation
                </Link>
              </Magnetic>
              <Magnetic>
                <a href={site.calendly} target="_blank" rel="noreferrer" className={ghostClass}>
                  Schedule on Calendly
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
