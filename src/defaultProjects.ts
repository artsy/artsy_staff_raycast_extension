interface ProjectLink {
  title: string;
  target: string;
  primaryAction?: boolean;
  secondaryAction?: boolean;
}

export interface Project {
  name: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  { name: "Cohesion", links: [] },
  { name: "Diffusion", links: [] },
  { name: "Eigen", links: [] },
  {
    name: "Force",
    links: [
      { title: "Production", target: "https://www.artsy.net" },
      { title: "Staging", target: "https://staging.artsy.net" },
    ],
  },
  {
    name: "Gravity",
    links: [
      { title: "Production", target: "https://api.artsy.net" },
      { title: "Staging", target: "https://stagingapi.artsy.net" },
      { title: "Production Sidekiq", target: "https://api.artsy.net/admin/sidekiq" },
      { title: "Staging Sidekiq", target: "https://stagingapi.artsy.net/admin/sidekiq" },
      { title: "Sentry Production", target: "https://artsynet.sentry.io/issues/?project=157936" },
      { title: "Sentry Staging", target: "https://artsynet.sentry.io/issues/?project=157935" },
    ],
  },
  {
    name: "Metaphysics",
    links: [
      { title: "Production", target: "https://metaphysics-production.artsy.net" },
      { title: "Staging", target: "https://metaphysics-staging.artsy.net" },
    ],
  },
  { name: "Palette", links: [] },
  { name: "Palette-Mobile", links: [] },
  {
    name: "Volt",
    links: [
      { title: "Production", target: "https://cms.artsy.net" },
      { title: "Staging", target: "https://cms-staging.artsy.net" },
      { title: "Sentry Production", target: "https://artsynet.sentry.io/issues/?project=1281370" },
      { title: "Sentry Staging", target: "https://artsynet.sentry.io/issues/?project=1281353" },
    ],
  },
  { name: "Vortex", links: [] },
];

const buildProjects = (projects: Project[]): Project[] =>
  projects.map(({ name, links }) => ({
    name,
    links: [
      { title: "GitHub", target: `https://github.com/artsy/${name.toLowerCase()}`, primaryAction: true },
      { title: "GitHub Pull Requests", target: `https://github.com/artsy/${name.toLowerCase()}/pulls` },
      {
        title: "CircleCI",
        target: `https://app.circleci.com/pipelines/github/artsy/${name.toLowerCase()}`,
        secondaryAction: true,
      },
      ...links,
    ],
  }));

export const defaultProjects: Project[] = buildProjects(projects);
