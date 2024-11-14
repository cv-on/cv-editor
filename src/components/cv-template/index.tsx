import { FC, useState } from "react";

import { Flex, usySpacing } from "@usy-ui/base";

import { CvContentContext } from "@/context/cv-context";
import { mockCvContent } from "@/mock/cv-content";
import { CvTemplateType } from "@/types";

import { Contact } from "./contact";
import { CoreQualification } from "./core-qualification";
import { Education } from "./education";
import { Experience } from "./experience";
import { Header } from "./header";
import { SideProjects } from "./side-projects";
import { CvPageStyled, MainColumnStyled, SubColumnStyled } from "./styled";
import { Summary } from "./summary";
import { TechnicalSkills } from "./technical-skills";

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
        <Header />
        <Flex marginProps={{ marginTop: usySpacing.px48 }}>
          <MainColumnStyled>
            <Summary />
            <CoreQualification />
            <Experience />
          </MainColumnStyled>
          <SubColumnStyled>
            <Contact />
            <TechnicalSkills />
            <SideProjects />
            <Education />
          </SubColumnStyled>
        </Flex>
      </CvPageStyled>
    </CvContentContext.Provider>
  );
};
