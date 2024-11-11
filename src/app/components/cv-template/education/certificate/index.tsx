import { FC } from "react";

import { Typography } from "@usy-ui/base";
import { ParagraphType } from "@/types/common";

export const Certificate: FC<ParagraphType> = ({ content }) => {
  return <Typography size="small">- {content}</Typography>;
};
