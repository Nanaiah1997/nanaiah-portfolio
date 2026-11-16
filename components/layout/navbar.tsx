"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { navItems, sectionIds } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const focusableSelector =
  'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

export function Navbar() {
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      panel
        ? Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)).filter(
            (element) => !element.hasAttribute("disabled"),
          )
        : [];

    focusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled || open
          ? "border-line bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-bg/70 backdrop-blur-sm",
      )}
    >
      <Container>
        <div className="grid h-16 grid-cols-[1fr_auto] items-center lg:grid-cols-[1fr_auto_1fr]">
          <a
            href="#home"
            className="justify-self-start rounded-sm text-[15px] font-medium tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={closeMenu}
          >
            {profile.shortName}
            <span className="text-accent">.</span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5">
              {navItems.map((item) => {
                const current = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "rounded-sm text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                        current ? "text-ink" : "text-muted hover:text-ink",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-1">
            <ThemeToggle />
            <div className="hidden lg:block">
              <Button
                href={profile.resumeHref}
                download={profile.resumeFileName}
                variant="secondary"
                className="h-10 px-3"
              >
                <Download className="size-4" aria-hidden />
                Download resume
              </Button>
            </div>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-lg text-ink hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div
          ref={panelRef}
          id={menuId}
          className="menu-in border-t border-line bg-bg lg:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {navItems.map((item) => {
                  const current = active === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        aria-current={current ? "page" : undefined}
                        className={cn(
                          "flex h-12 items-center rounded-md px-2 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                          current ? "text-ink" : "text-muted",
                        )}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Button
              href={profile.resumeHref}
              download={profile.resumeFileName}
              variant="secondary"
              className="mt-3 w-full"
              onClick={closeMenu}
            >
              <Download className="size-4" aria-hidden />
              Download resume
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
    {open ? (
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close menu"
        className="fixed inset-0 top-16 z-40 bg-ink/25 lg:hidden"
        onClick={closeMenu}
      />
    ) : null}
    </>
  );
}
