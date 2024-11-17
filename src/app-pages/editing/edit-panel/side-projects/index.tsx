import { FC } from "react";

import { Flex } from "@usy-ui/base";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

type SideProjectsSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const SideProjectsSection: FC<SideProjectsSectionProps> = ({
  changeSection,
}) => {
  return (
    <Flex
      direction="column"
      widthProps={{ maxWidth: "50%" }}
      paddingProps={{ ...SectionPaddingConst }}
    >
      <SectionHeader
        sectionTitle="Side Projects"
        changeSection={changeSection}
        hasGoBack
      />
    </Flex>
  );
};
