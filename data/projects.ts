export type Project = {
  eyebrow: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  highlight?: string;
  features: readonly string[];
  architecture: string;
  challenges: readonly string[];
  contributions: readonly string[];
  technologies: readonly string[];
};

export const projects: readonly Project[] = [
  {
    eyebrow: "Enterprise SaaS",
    title: "Self-service analytics platform",
    role: "Software Engineer",
    period: "October 2025 — Present",
    summary:
      "The UI for a self-service BI product. People explore datasets, compose interactive visualizations, and assemble analytical dashboards.",
    features: [
      "Interactive charts and dashboards",
      "Drag-and-drop dashboard layouts",
      "Dataset exploration",
      "Global and chart-level filters, including Top/Bottom N",
      "Drill-down, drill-through, crosstabs, and slicers",
      "Virtualized tables for large result sets",
      "Sharing, guest access, and embedded dashboards",
      "Bookmarks and what-if scenario planning",
      "PNG, PDF, and PPTX export",
    ],
    architecture:
      "Screens stay decoupled from data fetching. TanStack Query owns server state, Zustand and React Context own UI and session state, and view components receive data instead of calling services themselves. Plotly.js and ECharts render charts. TanStack Table, virtualized, renders dense grids. Node.js and Express on MongoDB, and FastAPI on PostgreSQL, back the dashboard, access, and export flows.",
    challenges: [
      "Dashboard screens had to keep growing without coupling the UI to every fetch.",
      "Global filters and chart-level filters had to compose without each view inventing its own model.",
      "Large tables and multi-chart pages had to stay responsive.",
      "Sharing, guest access, embed, and export had to reuse the same dashboard UI.",
    ],
    contributions: [
      "Built the React.js, Next.js, and TypeScript interface for dataset exploration and dashboard authoring.",
      "Implemented drag-and-drop layouts, drill paths, crosstabs, slicers, and multi-level filters.",
      "Introduced virtualized tables and kept chart components reusable across dashboard types.",
      "Connected sharing, bookmarks, what-if planning, and export to the existing API surface.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "React Context API",
      "Zustand",
      "TanStack Query",
      "TanStack Table",
      "TanStack Virtual",
      "Plotly.js",
      "Apache ECharts",
      "Node.js",
      "Express.js",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    eyebrow: "Product platform",
    title: "LEAPS analytics platform",
    role: "Associate Software Engineer",
    period: "June 2023 — September 2025",
    summary:
      "Production React.js and Next.js features for LEAPS, Analyttica Datalab's analytics platform, including the shared UI layer those features sit on.",
    features: [
      "Production analytics features from component design through release",
      "Shared Material UI library used across product modules",
      "Nx monorepo and micro-frontend boundaries",
      "State chosen per screen: Redux Toolkit, Zustand, or TanStack Query",
      "WebSockets for live dashboard updates",
      "Accessible dark, light, and product themes",
    ],
    architecture:
      "Product modules share one component layer: a Material UI library in an Nx monorepo, consumed by micro-frontends. Server state lives in TanStack Query. Local UI state lives in Zustand. Redux Toolkit is used where several screens share predictable client state. WebSocket updates feed live dashboards beside that cache. Jest, React Testing Library, and Cypress cover the UI, with ESLint and SonarQube on the merge path.",
    challenges: [
      "Separate product modules were drifting into their own copies of the same controls.",
      "One global store was the wrong fit for every screen.",
      "Live updates could not depend on refreshing the whole dashboard.",
      "Themes had to cover dark, light, and product skins without breaking contrast or keyboard access.",
    ],
    contributions: [
      "Shipped TypeScript features on LEAPS from design through release.",
      "Built the shared Material UI library and the monorepo structure around it.",
      "Selected the state tool per screen and added WebSockets for live updates.",
      "Delivered accessible themes and the Jest, React Testing Library, and Cypress coverage around them.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Nx",
      "Micro-frontends",
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "WebSockets",
      "Jest",
      "React Testing Library",
      "Cypress",
      "ESLint",
      "SonarQube",
    ],
  },
  {
    eyebrow: "Engineering initiative",
    title: "Performance and release quality",
    role: "Software Engineer",
    period: "October 2025 — Present",
    summary:
      "Frontend performance work on the analytics application, and the pipeline that decides whether a change can ship.",
    highlight: "About 30% reduction in initial application load time.",
    features: [
      "Route and panel code splitting",
      "Lazy loading for heavy dashboard surfaces",
      "Bundle optimization and memoization",
      "Virtualized rendering for large tables",
      "Merge checks for unit, UI, and API tests",
      "Docker production deploys gated on a health check",
    ],
    architecture:
      "The initial bundle was split by route and by heavy panels, then lazy-loaded. Hot render paths were memoized only where profiling showed the cost. Large tables virtualize rows instead of mounting the full result. Bitbucket Pipelines runs Vitest, React Testing Library, ESLint, Playwright, pytest, and Alembic migration checks. The Docker production deploy completes only after the health check succeeds.",
    challenges: [
      "The first load was carrying JavaScript the first screen did not need.",
      "Chart and table panels were too expensive to include in every route.",
      "A faster bundle still needed a release check that failed closed.",
    ],
    contributions: [
      "Cut initial load time by about 30% through code splitting, lazy loading, memoization, and bundle optimization.",
      "Virtualized large analytical tables so rendering cost followed the viewport.",
      "Set the pipeline merge bar and the health check that gates production deploys.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Code splitting",
      "Lazy loading",
      "TanStack Virtual",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "ESLint",
      "pytest",
      "Docker",
      "Bitbucket Pipelines",
    ],
  },
];
