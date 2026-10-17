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

const ctaClass = cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-7 text-base")
const ghostClass = cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "h-12 rounded-full border-white/25 bg-transparent px-7 text-base text-foreground hover:bg-white/10"
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
            <p className="eyebrow mt-4">AI solutions for modern businesses</p>
          </Reveal>
          <Reveal delay={0.16} y={20}>
            <p className="mt-4 max-w-xl font-display text-base italic leading-snug text-foreground/60 md:text-lg">
              “{quotes.rising.text}”
              <span className="mt-2 block font-mono text-[0.62rem] not-italic tracking-[0.18em] text-foreground/40 uppercase">
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
                <p className="max-w-md text-base leading-relaxed text-foreground/75 md:text-lg">
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
                <p className="mt-6 font-mono text-xs tracking-[0.18em] text-foreground/50 uppercase">{site.location}</p>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="relative border-y border-white/10 bg-black/40">
          <div className="marquee-mask overflow-hidden py-4">
            <div className="marquee-track flex w-max gap-10 pr-10">
              {[...serviceTicker, ...serviceTicker].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="font-mono text-xs font-medium tracking-[0.22em] text-foreground/55 uppercase transition-colors hover:text-foreground"
                >
                  {item}
                  <span aria-hidden className="ml-10 text-white/30">
                    ·
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="code" className="scroll-mt-24 border-b border-white/10">
        <div className="mx-auto max-w-[92rem] px-5 py-16 md:px-8 md:py-20">
          <Chapter book="II" title="Our code" />
          <MaskHeading className="font-display mt-4 max-w-4xl text-[clamp(2.6rem,4.6vw,4.4rem)] leading-[0.92] tracking-tight">
            What is ours to do
          </MaskHeading>
          <div className="mt-8 grid items-start gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7" delay={0.08}>
              <figure>
                <div className="flex items-start gap-6">
                  <ColumnMark className="mt-1 hidden h-40 w-12 shrink-0 text-white/50 sm:block" />
                  <blockquote className="font-display text-[clamp(1.45rem,2.3vw,2.15rem)] leading-[1.2] tracking-tight">
                    “{quotes.obstacle.text}”
                  </blockquote>
                </div>
                <figcaption className="mt-6 font-mono text-[0.65rem] tracking-[0.16em] text-foreground/45 uppercase">
                  {quotes.obstacle.cite}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={0.18} direction="left">
              <DayMark />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/55">“{quotes.interval.text}”</p>
              <p className="mt-2 font-mono text-[0.65rem] tracking-[0.16em] text-foreground/40 uppercase">{quotes.interval.cite}</p>
            </Reveal>
          </div>

          <div className="mt-10 pt-8">
            <AnimatedLine className="mb-8" />
            <Reveal>
              <p className="eyebrow">{quotes.control.cite}</p>
              <p className="font-display mt-4 max-w-3xl text-3xl leading-snug tracking-tight md:text-4xl">“{quotes.control.text}”</p>
            </Reveal>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <Reveal delay={0.05}>
                  <h3 className="font-mono text-xs tracking-[0.2em] text-foreground/70 uppercase">In our control</h3>
                </Reveal>
                <AnimatedLine className="mt-5" delay={0.1} />
                <StaggerGroup as="ul" className="mt-5 space-y-4" stagger={0.07}>
                  {inOurControl.map((line) => (
                    <StaggerItem as="li" key={line} className="text-sm leading-relaxed text-foreground/80">
                      {line}
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
              <div>
                <Reveal delay={0.12}>
                  <h3 className="font-mono text-xs tracking-[0.2em] text-foreground/45 uppercase">Not in our control</h3>
                </Reveal>
                <AnimatedLine className="mt-5" delay={0.18} />
                <StaggerGroup as="ul" className="mt-5 space-y-4" stagger={0.07} delayChildren={0.12}>
                  {notInOurControl.map((line) => (
                    <StaggerItem as="li" key={line} className="text-sm leading-relaxed text-foreground/55">
                      {line}
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10" aria-label="Maxims">
        <p className="px-5 pt-8 text-center font-mono text-[0.62rem] tracking-[0.22em] text-foreground/40 uppercase md:px-8">
          Principles
        </p>
        <div className="marquee-mask overflow-hidden py-6">
          <div className="marquee-track marquee-slow flex w-max gap-12 pr-12">
            {[...maxims, ...maxims].map((line, index) => (
              <span key={`${line}-${index}`} className="font-display text-lg italic tracking-tight text-foreground/70 md:text-2xl">
                {line}
                <span aria-hidden className="ml-12 text-white/25">
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
            <p className="mt-4 max-w-xl font-display text-2xl italic leading-snug text-foreground/75 md:text-3xl">
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
              <AnimatedLine className="mb-6 bg-white/20" delay={index * 0.08} />
              <CountUp value={stat.value} className="font-display text-6xl tracking-tight md:text-7xl lg:text-8xl" />
              <p className="mt-4 max-w-[12rem] text-sm text-foreground/60">{stat.label}</p>
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
              <p className="mt-5 max-w-xl font-display text-2xl italic leading-snug text-foreground/70">
                A discipline is a promise kept in the work.
              </p>
            </Reveal>
          </div>
          <Reveal className="lg:col-span-5" delay={0.18}>
            <p className="max-w-md text-lg text-foreground/70">
              From technical development to career transformation — end-to-end solutions for professionals and businesses.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-4 lg:grid-cols-2" stagger={0.12}>
          <StaggerItem>
            <SpotlightCard className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/25 md:p-10">
              <Link href="/services#technical" className="group block">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">Discipline I — Technical</p>
                  <span
                    aria-hidden
                    className="font-mono text-sm text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                  >
                    →
                  </span>
                </div>
                <h3 className="font-display mt-6 text-5xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-7xl">
                  Technical programs
                </h3>
                <p className="mt-6 max-w-md text-foreground/70">
                  Websites, apps, software, digital marketing, and custom AI agents built to scale with the work.
                </p>
              </Link>
            </SpotlightCard>
          </StaggerItem>
          <StaggerItem>
            <SpotlightCard className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-white/25 md:p-10">
              <Link href="/services#career" className="group block">
                <div className="flex items-center justify-between">
                  <p className="eyebrow">Discipline II — Career</p>
                  <span
                    aria-hidden
                    className="font-mono text-sm text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                  >
                    →
                  </span>
                </div>
                <h3 className="font-display mt-6 text-5xl tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:text-7xl">
                  Career programs
                </h3>
                <p className="mt-6 max-w-md text-foreground/70">
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
                className="group grid gap-3 border-b border-white/10 px-2 py-8 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12 md:items-start md:gap-8"
              >
                <p className="eyebrow md:col-span-3">Discipline · Technical</p>
                <h3 className="font-display text-3xl tracking-tight transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-white/80 md:col-span-4 md:text-4xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/65 md:col-span-5">{item.desc}</p>
              </Link>
            </StaggerItem>
          ))}
          {offerings.career.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href="/services#career"
                className="group grid gap-3 border-b border-white/10 px-2 py-8 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12 md:items-start md:gap-8"
              >
                <p className="eyebrow md:col-span-3">Discipline · Career</p>
                <h3 className="font-display text-3xl tracking-tight transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-white/80 md:col-span-4 md:text-4xl">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/65 md:col-span-5">{item.desc}</p>
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
            <p className="mt-5 max-w-xl font-display text-2xl italic text-foreground/70">Trust is what remains after the work is counted.</p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg text-foreground/70">
              AI-powered solutions that are fast, reliable, and built to scale with your ambitions.
            </p>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-px bg-white/10 md:grid-cols-3" stagger={0.12}>
            {trustCards.map((card) => (
              <StaggerItem key={card.title} className="bg-background">
                <SpotlightCard as="article" className="h-full bg-background p-8 md:p-10">
                  <p className="font-display text-4xl tracking-tight transition-transform duration-500 group-hover:-translate-y-0.5">
                    {card.metric}
                  </p>
                  <h3 className="mt-8 text-xl font-medium">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{card.body}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <StaggerGroup as="ul" className="mt-8 flex flex-wrap gap-2" stagger={0.05} delayChildren={0.15}>
            {benefitChips.map((chip) => (
              <StaggerItem
                as="li"
                key={chip}
                className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs tracking-wide text-foreground/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.04] hover:text-foreground"
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
              <p className="mt-5 max-w-xl font-display text-2xl italic text-foreground/70">
                Name the obstacle. Do the work. Then read what changed.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link href="/work" className="nav-link hidden text-sm sm:inline">
              All projects
            </Link>
          </Reveal>
        </div>

        <article className="mx-auto mt-14 grid max-w-[92rem] items-center gap-10 px-5 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">
                {featured.number} · {featured.category}
              </p>
              <h3 className="font-display mt-5 text-6xl tracking-tight md:text-7xl">
                <Link href={`/work/${featured.slug}`} className="transition-opacity hover:opacity-80">
                  {featured.name}
                </Link>
              </h3>
              <p className="mt-6 text-foreground/75">{featured.summary}</p>
            </Reveal>
            {featured.problems[0] && featured.built[0] ? (
              <StaggerGroup as="ol" className="mt-8 space-y-5 border-t border-white/10 pt-8" stagger={0.08}>
                <StaggerItem as="li">
                  <p className="eyebrow">I · The obstacle</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{featured.problems[0]}</p>
                </StaggerItem>
                <StaggerItem as="li">
                  <p className="eyebrow">II · The action</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{featured.built[0]}</p>
                </StaggerItem>
                <StaggerItem as="li">
                  <p className="eyebrow">III · The outcome</p>
                  <p className="mt-2 text-sm text-foreground/60">Measured below, from the work itself.</p>
                </StaggerItem>
              </StaggerGroup>
            ) : null}
            <StaggerGroup as="dl" className="mt-10 grid grid-cols-2 gap-8" stagger={0.08}>
              {featured.metrics.slice(0, 4).map((metric) => (
                <StaggerItem key={metric.label}>
                  <dt className="font-display text-5xl tracking-tight md:text-6xl">{metric.value}</dt>
                  <dd className="mt-2 text-sm text-foreground/60">{metric.label}</dd>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal delay={0.2}>
              <Link href={`/work/${featured.slug}`} className="nav-link mt-10 inline-block text-sm">
                Read the case study
              </Link>
            </Reveal>
          </div>
          {featured.image ? (
            <Reveal className="lg:col-span-7" delay={0.12} scale={0.97}>
              <Link
                href={`/work/${featured.slug}`}
                className="zoom-frame block overflow-hidden rounded-[1.6rem] border border-white/10 transition-colors hover:border-white/25"
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
        <Link href="/work" className="nav-link mx-auto mt-8 block max-w-[92rem] px-5 text-sm sm:hidden md:px-8">
          All projects
        </Link>
      </section>

      <section className="mt-16 md:mt-24" aria-label="Project showcase">
        <CaseRail studies={rail} />
      </section>

      <Interlude text={quotes.disturbed.text} cite={quotes.disturbed.cite} />

      <section id="virtues" className="scroll-mt-24 border-y border-white/10 py-24 md:py-36">
        <div className="mx-auto max-w-[92rem] px-5 md:px-8">
          <Chapter book="VII" title="The virtues" />
          <Reveal delay={0.05}>
            <p className="mt-3 font-mono text-[0.65rem] tracking-[0.18em] text-foreground/40 uppercase">
              I Wisdom · II Justice · III Courage · IV Temperance
            </p>
          </Reveal>
          <MaskHeading className="font-display mt-4 max-w-4xl text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-tight">
            How Career Craftly works
          </MaskHeading>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl font-display text-2xl italic text-foreground/75">
              See clearly. Fit the plan. Act. Then measure, and stop.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-foreground/70">
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
            <p className="mt-4 max-w-md font-display text-2xl italic text-foreground/70">
              What is ours to do, we do. The rest we leave.
            </p>
          </Reveal>
          <MaskHeading className="font-display mt-4 text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.92] tracking-tight">
            Built for ambitious professionals and brands
          </MaskHeading>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg text-foreground/75">
              We combine cutting-edge AI with deep industry expertise to deliver outcomes that matter — faster careers, leaner operations, and measurable growth.
            </p>
          </Reveal>
          <StaggerGroup as="ul" className="mt-8 space-y-3" stagger={0.06}>
            {whyPoints.map((point) => (
              <StaggerItem as="li" key={point} className="flex gap-3 text-sm text-foreground/80">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-white" />
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
        <StaggerGroup className="grid content-start grid-cols-2 gap-px bg-white/10" stagger={0.1}>
          {whyFigures.map((figure) => (
            <StaggerItem key={figure.label} className="bg-background">
              <SpotlightCard className="h-full bg-background p-7 md:p-10">
                <CountUp value={figure.value} className="font-display text-5xl md:text-6xl" />
                <p className="mt-3 text-sm text-foreground/60">{figure.label}</p>
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
            <p className="mt-5 max-w-2xl font-display text-2xl italic text-foreground/70">A life is read by its acts.</p>
            <p className="mt-4 max-w-2xl text-foreground/65">
              Professionals who transformed their careers and businesses with Career Craftly.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-7" delay={0.1}>
              <figure>
                <blockquote className="font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.15] tracking-tight">
                  “{testimonials[0].quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm">
                  <span className="block font-medium">{testimonials[0].name}</span>
                  <span className="text-foreground/55">{testimonials[0].role}</span>
                </figcaption>
              </figure>
            </Reveal>
            <StaggerGroup className="flex flex-col justify-end gap-12 lg:col-span-5" stagger={0.14}>
              {testimonials.slice(1).map((item) => (
                <StaggerItem as="figure" key={item.name} className="border-t border-white/15 pt-6">
                  <blockquote className="font-display text-2xl leading-snug tracking-tight">“{item.quote}”</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="block font-medium">{item.name}</span>
                    <span className="text-foreground/55">{item.role}</span>
                  </figcaption>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <section className="py-16" aria-label="Technologies and tools we use">
        <Reveal>
          <p className="text-center font-mono text-[0.68rem] tracking-[0.22em] text-foreground/45 uppercase">
            Technologies and tools we use
          </p>
        </Reveal>
        <div className="marquee-mask mt-8 space-y-3 overflow-hidden">
          <div className="marquee-track flex w-max gap-3 px-4">
            {[...tools, ...tools].map((tool, index) => (
              <span
                key={`row1-${tool}-${index}`}
                className="rounded-full border border-white/12 px-5 py-2 font-mono text-xs text-foreground/75 transition-all duration-300 hover:border-white/35 hover:bg-white/[0.05] hover:text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="marquee-track marquee-reverse flex w-max gap-3 px-4">
            {[...toolsReversed, ...toolsReversed].map((tool, index) => (
              <span
                key={`row2-${tool}-${index}`}
                className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2 font-mono text-xs text-foreground/60 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-foreground"
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
            <p className="mx-auto mt-4 max-w-lg font-display text-2xl italic text-foreground/70">
              Rise, and do the work of the day.
            </p>
          </Reveal>
          <Reveal delay={0.14} scale={0.96} y={32}>
            <h2 className="font-display mx-auto mt-6 max-w-5xl text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.04em]">
              Ready to accelerate your growth?
            </h2>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-foreground/70">
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
