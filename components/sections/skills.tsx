import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="scroll-mt-24 border-t border-line py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading id="skills-title" eyebrow="Skills" title="Technical skills">
            Tools I use on production analytics products, grouped by the job they do.
          </SectionHeading>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <li key={group.title} className="rounded-2xl border border-line bg-elev p-5">
                <h3 className="text-sm font-medium text-ink">{group.title}</h3>
                <div className="mt-4">
                  <TagList items={group.items} />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
