"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { serviceOptions, site } from "@/lib/site"

const fieldClass =
  "h-12 rounded-xl border-[#a492ed]/25 bg-[#a492ed]/[0.06] px-3 text-base text-white placeholder:text-[#d3d3d3]/45 focus-visible:border-[#6d3fea] focus-visible:ring-[#6d3fea]/40 md:text-base"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setStatus("submitting")
    setError(null)
    try {
      const response = await fetch("https://formsubmit.co/ajax/anant@careercraftly.org", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New contact from ${data.name} - Career Craftly`,
        }),
      })
      if (!response.ok) {
        setStatus("error")
        setError("Something went wrong. Please try again, or email us directly.")
        return
      }
      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
      setError("Network error. Please check your connection or email us directly.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
            placeholder="+91"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={fieldClass}
          placeholder="you@company.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service</Label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={`${fieldClass} w-full appearance-none`}
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option} className="bg-background text-foreground">
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your project or goal</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Give us some context — the more detail, the better we can help."
          className="min-h-36 rounded-xl border-[#a492ed]/25 bg-[#a492ed]/[0.06] px-3 py-3 text-base text-white placeholder:text-[#d3d3d3]/45 focus-visible:border-[#6d3fea] focus-visible:ring-[#6d3fea]/40"
        />
      </div>
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="h-12 w-full rounded-full border border-[#a492ed]/35 bg-[#6d3fea] text-base text-white shadow-[0_0_28px_rgba(109,63,234,0.45)] hover:bg-[#7b4df2] sm:w-auto sm:px-8"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
      <div aria-live="polite" className="min-h-6 text-sm">
        {status === "success" ? (
          <p className="text-[#02ab7a]">Message sent. We reply within 24 hours.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-[#ff2244]">
            {error}{" "}
            <a className="text-[#a492ed] underline hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        ) : null}
      </div>
    </form>
  )
}
