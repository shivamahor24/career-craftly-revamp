export function ColumnMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 220"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M14 28h52M10 34h60" />
      <path d="M18 34v148M62 34v148" />
      <path d="M18 70h44M18 108h44M18 146h44" />
      <path d="M12 182h56M8 190h64M6 198h68" />
      <path d="M40 18v10" />
    </svg>
  )
}
