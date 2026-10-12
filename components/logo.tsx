import Image from "next/image"
import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${className}`}
    >
      <Image
        src="/brand/mark.webp"
        alt=""
        width={401}
        height={451}
        priority
        className="h-9 w-auto brightness-0 invert"
      />
      <span className="font-display text-[1.35rem] leading-none tracking-tight text-foreground">
        Career Craftly
      </span>
    </Link>
  )
}
