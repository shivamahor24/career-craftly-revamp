import type { Metadata } from "next"
import Link from "next/link"
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
  items,
}: {
  id: string
  kicker: string
  title: string
  items: { title: string; desc: string; perks: string[] }[]
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-6">
        <div>
          <p className="eyebrow">{kicker}</p>
          <h2 className="font-display mt-2 text-4xl tracking-tight md:text-5xl">{title}</h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="glass tilt rounded-3xl p-7">
            <h3 className="text-2xl font-medium">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">{item.desc}</p>
            <ul className="mt-5 space-y-2">
              {item.perks.map((perk) => (
                <li key={perk} className="flex gap-2 text-sm text-foreground/80">
                  <span aria-hidden className="text-primary">
                    +
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-6 inline-block text-sm text-primary">
              Talk to us about {item.title}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <p className="eyebrow">Book IV — The disciplines</p>
      <h1 className="font-display mt-4 max-w-4xl text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.92] tracking-tight">
        Programs & services
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/75">
        End-to-end solutions for professionals building careers and companies scaling with AI — all under one roof.
      </p>
      <div className="mt-16 space-y-20">
        <ProgramGrid id="technical" kicker="Discipline I — Technical" title="Technical programs" items={offerings.technical} />
        <ProgramGrid id="career" kicker="Discipline II — Career" title="Career programs" items={offerings.career} />
      </div>
      <div className="mt-20 rounded-[2rem] border border-white/10 px-6 py-12 text-center md:px-12">
        <h2 className="font-display text-4xl tracking-tight md:text-5xl">Ready to get started?</h2>
        <p className="mx-auto mt-4 max-w-xl text-foreground/70">
          Let&apos;s discuss how our services can help you achieve your goals — book a free discovery call today.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-7 text-base")}>
            Book a free call
          </Link>
          <a
            href={`mailto:${site.email}`}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 rounded-full border-white/20 bg-transparent px-7 text-base text-foreground hover:bg-white/5"
            )}
          >
            Email us directly
          </a>
        </div>
      </div>
    </div>
  )
}
