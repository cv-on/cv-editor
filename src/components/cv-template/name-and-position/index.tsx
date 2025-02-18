import { Flex, Typography, usySpacing } from "@usy-ui/base";
import { useRecoilValue } from "recoil";

import { personalInfoSelector } from "@/app-states";

import { NameAndPositionContainer, NameTypography } from "./styled";

export const NameAndPosition = () => {
  const personalInfo = useRecoilValue(personalInfoSelector);

  return (
    <NameAndPositionContainer>
      <NameTypography size="gigant-2" weight="bold">
        {personalInfo.name}
      </NameTypography>
      <Typography size="medium" weight="semibold" color="dark-5">
        {personalInfo.position}
      </Typography>
    </NameAndPositionContainer>
  );
};
