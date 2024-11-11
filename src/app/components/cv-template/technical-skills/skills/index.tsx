import { FC } from "react";

import { Box, Typography, usySpacing } from "@usy-ui/base";

import { TechnicalSkillType } from "src/types";

export const Skill: FC<TechnicalSkillType> = ({ type, paragraph }) => {
  return (
    <Box marginProps={{ marginBottom: usySpacing.px14 }}>
      <Typography size="small" weight="bold">
        {type}
      </Typography>
      <Typography size="small">{paragraph.content}</Typography>
    </Box>
  );
};
