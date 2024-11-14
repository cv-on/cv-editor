import { useContext } from "react";

import { CvContentContext } from "@/context/cv-context";

import { CvSection } from "../../cv-section";

import { SideProject } from "./project";

export const SideProjectsSection = () => {
  const {
    cvContent: { sideProjects },
  } = useContext(CvContentContext);

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
