"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { Magnetic } from "@/components/magnetic"
import { nav } from "@/lib/site"
import { cn } from "cn"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#020010]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[92rem] items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="hidden items-center gap-2 rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 px-2.5 py-1 font-mono text-[0.62rem] tracking-[0.16em] text-[#d3d3d3] uppercase sm:inline-flex">
            <span aria-hidden className="size-1.5 rounded-full bg-[#02ab7a] shadow-[0_0_10px_#02ab7a]" />
            Available
          </span>
        </div>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "nav-link text-sm tracking-wide text-[#d3d3d3] transition-colors hover:text-white",
                  active && "text-white"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Magnetic className="hidden lg:inline-flex">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-full border border-[#a492ed]/35 bg-[#6d3fea] px-5 text-sm text-white shadow-[0_0_25px_rgba(109,63,234,0.45),inset_0_1px_0_rgba(164,146,237,0.5)] hover:bg-[#7c4ff0]"
              )}
            >
              Get started
            </Link>
          </Magnetic>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-11 items-center justify-center rounded-full border border-[#a492ed]/25 bg-[#a492ed]/12 text-white transition-colors hover:border-[#a492ed]/50 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-[#a492ed]/20 bg-[#020010] sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl text-white">Menu</SheetTitle>
                <SheetDescription className="text-[#d3d3d3]">Services, work, and contact.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-4" aria-label="Mobile">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display border-b border-white/10 py-4 text-4xl tracking-tight text-white transition-colors hover:text-[#a492ed]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <Button
                  className="h-12 w-full rounded-full border border-[#a492ed]/35 bg-[#6d3fea] text-base text-white shadow-[0_0_25px_rgba(109,63,234,0.45)] hover:bg-[#7c4ff0]"
                  onClick={() => setOpen(false)}
                  render={<Link href="/contact" />}
                >
                  Get started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
