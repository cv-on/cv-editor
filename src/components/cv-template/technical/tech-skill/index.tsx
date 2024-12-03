import { FC } from "react";

import { Box, Typography, usySpacing } from "@usy-ui/base";

import { TechSkillType } from "@/types";

type TechSkillProps = TechSkillType & {
  index: number;
};

export const TechSkill: FC<TechSkillProps> = ({
  skillType,
  techStacks,
  index,
}) => {
  return (
    <Box marginProps={{ marginTop: index === 0 ? "0" : usySpacing.px14 }}>
      <Typography size="small" weight="bold">
        {skillType}
      </Typography>
      <Box paddingProps={{ paddingLeft: usySpacing.px6 }}>
        {techStacks.map(({ items }) => (
          <Typography key={items.join("-")} size="small">
            {items.join(", ")}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
