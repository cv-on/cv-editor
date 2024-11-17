"use client";
import { FC } from "react";

import { Flex } from "@usy-ui/base";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

type EducationSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const EducationSection: FC<EducationSectionProps> = ({
  changeSection,
}) => {
  return (
    <Flex
      direction="column"
      widthProps={{ maxWidth: "50%" }}
      paddingProps={{ ...SectionPaddingConst }}
    >
      <SectionHeader
        sectionTitle="Education"
        changeSection={changeSection}
        hasGoBack
      />
    </Flex>
  );
};
