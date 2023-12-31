import { Action, ActionPanel, Icon, List, getPreferenceValues } from "@raycast/api";
import { useState } from "react";
import { defaultProjects } from "../defaultProjects";

export const LinkList = () => {
  const projects = defaultProjects;

  const [searchText, setSearchText] = useState("");

  const { editor, project_root_path } = getPreferenceValues<Preferences>();

  return (
    <List onSearchTextChange={setSearchText} filtering>
      {projects.map((project, index) => (
        <List.Item
          key={index}
          title={`${project.name}`}
          icon={Icon.Code}
          actions={
            <ActionPanel>
              <Action.Open
                title={`${project.name}`}
                icon={Icon.Code}
                application={editor}
                target={`${project_root_path}/${project.name.toLowerCase()}`}
              />
              {project.links.map(({ target, title }, index) => (
                <Action.OpenInBrowser url={target} title={title} icon={Icon.Bookmark} key={index} />
              ))}
            </ActionPanel>
          }
        />
      ))}

      {/* Don't show links if there is no search text */}
      {searchText != "" &&
        projects.map((project) =>
          project.links.map(({ target, title }, index) => (
            <List.Item
              key={index}
              title={`${project.name} ${title}`}
              icon={Icon.Bookmark}
              actions={
                <ActionPanel>
                  <Action.OpenInBrowser url={target} title={title} icon={Icon.Bookmark} />
                </ActionPanel>
              }
            />
          ))
        )}
    </List>
  );
};
