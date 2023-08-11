import { List } from "@raycast/api";
import { Project } from "../defaultProjects";

interface ProjectItemDetailProps {
  project: Project;
}

export const ProjectDetails = (props: ProjectItemDetailProps) => {
  const { project } = props;

  return (
    <List.Item.Detail
      metadata={
        <List.Item.Detail.Metadata>
          {project.links.map(({ target, title }, index) => (
            <List.Item.Detail.Metadata.Link key={index} target={target} text={target} title={title} />
          ))}
          <List.Item.Detail.Metadata.Separator />
        </List.Item.Detail.Metadata>
      }
    />
  );
};
