import { FC } from "react";

import { Flex, Typography, usySpacing } from "@usy-ui/base";
import Link from "next/link";

import { SideProjectType } from "@/types/cv-types/side-project";

export const SideProject: FC<SideProjectType> = ({
  name,
  description,
  shortUrl,
  fullUrl,
}) => {
  return (
    <Flex direction="column" marginProps={{ marginTop: usySpacing.px14 }}>
      <Typography weight="bold">{name}</Typography>
      <Typography size="small">- {description}</Typography>
      <Link href={fullUrl} target="_blank">
        <Typography size="small">- {shortUrl}</Typography>
      </Link>
    </Flex>
  );
};
