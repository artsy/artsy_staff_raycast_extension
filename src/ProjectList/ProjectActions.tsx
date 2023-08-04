import { Action, ActionPanel } from "@raycast/api";
import { Project } from "./defaultProjects";

interface ProjectActionsProps {
  project: Project;
}

export const ProjectActions = (props: ProjectActionsProps) => {
  const { links } = props.project;
  const primaryAction = links.find((link) => link.primaryAction);
  const secondaryAction = links.find((link) => link.secondaryAction);
  const actions = [primaryAction, secondaryAction];

  return (
    <ActionPanel>
      {actions.map((action, index) => {
        if (!action) return null;

        const { target, title } = action;
        return <Action.OpenInBrowser key={index} title={title} url={target} />;
      })}
    </ActionPanel>
  );
};
