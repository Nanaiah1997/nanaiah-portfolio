import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TextLink({
  href,
  children,
  className,
  download,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  download?: string;
}) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      download={download}
      className={cn(
        "rounded-sm text-muted transition-colors hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
