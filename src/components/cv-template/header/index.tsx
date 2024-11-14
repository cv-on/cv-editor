import { useContext } from "react";

import { Avatar, Box, Flex, Typography, usySpacing } from "@usy-ui/base";

import { CvContentContext } from "@/context/cv-context";

import { NameTypography } from "./styled";

export const HeaderSection = () => {
  const {
    cvContent: { personalInfo },
  } = useContext(CvContentContext);

  return (
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
  );
};
