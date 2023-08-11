import { List } from "@raycast/api";
import { defaultProjects } from "../defaultProjects";
import { ProjectActions } from "./ProjectActions";
import { ProjectDetails } from "./ProjectDetails";

export const ProjectList = () => {
  const projects = defaultProjects;

  return (
    <List isShowingDetail>
      {projects.map((project, index) => (
        <List.Item
          actions={<ProjectActions project={project} />}
          detail={<ProjectDetails project={project} />}
          key={index}
          title={project.name}
        />
      ))}
    </List>
  );
};
