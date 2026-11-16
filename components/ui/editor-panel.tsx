type Tone = "kw" | "fn" | "ty" | "cm" | "tx";

type Token = {
  tone: Tone;
  text: string;
};

const lines: Token[][] = [
  [{ tone: "cm", text: "// one dashboard, three responsibilities" }],
  [
    { tone: "kw", text: "type" },
    { tone: "tx", text: " FilterState = { " },
    { tone: "ty", text: "datasetId" },
    { tone: "tx", text: ": " },
    { tone: "ty", text: "string" },
    { tone: "tx", text: " }" },
  ],
  [],
  [
    { tone: "kw", text: "export function" },
    { tone: "fn", text: " Dashboard" },
    { tone: "tx", text: "({ filters }: { filters: FilterState }) {" },
  ],
  [
    { tone: "tx", text: "  " },
    { tone: "kw", text: "const" },
    { tone: "tx", text: " data = " },
    { tone: "fn", text: "useQuery" },
    { tone: "tx", text: "(filters.datasetId)" },
  ],
  [],
  [
    { tone: "tx", text: "  " },
    { tone: "kw", text: "return" },
    { tone: "tx", text: " (" },
  ],
  [
    { tone: "tx", text: "    <" },
    { tone: "fn", text: "Canvas" },
    { tone: "tx", text: ">" },
  ],
  [
    { tone: "tx", text: "      <" },
    { tone: "fn", text: "Slicer" },
    { tone: "tx", text: " value={filters} />" },
  ],
  [
    { tone: "tx", text: "      <" },
    { tone: "fn", text: "Chart" },
    { tone: "tx", text: " series={data} />" },
  ],
  [
    { tone: "tx", text: "      <" },
    { tone: "fn", text: "Crosstab" },
    { tone: "tx", text: " rows={data} />" },
  ],
  [
    { tone: "tx", text: "    </" },
    { tone: "fn", text: "Canvas" },
    { tone: "tx", text: ">" },
  ],
  [{ tone: "tx", text: "  )" }],
  [{ tone: "tx", text: "}" }],
];

const pipeline = ["Dataset", "Query", "Filters", "Chart", "Table"];

const tokenClass: Record<Tone, string> = {
  kw: "token-kw",
  fn: "token-fn",
  ty: "token-ty",
  cm: "token-cm",
  tx: "token-tx",
};

export function EditorPanel() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-elev shadow-[0_24px_80px_-40px_rgba(0,0,0,0.55)]">
      <figcaption className="flex items-center gap-3 border-b border-line px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-surface" />
          <span className="size-2.5 rounded-full bg-surface" />
          <span className="size-2.5 rounded-full bg-surface" />
        </span>
        <span className="font-mono text-xs text-faint">dashboard.tsx</span>
      </figcaption>
      <div className="overflow-x-auto px-4 py-4">
        <div className="flex gap-4">
          <div
            aria-hidden
            className="select-none text-right font-mono text-[12.5px] leading-6 text-faint"
          >
            {lines.map((_, index) => (
              <div key={index}>{index + 1}</div>
            ))}
          </div>
          <div className="font-mono text-[12.5px] leading-6">
            {lines.map((tokens, index) => (
              <div key={index} className="whitespace-nowrap">
                {tokens.length === 0
                  ? "\u00a0"
                  : tokens.map((token, tokenIndex) => (
                      <span key={`${token.text}-${tokenIndex}`} className={tokenClass[token.tone]}>
                        {token.text}
                      </span>
                    ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line px-4 py-3">
        <div className="flex flex-wrap items-center gap-1.5" aria-hidden>
          {pipeline.map((step, index) => (
            <div key={step} className="flex items-center gap-1.5">
              <span className="rounded-md border border-line bg-bg px-2 py-1 font-mono text-[11px] text-ink">
                {step}
              </span>
              {index < pipeline.length - 1 ? <span className="text-xs text-faint">→</span> : null}
            </div>
          ))}
        </div>
        <p className="mt-2 font-mono text-[11px] text-faint">
          Query cache, filter state, and views stay separate.
        </p>
      </div>
    </figure>
  );
}
