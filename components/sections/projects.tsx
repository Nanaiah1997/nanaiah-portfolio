import { projects } from "@/data/projects";
import { Reveal } from "@/components/animations/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag-list";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24 border-t border-line py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading id="projects-title" eyebrow="Projects" title="Featured work">
            Interface work for Analyttica Datalab analytics products, and the performance and
            release work around them.
          </SectionHeading>
          <div className="mt-12 space-y-6">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-line bg-elev p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink">
                      {project.title}
                    </h3>
                  </div>
                  <p className="font-mono text-xs leading-5 text-faint sm:text-right">
                    {project.role}
                    <span className="mt-1 block">{project.period}</span>
                  </p>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted sm:text-[15px]">
                  {project.summary}
                </p>
                {project.highlight ? (
                  <p className="mt-4 max-w-xl rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink">
                    {project.highlight}
                  </p>
                ) : null}
                <h4 className="mt-8 text-sm font-medium text-ink">Features</h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid gap-8 border-t border-line pt-8 lg:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-medium text-ink">Architecture</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{project.architecture}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-ink">Challenges</h4>
                    <ul className="mt-3 space-y-2">
                      {project.challenges.map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-ink">Contributions</h4>
                    <ul className="mt-3 space-y-2">
                      {project.contributions.map((item) => (
                        <li key={item} className="text-sm leading-relaxed text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 border-t border-line pt-5">
                  <TagList items={project.technologies} />
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
