import { FC } from "react";

import { Typography } from "@usy-ui/base";

import { QualifyType } from "@/types";

import { QualifyItemTypography } from "./styled";

export const QualifyItem: FC<QualifyType> = ({ keyPoint, description }) => {
  return (
    <QualifyItemTypography size="small">
      {"- "}
      <Typography tag="strong" size="small" weight="bold">
        {`${keyPoint}: `}
      </Typography>
      {description}
    </QualifyItemTypography>
  );
};
