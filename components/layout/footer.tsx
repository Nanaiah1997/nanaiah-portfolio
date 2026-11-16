import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";
import { TextLink } from "@/components/ui/text-link";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-muted">
              {profile.role} · {profile.locationShort}
            </p>
            <SocialLinks className="mt-4" />
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <TextLink href={item.href}>{item.label}</TextLink>
              </li>
            ))}
            <li>
              <TextLink href={profile.resumeHref} download={profile.resumeFileName}>
                Resume
              </TextLink>
            </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}</p>
          <TextLink href={`mailto:${profile.email}`}>{profile.email}</TextLink>
        </div>
      </Container>
    </footer>
  );
}
