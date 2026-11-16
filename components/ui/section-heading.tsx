import type { ReactNode } from "react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-3xl font-medium tracking-[-0.03em] text-balance text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-[17px]">
          {children}
        </p>
      ) : null}
    </div>
  );
}
