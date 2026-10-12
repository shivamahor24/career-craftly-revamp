import type { MetadataRoute } from "next"
import { caseStudies } from "@/lib/case-studies"
import { site } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-02")
  const paths = ["", "/services", "/work", "/contact", ...caseStudies.map((study) => `/work/${study.slug}`)]
  return paths.map((path) => ({
    url: `${site.url}${path}/`,
    lastModified,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.7,
  }))
}
