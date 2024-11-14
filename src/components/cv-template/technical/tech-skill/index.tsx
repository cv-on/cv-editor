import { FC } from "react";

import { Box, Typography, usySpacing } from "@usy-ui/base";

import { TechSkillType } from "@/types";

type TechSkillProps = TechSkillType & {
  index: number;
};

export const TechSkill: FC<TechSkillProps> = ({ type, items, index }) => {
  return (
    <Box marginProps={{ marginTop: index === 0 ? "0" : usySpacing.px14 }}>
      <Typography size="small" weight="bold">
        {type}
      </Typography>
      <Typography size="small">{items.join(", ")}</Typography>
    </Box>
  );
};
