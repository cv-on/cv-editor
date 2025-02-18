"use client";
import { FC } from "react";

import { Flex } from "@usy-ui/base";

import { useHydrated } from "@/hooks/use-hydrated";

import { AboutMeSection } from "./about-me";
import { AvatarSection } from "./avatar";
import { ContactSection } from "./contact";
import { EducationSection } from "./education";
import { ExperienceSection } from "./experience";
import { QualificationSection } from "./qualification";
import { SideProjectsSection } from "./side-projects";
import { CvPageStyled, MainColumnStyled, SubColumnStyled } from "./styled";
import { TechnicalSection } from "./technical";
import { NameAndPosition } from "./name-and-position";

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
          <NameAndPosition />
          <QualificationSection />
          <ExperienceSection />
        </MainColumnStyled>
        <SubColumnStyled>
          <AvatarSection />
          <AboutMeSection />
          <ContactSection />
          <TechnicalSection />
          <SideProjectsSection />
          <EducationSection />
        </SubColumnStyled>
      </Flex>
    </CvPageStyled>
  );
};
