import { FC } from "react";

import { Typography } from "@usy-ui/base";

import { CertificationItemType } from "@/types";

export const Achievement: FC<CertificationItemType> = ({ content }) => {
  return <Typography size="small">- {content}</Typography>;
};
