import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { contactPromises, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free discovery call with Career Craftly. Email anant@careercraftly.org or call +91 86400 58346.",
  alternates: { canonical: "/contact" },
}

const channels = [
  { label: "Phone", value: site.phoneDisplay, href: `tel:${site.phoneTel}` },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Book a call", value: "Schedule via Calendly", href: site.calendly },
  { label: "Working hours", value: site.hours, href: null },
  { label: "Location", value: site.location, href: null },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-32 pb-24 md:px-8 md:pt-40">
      <p className="eyebrow">Get in touch</p>
      <h1 className="font-display mt-4 max-w-4xl text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.92] tracking-tight">
        Let&apos;s build something <em className="text-primary">remarkable</em>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/75">
        Whether you have a project, a career question, or just want to explore what&apos;s possible — we&apos;re ready to listen.
      </p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {contactPromises.map((item) => (
          <li key={item} className="rounded-full border border-white/15 px-4 py-2 text-sm text-foreground/75">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        <aside className="glass rounded-3xl p-7 lg:col-span-2">
          <h2 className="text-2xl">Contact information</h2>
          <p className="mt-2 text-sm text-foreground/65">Reach out through any channel below, or use the form.</p>
          <ul className="mt-8 space-y-6">
            {channels.map((channel) => (
              <li key={channel.label}>
                <p className="text-xs tracking-[0.18em] text-foreground/45 uppercase">{channel.label}</p>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className="mt-1 inline-block text-base hover:text-primary"
                    {...(channel.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    {channel.value}
                  </a>
                ) : (
                  <p className="mt-1">{channel.value}</p>
                )}
              </li>
            ))}
          </ul>
        </aside>
        <div className="glass rounded-3xl p-7 lg:col-span-3">
          <h2 className="text-2xl">Send a message</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
