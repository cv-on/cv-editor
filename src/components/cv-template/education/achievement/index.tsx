import { FC } from "react";

import { Typography } from "@usy-ui/base";

import { AchievementType } from "@/types";

export const Achievement: FC<AchievementType> = ({ content }) => {
  return <Typography size="small">- {content}</Typography>;
};
