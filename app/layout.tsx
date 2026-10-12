import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, DM_Sans, IBM_Plex_Mono } from "next/font/google"
import { Experience } from "@/components/experience"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/lib/site"
import "./globals.css"

const dm = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
})

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Career Craftly — AI solutions for modern businesses",
    template: "%s · Career Craftly",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  keywords: [
    "Career Craftly",
    "AI automation",
    "career coaching",
    "resume optimization",
    "web development",
    "AI agents",
    "digital marketing",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Career Craftly — AI solutions for modern businesses",
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Career Craftly" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Craftly",
    description: site.tagline,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
}

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phoneTel,
  image: `${site.url}/og.png`,
  logo: `${site.url}/brand/mark.png`,
  description: site.description,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  parentOrganization: {
    "@type": "Organization",
    name: site.parent,
    url: site.parentUrl,
  },
  sameAs: [site.instagram, site.linkedin, site.youtube, site.parentUrl],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: site.email,
    telephone: site.phoneTel,
    availableLanguage: ["English"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${dm.variable} ${display.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Experience />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
