import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
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

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()
  const { prev, next } = neighbors(slug)

  return (
    <article className="pt-28 md:pt-36">
      <header className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="eyebrow">
          Case study {study.number}
          {study.limited ? " · Index listing" : ""}
        </p>
        <h1 className="font-display mt-4 text-[clamp(3.4rem,8vw,7rem)] leading-[0.9] tracking-tight">{study.name}</h1>
        <p className="mt-6 max-w-3xl text-lg text-foreground/75 md:text-xl">{study.category}</p>
        {study.indexLabel ? (
          <p className="mt-3 text-sm text-foreground/55">Portfolio index: {study.indexLabel}.</p>
        ) : null}
      </header>

      {study.image ? (
        <div className="zoom-frame mt-12 border-y border-white/10">
          <Image
            src={study.image}
            alt={study.imageAlt ?? ""}
            width={900}
            height={577}
            priority
            className="mx-auto h-auto max-h-[78vh] w-full object-cover object-top"
          />
        </div>
      ) : null}

      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">{study.summary}</p>
        {study.problems[0] && study.built[0] ? (
          <ol className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-3">
            <li>
              <p className="eyebrow">I · The obstacle</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{study.problems[0]}</p>
            </li>
            <li>
              <p className="eyebrow">II · The action</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{study.built[0]}</p>
            </li>
            <li>
              <p className="eyebrow">III · The outcome</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                {study.metrics[0] ? `${study.metrics[0].value} ${study.metrics[0].label}` : "The work, carried through."}
              </p>
            </li>
          </ol>
        ) : null}

        {study.metrics.length > 0 ? (
          <dl className="mt-12 grid grid-cols-2 gap-8 border-y border-white/10 py-10 md:grid-cols-4">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="font-display text-5xl tracking-tight text-primary md:text-7xl">{metric.value}</dt>
                <dd className="mt-2 text-sm text-foreground/65">{metric.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {study.limited ? (
          <p className="mt-10 max-w-2xl text-foreground/70">
            This name appears in the ten-project portfolio index. A full write-up was not included in the document.
          </p>
        ) : (
          <>
            {study.pillars.length > 0 ? (
              <ul className="mt-10 flex flex-wrap gap-2">
                {study.pillars.map((pillar) => (
                  <li key={pillar} className="rounded-full border border-white/15 px-4 py-2 text-sm text-foreground/75">
                    {pillar}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-14 grid gap-10 lg:grid-cols-3">
              <section>
                <h2 className="eyebrow">The problem</h2>
                <ul className="mt-5 space-y-3">
                  {study.problems.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="eyebrow">What we built</h2>
                <ul className="mt-5 space-y-3">
                  {study.built.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="eyebrow">Key features</h2>
                <ul className="mt-5 space-y-3">
                  {study.features.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-foreground/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {study.flow.length > 0 ? (
              <section className="mt-16">
                <h2 className="font-display text-4xl tracking-tight">Architectural flow</h2>
                <ol className="mt-8 grid gap-4 md:grid-cols-3">
                  {study.flow.map((step, index) => (
                    <li key={step.title} className="glass tilt rounded-3xl p-6">
                      <p className="font-display text-3xl text-primary">0{index + 1}</p>
                      <h3 className="mt-4 text-lg">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/70">{step.body}</p>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            {study.stack.length > 0 ? (
              <section className="mt-16">
                <h2 className="eyebrow">Tech stack</h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <li key={item} className="rounded-full bg-white/5 px-4 py-2 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </>
        )}

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="text-sm text-foreground/70 hover:text-foreground">
              Previous · {prev.name}
            </Link>
          ) : (
            <span />
          )}
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full px-6")}>
            Start a project
          </Link>
          {next ? (
            <Link href={`/work/${next.slug}`} className="text-sm text-foreground/70 hover:text-foreground sm:text-right">
              Next · {next.name}
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </article>
  )
}
