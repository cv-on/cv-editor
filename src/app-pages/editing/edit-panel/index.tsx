"use client";
import { useState } from "react";

import { OverviewSections } from "./overview";
import { PersonalInfoSection } from "./personal-info";
import { EditPanelContainerStyled } from "./styled";
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
