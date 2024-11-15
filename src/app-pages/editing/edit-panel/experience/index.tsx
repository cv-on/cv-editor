import { FC } from "react";

import { Flex } from "@usy-ui/base";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

type ExperienceSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const ExperienceSection: FC<ExperienceSectionProps> = ({
  changeSection,
}) => {
  return (
    <Flex
      direction="column"
      widthProps={{ maxWidth: "50%" }}
      paddingProps={{ ...SectionPaddingConst }}
    >
      <SectionHeader
        sectionTitle="Experience"
        changeSection={changeSection}
        hasGoBack
      />
    </Flex>
  );
};
