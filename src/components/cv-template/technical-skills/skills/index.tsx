import { FC } from "react";

import { Box, Typography, usySpacing } from "@usy-ui/base";

import { TechnicalSkillType } from "@/types";

export const Skill: FC<TechnicalSkillType> = ({ type, items }) => {
  return (
    <Box marginProps={{ marginBottom: usySpacing.px14 }}>
      <Typography size="small" weight="bold">
        {type}
      </Typography>
      <Typography size="small">{items.join(", ")}</Typography>
    </Box>
  );
};
