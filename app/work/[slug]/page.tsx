import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Reveal, SpotlightCard, StaggerGroup, StaggerItem } from "@/components/reveal"
import { buttonVariants } from "@/components/ui/button"
import { caseStudies, getCaseStudy, neighbors } from "@/lib/case-studies"
import { cn } from "cn"

type Params = { slug: string }

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const study = getCaseStudy(slug)
    if (!study) return { title: "Case study" }
    return {
      title: study.name,
      description: study.summary,
      alternates: { canonical: `/work/${study.slug}` },
      openGraph: {
        title: `${study.name} · Career Craftly`,
        description: study.summary,
        images: study.image ? [{ url: study.image, alt: study.imageAlt }] : undefined,
      },
    }
  })
}

const metricAccents = ["text-[#6d3fea]", "text-[#a492ed]", "text-[#02ab7a]", "text-[#0061ff]"]

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()
  const { prev, next } = neighbors(slug)

  return (
    <article className="pt-28 md:pt-36">
      <header className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal y={14}>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 px-3 py-1 font-mono text-[0.68rem] tracking-[0.2em] text-[#a492ed] uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-[#6d3fea] shadow-[0_0_8px_#6d3fea]" />
            Case study {study.number}
            {study.limited ? " · Index listing" : ""}
          </p>
        </Reveal>
        <Reveal delay={0.06} y={24}>
          <h1 className="font-display mt-4 text-[clamp(3.4rem,8vw,7rem)] leading-[0.9] tracking-tight text-white">{study.name}</h1>
        </Reveal>
        <Reveal delay={0.14} y={20}>
          <p className="mt-6 max-w-3xl text-lg text-[#d3d3d3] md:text-xl">{study.category}</p>
          {study.indexLabel ? (
            <p className="mt-3 text-sm text-[#a492ed]/80">Portfolio index: {study.indexLabel}.</p>
          ) : null}
        </Reveal>
      </header>

      {study.image ? (
        <Reveal delay={0.18} scale={0.985} className="mt-12">
          <div className="zoom-frame border-y border-[#a492ed]/20">
            <Image
              src={study.image}
              alt={study.imageAlt ?? ""}
              width={900}
              height={577}
              priority
              className="mx-auto h-auto max-h-[78vh] w-full object-cover object-top"
            />
          </div>
        </Reveal>
      ) : null}

      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-[#d3d3d3]">{study.summary}</p>
        </Reveal>
        {study.problems[0] && study.built[0] ? (
          <StaggerGroup as="ol" className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3" stagger={0.1}>
            <StaggerItem as="li">
              <p className="eyebrow">I · The obstacle</p>
              <p className="mt-3 text-sm leading-relaxed text-[#d3d3d3]">{study.problems[0]}</p>
            </StaggerItem>
            <StaggerItem as="li">
              <p className="eyebrow">II · The action</p>
              <p className="mt-3 text-sm leading-relaxed text-[#d3d3d3]">{study.built[0]}</p>
            </StaggerItem>
            <StaggerItem as="li">
              <p className="eyebrow">III · The outcome</p>
              <p className="mt-3 text-sm leading-relaxed text-[#d3d3d3]">
                {study.metrics[0] ? `${study.metrics[0].value} ${study.metrics[0].label}` : "The work, carried through."}
              </p>
            </StaggerItem>
          </StaggerGroup>
        ) : null}

        {study.metrics.length > 0 ? (
          <StaggerGroup as="dl" className="mt-12 grid grid-cols-2 gap-8 border-y border-white/10 py-10 md:grid-cols-4" stagger={0.09}>
            {study.metrics.map((metric, index) => (
              <StaggerItem key={metric.label}>
                <dt className={`font-display text-5xl tracking-tight md:text-7xl ${metricAccents[index % metricAccents.length]}`}>
                  {metric.value}
                </dt>
                <dd className="mt-2 text-sm text-[#d3d3d3]">{metric.label}</dd>
              </StaggerItem>
            ))}
          </StaggerGroup>
        ) : null}

        {study.limited ? (
          <Reveal className="mt-10">
            <p className="max-w-2xl text-[#d3d3d3]">
              This name appears in the ten-project portfolio index. A full write-up was not included in the document.
            </p>
          </Reveal>
        ) : (
          <>
            {study.pillars.length > 0 ? (
              <StaggerGroup as="ul" className="mt-10 flex flex-wrap gap-2" stagger={0.05}>
                {study.pillars.map((pillar) => (
                  <StaggerItem
                    as="li"
                    key={pillar}
                    className="rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 px-4 py-2 text-sm text-[#d3d3d3] transition-colors hover:border-[#a492ed]/50 hover:text-white"
                  >
                    {pillar}
                  </StaggerItem>
                ))}
              </StaggerGroup>
            ) : null}

            <StaggerGroup className="mt-14 grid gap-10 lg:grid-cols-3" stagger={0.12}>
              <StaggerItem>
                <section>
                  <h2 className="eyebrow">The problem</h2>
                  <ul className="mt-5 space-y-3">
                    {study.problems.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-[#d3d3d3]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </StaggerItem>
              <StaggerItem>
                <section>
                  <h2 className="eyebrow">What we built</h2>
                  <ul className="mt-5 space-y-3">
                    {study.built.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-[#d3d3d3]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </StaggerItem>
              <StaggerItem>
                <section>
                  <h2 className="eyebrow">Key features</h2>
                  <ul className="mt-5 space-y-3">
                    {study.features.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-[#d3d3d3]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </StaggerItem>
            </StaggerGroup>

            {study.flow.length > 0 ? (
              <section className="mt-16">
                <Reveal>
                  <h2 className="font-display text-4xl tracking-tight text-white">Architectural flow</h2>
                </Reveal>
                <StaggerGroup as="ol" className="mt-8 grid gap-4 md:grid-cols-3" stagger={0.1}>
                  {study.flow.map((step, index) => (
                    <StaggerItem as="li" key={step.title}>
                      <SpotlightCard className="glass tilt h-full rounded-3xl p-6">
                        <p className="font-display text-3xl text-[#a492ed]">0{index + 1}</p>
                        <h3 className="mt-4 text-lg text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#d3d3d3]">{step.body}</p>
                      </SpotlightCard>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </section>
            ) : null}

            {study.stack.length > 0 ? (
              <section className="mt-16">
                <Reveal>
                  <h2 className="eyebrow">Tech stack</h2>
                </Reveal>
                <StaggerGroup as="ul" className="mt-5 flex flex-wrap gap-2" stagger={0.05}>
                  {study.stack.map((item) => (
                    <StaggerItem
                      as="li"
                      key={item}
                      className="rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 px-4 py-2 text-sm text-[#d3d3d3] transition-colors hover:border-[#a492ed]/50 hover:text-white"
                    >
                      {item}
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </section>
            ) : null}
          </>
        )}

        <Reveal className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="text-sm text-[#d3d3d3] transition-colors hover:text-[#a492ed]">
              Previous · {prev.name}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 rounded-full border border-[#a492ed]/30 bg-[#6d3fea] px-6 text-white shadow-[0_0_28px_rgba(109,63,234,0.45)] hover:bg-[#7b4df2]"
            )}
          >
            Start a project
          </Link>
          {next ? (
            <Link href={`/work/${next.slug}`} className="text-sm text-[#d3d3d3] transition-colors hover:text-[#a492ed] sm:text-right">
              Next · {next.name}
            </Link>
          ) : (
            <span />
          )}
        </Reveal>
      </div>
    </article>
  )
}
