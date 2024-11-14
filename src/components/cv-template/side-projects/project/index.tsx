import { FC } from "react";

import { Flex, Typography, usySpacing } from "@usy-ui/base";
import Link from "next/link";

import { SideProjectType } from "@/types";

type SideProjectProps = SideProjectType & {
  index: number;
};

export const SideProject: FC<SideProjectProps> = ({
  name,
  description,
  techStacks,
  shortUrl,
  fullUrl,
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
      <Typography size="small">- {description}</Typography>
      <Typography size="small">- {techStacks.join(", ")}</Typography>
      <Link href={fullUrl} target="_blank">
        <Typography size="small">- {shortUrl}</Typography>
      </Link>
    </Flex>
  );
};
