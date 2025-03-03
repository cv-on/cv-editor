"use client";
import { FC, useState } from "react";

import { Box, Scrollable, usySpacing } from "@usy-ui/base";

import { CertificationsSection } from "./certifications";
import { ExperienceSection } from "./experience";
import { OverviewSections } from "./overview";
import { PersonalInfoSection } from "./personal-info";
import { QualificationSection } from "./qualification";
import { SideProjectsSection } from "./side-projects";
import { EditPanelContainerStyled } from "./styled";
import { TechnicalSection } from "./technical";
import { DisplaySectionUnion } from "./types";

export type DisplayModeUnion = "right-side" | "modal";

type EditPanelProps = {
  displayMode: DisplayModeUnion;
};

export const EditPanel: FC<EditPanelProps> = ({ displayMode }) => {
  const [displaySection, setDisplaySection] =
    useState<DisplaySectionUnion>("overview");

  const changeSection = (section: DisplaySectionUnion) => {
    setDisplaySection(section);
  };

  const renderSections = () => {
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

      case "certifications": {
        return <CertificationsSection changeSection={changeSection} />;
      }
    }
  };

  return (
    <EditPanelContainerStyled
      $isOnOverview={displaySection === "overview"}
      $displayMode={displayMode}
    >
      <OverviewSections changeSection={changeSection} />
      <Scrollable>{renderSections()}</Scrollable>
    </EditPanelContainerStyled>
  );
};
