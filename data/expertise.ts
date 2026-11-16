export type Diagram =
  | { kind: "stack"; layers: readonly string[] }
  | { kind: "flow"; steps: readonly string[] }
  | {
      kind: "columns";
      columns: readonly { title: string; items: readonly string[] }[];
    };

export type ExpertiseItem = {
  title: string;
  body: string;
  diagram: Diagram;
};

export const expertise: readonly ExpertiseItem[] = [
  {
    title: "Scalable component architecture",
    body: "Product modules sit on feature screens, and those screens sit on a shared UI kit. On LEAPS that was a Material UI library in an Nx monorepo, so teams reused one component layer instead of restyling the same controls.",
    diagram: {
      kind: "stack",
      layers: ["Product modules", "Feature screens", "Shared UI kit"],
    },
  },
  {
    title: "State management strategies",
    body: "Server data stays in TanStack Query. Session and local UI state stay in Zustand or Context. Redux Toolkit is for shared client state that several screens update in a predictable way. WebSockets sit beside the query cache when a dashboard needs live updates.",
    diagram: {
      kind: "columns",
      columns: [
        { title: "Server", items: ["TanStack Query"] },
        { title: "UI", items: ["Zustand", "Context"] },
        { title: "Shared", items: ["Redux Toolkit"] },
      ],
    },
  },
  {
    title: "Frontend performance",
    body: "I split bundles by route, lazy-load heavy panels, memoize where renders are actually hot, and virtualize large tables. On the current analytics app, that work reduced initial load time by about 30%.",
    diagram: {
      kind: "flow",
      steps: ["Code split", "Lazy load", "Memoize", "Virtualize"],
    },
  },
  {
    title: "Data visualization architecture",
    body: "Filters, drill-down, drill-through, crosstabs, slicers, and Top/Bottom N share one filter model. Plotly.js and ECharts draw the views. A virtualized TanStack table holds the dense grids.",
    diagram: {
      kind: "flow",
      steps: ["Filter model", "Query", "Charts", "Virtual table"],
    },
  },
  {
    title: "API integration",
    body: "Screens call REST for datasets, saved dashboards, sharing, and export, and WebSockets where a view needs live updates. FastAPI on PostgreSQL and Express on MongoDB are the services behind those calls. Loading, empty, and error states belong to the component.",
    diagram: {
      kind: "flow",
      steps: ["React UI", "REST / WS", "API services", "Databases"],
    },
  },
  {
    title: "Responsive UI development",
    body: "Dashboards have to work on a laptop and stay usable in a narrower window: stacked filters, reflowed charts, and a table that does not blow out the page. Dark, light, and product themes ship with keyboard access and contrast in mind.",
    diagram: {
      kind: "columns",
      columns: [
        { title: "Mobile", items: ["Stacked"] },
        { title: "Tablet", items: ["Reflow"] },
        { title: "Desktop", items: ["Dense grid"] },
      ],
    },
  },
];
