import { FC } from "react";

import { Flex, Typography, usySpacing } from "@usy-ui/base";

import { SideProjectType } from "src/types/side-project";

export const SideProject: FC<SideProjectType> = ({
  name,
  description,
  url,
}) => {
  return (
    <Flex direction="column" marginProps={{ marginTop: usySpacing.px14 }}>
      <Typography weight="bold">{name}</Typography>
      <Typography size="small">- {description}</Typography>
      <Typography size="small">- {url}</Typography>
    </Flex>
  );
};
