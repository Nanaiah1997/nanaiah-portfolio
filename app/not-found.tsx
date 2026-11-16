import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist on Nanaiah M G's portfolio.",
};

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-5 py-24 text-center">
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-3 text-4xl font-medium tracking-[-0.03em] text-ink">
        This page does not exist.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The link may be out of date. The work, experience, and contact details are on the homepage.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back home</Button>
        <Button href="/#contact" variant="secondary">
          Contact
        </Button>
      </div>
    </section>
  );
}
