import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 pt-28">
      <p className="eyebrow">404</p>
      <h1 className="font-display mt-4 text-6xl tracking-tight text-white md:text-7xl">This page is not on the site.</h1>
      <p className="mt-5 text-[#d3d3d3]">The link may be out of date. Head back to the work, or write to us.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 rounded-full border border-[#a492ed]/30 bg-[#6d3fea] px-7 text-white shadow-[0_0_28px_rgba(109,63,234,0.45)] hover:bg-[#7b4df2]"
          )}
        >
          Back home
        </Link>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-12 rounded-full border-[#a492ed]/25 bg-[#a492ed]/12 px-7 text-[#d3d3d3] hover:border-[#a492ed]/50 hover:bg-[#a492ed]/20 hover:text-white"
          )}
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
