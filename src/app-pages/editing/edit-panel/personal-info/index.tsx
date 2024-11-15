import { FC } from "react";

import {
  ArrowLeftIcon,
  Button,
  Flex,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import { DisplaySectionUnion } from "../types";

type PersonalInfoSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const PersonalInfoSection: FC<PersonalInfoSectionProps> = ({
  changeSection,
}) => {
  return (
    <Flex
      direction="column"
      widthProps={{ maxWidth: "50%" }}
      paddingProps={{ padding: usySpacing.px32 }}
    >
      <Flex
        alignItems="center"
        marginProps={{ marginLeft: `-${usySpacing.px10}` }}
      >
        <Button variant="invisible" onClick={() => changeSection("overview")}>
          <ArrowLeftIcon />
        </Button>
        <Typography size="large" weight="bold">
          Personal Info
        </Typography>
      </Flex>
    </Flex>
  );
};
