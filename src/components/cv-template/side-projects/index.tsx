import { useRecoilValue } from "recoil";

import { sideProjectsSelector } from "@/app-states/side-projects";

import { CvSection } from "../../cv-section";

import { SideProject } from "./project";

export const SideProjectsSection = () => {
  const sideProjects = useRecoilValue(sideProjectsSelector);

  return (
    <>
      <CvSection title="Side Projects">
        {sideProjects.projects.map(
          ({ name, description, techStacks, shortUrl, fullUrl }, index) => (
            <SideProject
              key={name}
              index={index}
              name={name}
              description={description}
              techStacks={techStacks}
              shortUrl={shortUrl}
              fullUrl={fullUrl}
            />
          )
        )}
      </CvSection>
    </>
  );
};
