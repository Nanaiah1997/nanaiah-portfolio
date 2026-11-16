import { experience } from "@/data/experience";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-24 border-t border-line py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading id="experience-title" eyebrow="Experience" title={experience.company}>
            {experience.location} · {experience.period}. {experience.summary}
          </SectionHeading>
          <div className="relative mt-14">
            <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
            <ol className="space-y-12" aria-label="Roles at Analyttica Datalab">
            {experience.roles.map((role) => (
              <li key={role.title} className="relative pl-10">
                <span
                  aria-hidden
                  className={
                    "current" in role && role.current
                      ? "absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-accent bg-accent"
                      : "absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-accent bg-bg"
                  }
                />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-lg font-medium tracking-tight text-ink">{role.title}</h3>
                  <p className="font-mono text-xs text-faint">{role.period}</p>
                </div>
                <ul className="mt-4 space-y-3">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
