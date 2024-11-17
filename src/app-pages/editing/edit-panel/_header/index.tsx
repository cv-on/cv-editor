import { FC } from "react";

import {
  ArrowLeftIcon,
  Button,
  Flex,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import { DisplaySectionUnion } from "../types";

type SectionHeaderProps = {
  sectionTitle: string;
  hasGoBack?: boolean;
  changeSection?: (section: DisplaySectionUnion) => void;
};

export const SectionHeader: FC<SectionHeaderProps> = ({
  sectionTitle,
  hasGoBack,
  changeSection,
}) => {
  return (
    <Flex
      alignItems="center"
      heightProps={{ minHeight: usySpacing.px40 }}
      marginProps={{
        marginLeft: hasGoBack ? `-${usySpacing.px14}` : "0",
        marginBottom: usySpacing.px24,
      }}
    >
      {hasGoBack && (
        <Button variant="invisible" onClick={() => changeSection?.("overview")}>
          <ArrowLeftIcon />
        </Button>
      )}
      &nbsp;
      <Typography size="large" weight="bold">
        {sectionTitle}
      </Typography>
    </Flex>
  );
};
