export type SkillGroup = {
  title: string;
  items: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Programming languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: [
      "React.js 18",
      "React.js 19",
      "Next.js",
      "React Router",
      "React Hook Form",
      "Tailwind CSS",
    ],
  },
  {
    title: "UI and accessibility",
    items: ["Material UI", "Shadcn UI", "Radix UI", "Responsive design", "WCAG"],
  },
  {
    title: "State and data",
    items: [
      "React Context API",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "TanStack Table",
      "TanStack Virtual",
    ],
  },
  {
    title: "Data visualization",
    items: ["Plotly.js", "Apache ECharts", "Recharts", "D3.js", "Chart.js"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "SQLAlchemy",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Architecture and performance",
    items: [
      "Nx monorepos",
      "Micro-frontends",
      "Code splitting",
      "Lazy loading",
      "Virtualization",
    ],
  },
  {
    title: "Testing and quality",
    items: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "pytest",
      "ESLint",
      "SonarQube",
    ],
  },
  {
    title: "Build and tools",
    items: [
      "Vite",
      "Webpack",
      "Docker",
      "Git",
      "GitHub",
      "Bitbucket Pipelines",
      "Jira",
      "Postman",
      "Claude Code",
      "Cursor",
    ],
  },
];
