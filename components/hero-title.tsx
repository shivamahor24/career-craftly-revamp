const italic = new Set(["real-world", "execution."])

export function HeroTitle({ text }: { text: string }) {
  const words = text.split(" ")
  return (
    <h1 className="font-display text-[clamp(3.35rem,7.6vw,8.4rem)] leading-[0.84] tracking-[-0.045em] text-white">
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`word-rise mr-[0.22em] inline-block ${
            italic.has(word)
              ? "bg-gradient-to-r from-[#a492ed] via-[#6d3fea] to-[#a492ed] bg-clip-text font-medium italic text-transparent"
              : ""
          }`}
          style={{ animationDelay: `${index * 55}ms` }}
        >
          {word}
        </span>
      ))}
    </h1>
  )
}
