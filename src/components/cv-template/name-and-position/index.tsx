import { Typography } from "@usy-ui/base";
import { useRecoilValue } from "recoil";

import { personalInfoSelector } from "@/app-states";

import { NameAndPositionContainer, NameTypography } from "./styled";

export const NameAndPosition = () => {
  const personalInfo = useRecoilValue(personalInfoSelector);
  const [firstName, ...lastName] = personalInfo.name.split(" ");

  return (
    <NameAndPositionContainer>
      <NameTypography>
        <Typography tag="strong" size="gigant-2" weight="heavy">
          {firstName}
        </Typography>
        &nbsp;&nbsp;
        <Typography tag="span" size="gigant-2" weight="thin">
          {lastName.join(" ")}
        </Typography>
      </NameTypography>
      <Typography size="medium" weight="semibold" color="dark-5">
        {personalInfo.position}
      </Typography>
      <Typography tag="em" size="small" color="dark-9">
        CV is made by my Cvon tool{" "}
        <a href="http://18.142.230.95/" target="_blank">
          [link]
        </a>
      </Typography>
    </NameAndPositionContainer>
  );
};
