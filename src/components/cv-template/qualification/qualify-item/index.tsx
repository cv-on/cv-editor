import { FC } from "react";

import { Typography } from "@usy-ui/base";

import { QualifyType } from "@/types";

export const QualifyItem: FC<QualifyType> = ({ keyWord, description }) => {
  return (
    <Typography size="small">
      -{" "}
      <Typography
        tag="strong"
        size="small"
        weight="bold"
      >{`${keyWord}: `}</Typography>
      {description}
    </Typography>
  );
};
