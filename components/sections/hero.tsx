import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EditorPanel } from "@/components/ui/editor-panel";
import { SocialLinks } from "@/components/ui/social-links";

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="pt-28 pb-20 sm:pt-32 sm:pb-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              {profile.headline}
            </p>
            <h1
              id="home-title"
              className="mt-4 max-w-[14ch] text-[2.45rem] font-medium leading-[1.08] tracking-[-0.035em] text-balance text-ink sm:text-5xl lg:text-[3.15rem]"
            >
              {profile.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-[17px]">
              {profile.heroText}
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-sm text-ink sm:flex-row sm:flex-wrap sm:items-center">
              <li className="flex items-center gap-2 sm:border-l sm:border-line sm:pl-5 sm:first:border-l-0 sm:first:pl-0">
                <span className="size-1.5 rounded-full bg-good" aria-hidden />
                {profile.availability}
              </li>
              <li className="sm:border-l sm:border-line sm:pl-5">{profile.locationShort}</li>
              <li className="sm:border-l sm:border-line sm:pl-5">{profile.experienceLabel}</li>
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#projects">View projects</Button>
              <Button
                href={profile.resumeHref}
                download={profile.resumeFileName}
                variant="secondary"
              >
                <Download className="size-4" aria-hidden />
                Download resume
              </Button>
            </div>
            <SocialLinks className="mt-6" />
          </div>
          <EditorPanel />
        </div>
      </Container>
    </section>
  );
}
