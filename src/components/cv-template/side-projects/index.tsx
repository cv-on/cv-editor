import { CvSection } from "../../cv-section";

import { SideProject } from "./project";

export const SideProjectsSection = () => {
  return (
    <>
      <CvSection title="Side Projects">
        <SideProject
          name="Usy UI"
          description="A React component UI library"
          techStacks={["ReactJS"]}
          shortUrl="usy-ui.github.io/landing"
          fullUrl="https://usy-ui.github.io/landing"
        />
        <SideProject
          name="Cvon"
          description="A free tool for creating CV"
          techStacks={["ReactJS"]}
          shortUrl="usy-ui.github.io/landing"
          fullUrl="https://usy-ui.github.io/landing"
        />
      </CvSection>
    </>
  );
};
