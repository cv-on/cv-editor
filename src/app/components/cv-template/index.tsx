import { FC } from "react";

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

type CvTemplateProps = {
  className?: string;
};

export const CvTemplate: FC<CvTemplateProps> = ({ className }) => {
  return (
    <CvPageStyled className={className}>
      <Flex
        alignItems="center"
        gap={usySpacing.px40}
        marginProps={{ marginTop: usySpacing.px10 }}
      >
        <Avatar
          size="huge"
          url="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?&w=64&h=64&dpr=2&q=70&crop=faces&fit=crop"
        />
        <Box>
          <NameTypography>THI NGUYEN</NameTypography>
          <Typography weight="semibold">Senior Frontend Developer</Typography>
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
  );
};
