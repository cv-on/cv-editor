import { ProjectType } from "@/types";

export const transformProjectNamesStrToArray = (projects: ProjectType[]) => {
  return projects.reduce((acc, { projectName }) => {
    if (projectName.includes(",")) {
      acc = acc.concat(projectName.split(","));
    } else {
      acc.push(projectName);
    }

    return acc;
  }, [] as string[]);
};
