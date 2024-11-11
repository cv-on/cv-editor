import { Section } from "../../section";

import { SideProject } from "./project";

export const SideProjects = () => {
  return (
    <>
      <Section title="Side Projects">
        <SideProject
          name="Usy UI"
          description="A React component UI library"
          url="usy-ui.github.io/landing"
        />
        <SideProject
          name="Cvon"
          description="A free tool for creating CV"
          url="usy-ui.github.io/landing"
        />
      </Section>
    </>
  );
};
