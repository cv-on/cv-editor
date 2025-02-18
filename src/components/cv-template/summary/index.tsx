import { Typography } from "@usy-ui/base";
import { useRecoilValue } from "recoil";

import { personalInfoSelector } from "@/app-states";

import { SummaryBoard } from "./styled";

export const SummarySection = () => {
  const personalInfo = useRecoilValue(personalInfoSelector);

  return (
    <SummaryBoard>
      <Typography size="small">{personalInfo.summary}</Typography>
    </SummaryBoard>
  );
};
