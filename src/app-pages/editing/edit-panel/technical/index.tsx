"use client";
import { FC } from "react";

import { Flex } from "@usy-ui/base";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

type TechnicalSectionProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const TechnicalSection: FC<TechnicalSectionProps> = ({
  changeSection,
}) => {
  return (
    <Flex
      direction="column"
      widthProps={{ maxWidth: "50%" }}
      paddingProps={{ ...SectionPaddingConst }}
    >
      <SectionHeader
        sectionTitle="Technical"
        changeSection={changeSection}
        hasGoBack
      />
    </Flex>
  );
};
