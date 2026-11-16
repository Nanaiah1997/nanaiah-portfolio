import { aboutParagraphs, education, focusAreas } from "@/data/profile";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24 border-t border-line py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="about-title"
            eyebrow="About"
            title="Frontend engineering for enterprise analytics."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div className="space-y-5 text-base leading-relaxed text-pretty text-muted sm:text-[17px]">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-ink">Focus</h3>
                <ol className="mt-3">
                  {focusAreas.map((area, index) => (
                    <li
                      key={area}
                      className="flex gap-3 border-t border-line py-3 text-sm leading-relaxed text-muted first:border-t-0"
                    >
                      <span className="w-6 shrink-0 font-mono text-[11px] text-faint">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-2xl border border-line bg-elev p-5">
                <h3 className="text-sm font-medium text-ink">Education</h3>
                <ul className="mt-4 space-y-5">
                  {education.map((item) => (
                    <li key={item.credential}>
                      <p className="text-sm leading-relaxed text-ink">{item.credential}</p>
                      <p className="mt-1 text-sm text-muted">{item.school}</p>
                      <p className="mt-1 font-mono text-[11px] text-faint">
                        {item.time} · {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
