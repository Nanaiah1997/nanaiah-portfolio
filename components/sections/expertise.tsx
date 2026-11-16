import { expertise } from "@/data/expertise";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { DiagramView } from "@/components/ui/diagram";
import { SectionHeading } from "@/components/ui/section-heading";

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="scroll-mt-24 border-t border-line py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading id="expertise-title" eyebrow="Practice" title="Engineering expertise">
            The problems I usually own on a product team.
          </SectionHeading>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {expertise.map((item) => (
              <li
                key={item.title}
                className="flex flex-col rounded-2xl border border-line bg-elev p-5 transition-colors hover:border-accent/40"
              >
                <div
                  aria-hidden
                  className="mb-5 flex min-h-28 items-center rounded-xl border border-line bg-bg px-3 py-3"
                >
                  <DiagramView diagram={item.diagram} />
                </div>
                <h3 className="text-base font-medium tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
