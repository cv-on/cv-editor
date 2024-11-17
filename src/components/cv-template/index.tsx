"use client";
import { FC } from "react";

import { Flex, usySpacing } from "@usy-ui/base";

import { ContactSection } from "./contact";
import { EducationSection } from "./education";
import { ExperienceSection } from "./experience";
import { HeaderSection } from "./header";
import { QualificationSection } from "./qualification";
import { SideProjectsSection } from "./side-projects";
import { CvPageStyled, MainColumnStyled, SubColumnStyled } from "./styled";
import { SummarySection } from "./summary";
import { TechnicalSection } from "./technical";

type CvTemplateProps = {
  isRenderMode?: boolean;
  className?: string;
};

export const CvTemplate: FC<CvTemplateProps> = ({
  isRenderMode,
  className,
}) => {
  return (
    <CvPageStyled $isRenderMode={isRenderMode} className={className}>
      <HeaderSection />
      <Flex marginProps={{ marginTop: usySpacing.px48 }}>
        <MainColumnStyled>
          <SummarySection />
          <QualificationSection />
          <ExperienceSection />
        </MainColumnStyled>
        <SubColumnStyled>
          <ContactSection />
          <TechnicalSection />
          <SideProjectsSection />
          <EducationSection />
        </SubColumnStyled>
      </Flex>
    </CvPageStyled>
  );
};
