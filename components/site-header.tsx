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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[92rem] items-center justify-between gap-4 px-5 md:h-[4.5rem] md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "nav-link text-sm tracking-wide text-foreground/70 transition-colors hover:text-foreground",
                  active && "text-foreground"
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
              className={cn(buttonVariants({ size: "lg" }), "h-11 rounded-full px-5 text-sm")}
            >
              Get started
            </Link>
          </Magnetic>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-white/10 bg-background sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl">Menu</SheetTitle>
                <SheetDescription>Services, work, and contact.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-2 px-4" aria-label="Mobile">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display border-b border-white/10 py-4 text-4xl tracking-tight"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <Button
                  className="h-12 w-full rounded-full text-base"
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
