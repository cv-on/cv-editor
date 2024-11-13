import { FC, useState } from "react";

import { Avatar, Box, Flex, Typography, usySpacing } from "@usy-ui/base";

import { Contact } from "./contact";
import { CoreQualification } from "./core-qualification";
import { Education } from "./education";
import { Experience } from "./experience";
import { SideProjects } from "./side-projects";
import {
  CvPageStyled,
  MainColumnStyled,
  NameTypography,
  SubColumnStyled,
} from "./styled";
import { Summary } from "./summary";
import { TechnicalSkills } from "./technical-skills";
import { CvContentContext } from "@/context/cv-context";
import { mockCvContent } from "@/mock/cv-content";
import { CvTemplateType } from "@/types";

type CvTemplateProps = {
  isRenderMode?: boolean;
  className?: string;
};

export const CvTemplate: FC<CvTemplateProps> = ({
  isRenderMode,
  className,
}) => {
  const [cvContent, setCvContent] = useState<CvTemplateType>(mockCvContent);
  const { personalInfo } = cvContent;

  return (
    <CvContentContext.Provider value={{ cvContent, setCvContent }}>
      <CvPageStyled $isRenderMode={isRenderMode} className={className}>
        <Flex
          alignItems="center"
          gap={usySpacing.px40}
          marginProps={{ marginTop: usySpacing.px10 }}
        >
          <Avatar size="huge" src={personalInfo.avatarSrc} />
          <Box>
            <NameTypography>{personalInfo.name}</NameTypography>
            <Typography weight="semibold">{personalInfo.position}</Typography>
          </Box>
        </Flex>
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
