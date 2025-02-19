import { Box, Flex, Typography, usySpacing } from "@usy-ui/base";
import { useRecoilValue } from "recoil";

import { personalInfoSelector } from "@/app-states";

import { NameAndPositionContainer, NameTypography } from "./styled";

export const NameAndPosition = () => {
  const personalInfo = useRecoilValue(personalInfoSelector);
  const [firstName, ...lastName] = personalInfo.name.split(" ");

  return (
    <NameAndPositionContainer>
      <Box>
        <NameTypography tag="span" size="gigant-2" weight="heavy">
          {firstName}
        </NameTypography>
        &nbsp;&nbsp;
        <NameTypography tag="span" size="gigant-2" weight="thin">
          {lastName}
        </NameTypography>
      </Box>
      <Typography size="medium" weight="semibold" color="dark-5">
        {personalInfo.position}
      </Typography>
    </NameAndPositionContainer>
  );
};
