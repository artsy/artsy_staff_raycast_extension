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

export const defaultProjects: Project[] = [
  {
    name: "Eigen",
    links: [
      { title: "GitHub", target: "https://github.com/artsy/eigen", primaryAction: true },
      { title: "CircleCI", target: "https://app.circleci.com/pipelines/github/artsy/eigen", secondaryAction: true },
    ],
  },
  {
    name: "Force",
    links: [
      { title: "Production", target: "https://www.artsy.net" },
      { title: "Staging", target: "https://staging.artsy.net" },
      { title: "GitHub", target: "https://github.com/artsy/force", primaryAction: true },
      { title: "CircleCI", target: "https://app.circleci.com/pipelines/github/artsy/force", secondaryAction: true },
    ],
  },
  {
    name: "Gravity",
    links: [
      { title: "Production", target: "https://api.artsy.net" },
      { title: "Staging", target: "https://stagingapi.artsy.net" },
      { title: "Production Sidekiq", target: "https://api.artsy.net/admin/sidekiq" },
      { title: "Staging Sidekiq", target: "https://stagingapi.artsy.net/admin/sidekiq" },
      { title: "GitHub", target: "https://github.com/artsy/gravity", primaryAction: true },
      { title: "CircleCI", target: "https://app.circleci.com/pipelines/github/artsy/gravity", secondaryAction: true },
    ],
  },
  {
    name: "Metaphysics",
    links: [
      { title: "Production", target: "https://metaphysics-production.artsy.net" },
      { title: "Staging", target: "https://metaphysics-staging.artsy.net" },
      { title: "GitHub", target: "https://github.com/artsy/metaphysics", primaryAction: true },
      {
        title: "CircleCI",
        target: "https://app.circleci.com/pipelines/github/artsy/metaphysics",
        secondaryAction: true,
      },
    ],
  },
  {
    name: "Volt",
    links: [
      { title: "Production", target: "https://cms.artsy.net" },
      { title: "Staging", target: "https://cms-staging.artsy.net" },
      { title: "GitHub", target: "https://github.com/artsy/volt", primaryAction: true },
      {
        title: "CircleCI",
        target: "https://app.circleci.com/pipelines/github/artsy/volt",
        secondaryAction: true,
      },
    ],
  },
];
