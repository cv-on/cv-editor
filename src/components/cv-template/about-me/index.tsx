import { Typography } from "@usy-ui/base";
import { useRecoilValue } from "recoil";

import { personalInfoSelector } from "@/app-states";

import { AboutMeBoard } from "./styled";

export const AboutMeSection = () => {
  const personalInfo = useRecoilValue(personalInfoSelector);

  return (
    <AboutMeBoard>
      <Typography size="small">{personalInfo.summary}</Typography>
    </AboutMeBoard>
  );
};
