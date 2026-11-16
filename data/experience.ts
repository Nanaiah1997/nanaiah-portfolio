export type Role = {
  title: string;
  period: string;
  current?: boolean;
  points: readonly string[];
};

export const experience = {
  company: "Analyttica Datalab",
  location: "Bengaluru, Karnataka",
  period: "January 2023 — Present",
  summary:
    "Product engineering for enterprise analytics, from intern UI modules to the current self-service BI platform.",
  roles: [
    {
      title: "Software Engineer",
      period: "October 2025 — Present",
      current: true,
      points: [
        "Build the React.js, Next.js, and TypeScript UI for a self-service BI platform. React Context, Zustand, and TanStack Query keep screens decoupled from data fetching.",
        "Reduced initial load time by about 30% with code splitting, lazy loading, memoization, and bundle optimization.",
        "Built drag-and-drop dashboards with drill-down, drill-through, crosstabs, slicers, Top/Bottom N, and multi-level filters, using virtualized TanStack tables, Plotly.js, and ECharts.",
        "Shipped sharing, guest and embedded access, bookmarks, what-if scenario planning, and PNG, PDF, and PPTX export. Node.js, Express.js, MongoDB, and FastAPI on PostgreSQL sit behind those flows.",
        "Set the merge bar on Bitbucket Pipelines with Vitest, React Testing Library, ESLint, Playwright, pytest, and Alembic migrations. Docker production deploys finish only after the health check succeeds.",
        "Configured the repository's Claude instructions for architecture, UI, data, and quality, so generated changes follow the codebase structure.",
        "Guide junior developers through blockers and interview frontend candidates on React and JavaScript.",
      ],
    },
    {
      title: "Associate Software Engineer",
      period: "June 2023 — September 2025",
      points: [
        "Delivered production React.js and Next.js features in TypeScript for the LEAPS analytics platform, from component design through release.",
        "Built a shared Material UI library in an Nx monorepo and micro-frontend architecture, so product modules shared one component layer.",
        "Chose Redux Toolkit, Zustand, and TanStack Query based on the kind of state each screen needed, and added WebSockets for live dashboard updates.",
        "Shipped accessible dark, light, and product themes. Tested with Jest, React Testing Library, and Cypress, with merges gated by ESLint and SonarQube.",
      ],
    },
    {
      title: "UI Developer Intern",
      period: "January 2023 — May 2023",
      points: [
        "Built responsive React.js modules with Material UI and connected them to REST APIs, including loading, error, and empty states.",
        "Debugged UI defects with senior engineers and retested fixes before they shipped.",
      ],
    },
  ],
} as const satisfies {
  company: string;
  location: string;
  period: string;
  summary: string;
  roles: readonly Role[];
};
