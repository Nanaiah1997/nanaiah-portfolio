import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-ink text-bg hover:opacity-90",
  secondary: "border border-line bg-elev text-ink hover:border-accent/40 hover:bg-surface",
  ghost: "text-ink hover:bg-surface",
} as const;

const base =
  "inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50";

type Variant = keyof typeof variants;

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonProps = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type AnchorProps = Common &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  };

export function Button({ variant = "primary", className, ...props }: ButtonProps | AnchorProps) {
  const classes = cn(base, variants[variant], className);

  if ("href" in props && typeof props.href === "string") {
    const { href, children, ...rest } = props;
    if (href.startsWith("/") && !href.includes(".")) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...rest}
        {...(external
          ? { target: rest.target ?? "_blank", rel: rest.rel ?? "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonProps;
  return <button className={classes} {...buttonProps} type={buttonProps.type ?? "button"} />;
}
