export function Interlude({ text, cite }: { text: string; cite: string }) {
  return (
    <figure className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
      <blockquote className="carve font-display text-[clamp(1.55rem,3vw,2.45rem)] leading-[1.2] tracking-tight">
        “{text}”
      </blockquote>
      <figcaption className="mt-6 font-mono text-[0.65rem] tracking-[0.16em] text-foreground/70 uppercase">{cite}</figcaption>
    </figure>
  )
}
