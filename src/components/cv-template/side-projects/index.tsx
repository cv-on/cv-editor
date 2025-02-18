import { useRecoilValue } from "recoil";

import { sideProjectsSelector } from "@/app-states/side-projects";
import { GrayBoard } from "@/components/gray-board";

import { SideProject } from "./project";

export const SideProjectsSection = () => {
  const sideProjects = useRecoilValue(sideProjectsSelector);

  return (
    <GrayBoard title="Side Projects">
      {sideProjects.projects.map(
        ({ name, description, techStacks, url }, index) => (
          <SideProject
            key={name}
            index={index}
            name={name}
            description={description}
            techStacks={techStacks}
            url={url}
          />
        )
      )}
    </GrayBoard>
  );
};
