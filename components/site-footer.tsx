import Link from "next/link"
import { Laurel } from "@/components/laurel"
import { Logo } from "@/components/logo"
import { quotes } from "@/lib/philosophy"
import { nav, offerings, site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="overflow-hidden border-b border-white/10 px-4 pt-16 pb-4 md:px-8 md:pt-24">
        <p className="wordmark text-foreground">
          Career
          <span className="block italic text-white/75">Craftly</span>
        </p>
      </div>
      <div className="mx-auto grid max-w-[92rem] gap-12 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-foreground/70">
            {site.legalName}. A {site.parent} company. {site.tagline}.
          </p>
          <p className="mt-4 text-sm text-foreground/70">
            <a className="underline-offset-4 hover:underline" href={site.parentUrl} target="_blank" rel="noreferrer">
              {site.parent}
            </a>
            <span className="mt-1 block text-foreground/55">{site.parentBlurb}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
          <div>
            <h2 className="eyebrow mb-4">Navigate</h2>
            <ul className="space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link className="text-foreground/75 hover:text-foreground" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link className="text-foreground/75 hover:text-foreground" href="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-4">Services</h2>
            <ul className="space-y-2 text-sm">
              {offerings.technical.map((item) => (
                <li key={item.title}>
                  <Link className="text-foreground/75 hover:text-foreground" href="/services">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h2 className="eyebrow mb-4">Contact</h2>
            <ul className="space-y-2 text-sm text-foreground/75">
              <li>
                <a className="hover:text-foreground" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href={site.calendly} target="_blank" rel="noreferrer">
                  Book a call
                </a>
              </li>
              <li>{site.location}</li>
              <li>{site.hours}</li>
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <li>
                <a className="text-foreground/75 hover:text-foreground" href={site.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a className="text-foreground/75 hover:text-foreground" href={site.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="text-foreground/75 hover:text-foreground" href={site.youtube} target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-14 text-center md:px-8">
          <Laurel className="mb-5 h-7 w-16 text-white/45" />
          <p className="font-display text-2xl italic leading-snug tracking-tight md:text-3xl">“{quotes.liveWell.text}”</p>
          <p className="mt-4 font-mono text-[0.65rem] tracking-[0.16em] text-foreground/70 uppercase">{quotes.liveWell.cite}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[92rem] flex-col gap-2 px-5 py-6 text-xs text-foreground/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Career Craftly. All rights reserved.</p>
          <p>Built for career success · Powered by AI</p>
        </div>
      </div>
    </footer>
  )
}
