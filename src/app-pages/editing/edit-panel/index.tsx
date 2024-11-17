"use client";
import { useCallback, useState } from "react";

import { EducationSection } from "./education";
import { ExperienceSection } from "./experience";
import { OverviewSections } from "./overview";
import { PersonalInfoSection } from "./personal-info";
import { QualificationSection } from "./qualification";
import { SideProjectsSection } from "./side-projects";
import { EditPanelContainerStyled } from "./styled";
import { TechnicalSection } from "./technical";
import { DisplaySectionUnion } from "./types";

export const EditPanel = () => {
  const [displaySection, setDisplaySection] =
    useState<DisplaySectionUnion>("overview");

  const changeSection = (section: DisplaySectionUnion) => {
    setDisplaySection(section);
  };

  const renderOtherSections = () => {
    switch (displaySection) {
      case "personal-info": {
        return <PersonalInfoSection changeSection={changeSection} />;
      }

      case "qualification": {
        return <QualificationSection changeSection={changeSection} />;
      }

      case "technical": {
        return <TechnicalSection changeSection={changeSection} />;
      }

      case "experience": {
        return <ExperienceSection changeSection={changeSection} />;
      }

      case "side-projects": {
        return <SideProjectsSection changeSection={changeSection} />;
      }

      case "education": {
        return <EducationSection changeSection={changeSection} />;
      }
    }
  };

  return (
    <EditPanelContainerStyled
      $isDisplayOverview={displaySection === "overview"}
    >
      <OverviewSections changeSection={changeSection} />
      {renderOtherSections()}
    </EditPanelContainerStyled>
  );
};
