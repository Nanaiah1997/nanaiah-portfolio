export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-line bg-bg px-2.5 py-1 text-[13px] leading-5 text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
