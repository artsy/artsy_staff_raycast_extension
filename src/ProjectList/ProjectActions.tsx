import { Action, ActionPanel, Icon, getPreferenceValues } from "@raycast/api";
import { Project } from "../defaultProjects";

interface ProjectActionsProps {
  project: Project;
}

export const ProjectActions = (props: ProjectActionsProps) => {
  const { editor, project_root_path } = getPreferenceValues<Preferences>();
  const { links, name } = props.project;
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

      <Action.Open
        title="Open in Editor"
        icon={Icon.Code}
        application={editor}
        target={`${project_root_path}/${name.toLowerCase()}`}
      />
    </ActionPanel>
  );
};
