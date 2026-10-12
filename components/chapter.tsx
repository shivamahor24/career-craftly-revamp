export function Chapter({ book, title }: { book: string; title: string }) {
  return (
    <p className="eyebrow">
      Book {book}
      <span className="mx-2 text-white/25">—</span>
      {title}
    </p>
  )
}
