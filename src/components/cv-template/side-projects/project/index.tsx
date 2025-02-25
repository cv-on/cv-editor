import { FC } from "react";

import { Box, Flex, Typography, usySpacing } from "@usy-ui/base";
import Link from "next/link";

import { SideProjectType } from "@/types";
import { getClickableUrl } from "@/utils/format";

type SideProjectProps = SideProjectType & {
  index: number;
};

export const SideProject: FC<SideProjectProps> = ({
  name,
  description,
  techStacks,
  url,
  index,
}) => {
  return (
    <Flex
      direction="column"
      marginProps={{ marginTop: index === 0 ? "0" : usySpacing.px14 }}
    >
      <Typography size="small" weight="bold">
        {name}
      </Typography>
      <Box paddingProps={{ paddingLeft: usySpacing.px6 }}>
        <Typography size="small">- {description}</Typography>
        <Typography size="small">- {techStacks.join(", ")}</Typography>
        {url && (
          <Link href={getClickableUrl(url)} target="_blank">
            <Typography size="small">- {url}</Typography>
          </Link>
        )}
      </Box>
    </Flex>
  );
};
