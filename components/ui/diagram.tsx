import type { Diagram } from "@/data/expertise";

export function DiagramView({ diagram }: { diagram: Diagram }) {
  if (diagram.kind === "stack") {
    return (
      <div className="flex w-full flex-col gap-1.5">
        {diagram.layers.map((layer) => (
          <div
            key={layer}
            className="rounded-md border border-line bg-elev px-2 py-1.5 text-center text-xs text-ink"
          >
            {layer}
          </div>
        ))}
      </div>
    );
  }

  if (diagram.kind === "columns") {
    return (
      <div className="grid w-full grid-cols-3 gap-1.5">
        {diagram.columns.map((column) => (
          <div key={column.title} className="rounded-md border border-line bg-elev p-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
              {column.title}
            </p>
            <ul className="mt-1.5 space-y-1">
              {column.items.map((item) => (
                <li key={item} className="text-xs leading-snug text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {diagram.steps.map((step, index) => (
        <div key={step} className="flex items-center gap-1.5">
          <span className="rounded-md border border-line bg-elev px-2 py-1 text-xs text-ink">
            {step}
          </span>
          {index < diagram.steps.length - 1 ? (
            <span className="text-xs text-faint" aria-hidden>
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
