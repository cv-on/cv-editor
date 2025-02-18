"use client";
import { FC } from "react";

import { Flex, usySpacing } from "@usy-ui/base";

import { useHydrated } from "@/hooks/use-hydrated";

import { ContactSection } from "./contact";
import { EducationSection } from "./education";
import { ExperienceSection } from "./experience";
import { QualificationSection } from "./qualification";
import { SideProjectsSection } from "./side-projects";
import { CvPageStyled, MainColumnStyled, SubColumnStyled } from "./styled";
import { SummarySection } from "./summary";
import { TechnicalSection } from "./technical";
import { AvatarSection } from "./avatar";

type CvTemplateProps = {
  isRenderMode?: boolean;
  className?: string;
};

export const CvTemplate: FC<CvTemplateProps> = ({
  isRenderMode,
  className,
}) => {
  const { hydrated } = useHydrated();

  if (!hydrated) {
    return null;
  }

  return (
    <CvPageStyled $isRenderMode={isRenderMode} className={className}>
      <Flex>
        <MainColumnStyled>
          <QualificationSection />
          <ExperienceSection />
        </MainColumnStyled>
        <SubColumnStyled>
          <AvatarSection />
          <SummarySection />
          <ContactSection />
          <TechnicalSection />
          <SideProjectsSection />
          <EducationSection />
        </SubColumnStyled>
      </Flex>
    </CvPageStyled>
  );
};
