"use client";
import { FC, useState } from "react";

import { Flex, usySpacing } from "@usy-ui/base";

import { CvContentContext } from "@/context/cv-context";
import { mockCvContent } from "@/mock/cv-content";
import { CvTemplateType } from "@/types";

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
  const [cvContent, setCvContent] = useState<CvTemplateType>(mockCvContent);

  return (
    <CvContentContext.Provider value={{ cvContent, setCvContent }}>
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
    </CvContentContext.Provider>
  );
};
