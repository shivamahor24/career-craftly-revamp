import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "cn"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 pt-28">
      <p className="eyebrow">404</p>
      <h1 className="font-display mt-4 text-6xl tracking-tight md:text-7xl">This page is not on the site.</h1>
      <p className="mt-5 text-foreground/70">The link may be out of date. Head back to the work, or write to us.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-7")}>
          Back home
        </Link>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-12 rounded-full border-white/20 bg-transparent px-7 text-foreground"
          )}
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
