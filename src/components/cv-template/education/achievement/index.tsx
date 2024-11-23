import { FC } from "react";

import { Typography } from "@usy-ui/base";

import { EduAchievementType } from "@/types";

export const Achievement: FC<EduAchievementType> = ({ content }) => {
  return <Typography size="small">- {content}</Typography>;
};
