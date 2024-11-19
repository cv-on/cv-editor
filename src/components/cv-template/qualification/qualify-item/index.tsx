import { FC } from "react";

import { Typography } from "@usy-ui/base";

import { QualifyType } from "@/types";

export const QualifyItem: FC<QualifyType> = ({ keyPoint, description }) => {
  return (
    <Typography size="small">
      {"- "}
      <Typography
        tag="strong"
        size="small"
        weight="bold"
      >{`${keyPoint}: `}</Typography>
      {description}
    </Typography>
  );
};
