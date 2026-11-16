export const profile = {
  name: "Nanaiah M G",
  shortName: "Nanaiah",
  role: "Frontend Software Engineer",
  headline:
    "Frontend Software Engineer | React.js | Next.js | TypeScript | Data Visualization",
  location: "Bengaluru, Karnataka, India",
  locationShort: "Bengaluru, India",
  experienceLabel: "Nearly 4 years",
  availability: "Available for opportunities",
  email: "nanaiahmg4@gmail.com",
  phoneDisplay: "+91 95351 22438",
  phoneHref: "tel:+919535122438",
  linkedin: "https://linkedin.com/in/nanaiah-m-g",
  linkedinLabel: "linkedin.com/in/nanaiah-m-g",
  github: "https://github.com/Nanaiah1997",
  githubLabel: "github.com/Nanaiah1997",
  resumeHref: "/resume/Nanaiah_MG_Frontend_Software_Engineer.pdf",
  resumeFileName: "Nanaiah_MG_Frontend_Software_Engineer.pdf",
  heroTitle:
    "Building scalable digital experiences with modern frontend technologies.",
  heroText:
    "I'm a Frontend Software Engineer with nearly 4 years of experience building scalable enterprise applications, interactive analytics dashboards, and high-performance web experiences using React.js, Next.js, and TypeScript.",
  contactTitle:
    "Have an interesting opportunity or project? Let's connect.",
} as const;

export const aboutParagraphs = [
  "I am a software engineer at Analyttica Datalab in Bengaluru. For nearly four years I have built React.js, Next.js, and TypeScript applications for enterprise SaaS and self-service analytics, with Node.js, FastAPI, and PostgreSQL behind the interfaces.",
  "Most of that work is dashboard UI: reusable components, a filter model that several views can share, and charts and tables that stay usable as datasets get large. I split server state, UI state, and shared client state instead of putting everything in one store, and I treat loading, empty, and error states as part of the component.",
  "I work with product, design, and backend engineers. I also review code with junior developers, interview frontend candidates on React and JavaScript, and keep the release bar visible: tests, lint, and a Docker health check before production.",
] as const;

export const focusAreas = [
  "Enterprise SaaS and self-service analytics",
  "Scalable React.js and Next.js architecture",
  "Interactive analytics and data visualization",
  "Frontend performance and virtualization",
  "REST, WebSocket, and API integration",
  "Mentoring, reviews, and engineering quality",
] as const;

export const education = [
  {
    credential:
      "Bachelor of Engineering, Electronics and Communication Engineering",
    school: "VidyaVardhaka College of Engineering",
    time: "May 2021",
    detail: "CGPA 7.19",
  },
  {
    credential: "Diploma, Electronics and Communication Engineering",
    school: "Cauvery Polytechnic",
    time: "May 2018",
    detail: "74.94%",
  },
] as const;

export const contactChannels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: profile.phoneHref,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
  },
] as const;
