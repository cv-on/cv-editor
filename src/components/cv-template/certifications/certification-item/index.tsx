import { FC } from "react";

import { Typography } from "@usy-ui/base";

import { CertificationItemType } from "@/types";

export const CertificationItem: FC<CertificationItemType> = ({ content }) => {
  return <Typography size="small">- {content}</Typography>;
};
