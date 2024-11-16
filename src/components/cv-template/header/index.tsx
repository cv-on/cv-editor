"use client";
import { Avatar, Box, Flex, Typography, usySpacing } from "@usy-ui/base";
import { useRecoilValue } from "recoil";

import { personalInfoSelector } from "@/app-states";

import { NameTypography } from "./styled";

export const HeaderSection = () => {
  const personalInfo = useRecoilValue(personalInfoSelector);

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
