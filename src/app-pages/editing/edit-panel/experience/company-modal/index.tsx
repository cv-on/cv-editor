import { FC } from "react";

import { Flex, Modal, usySpacing } from "@usy-ui/base";
import { UseFieldArrayAppend, UseFieldArrayUpdate } from "react-hook-form";

import { ExperienceSectionType } from "@/types";

import { CompanyTypeWithIndex } from "..";

import { CompanyInfo } from "./company-info";
import { CompanyProjects } from "./company-projects";

type CompanyModalProps = {
  selectedItem?: CompanyTypeWithIndex;
  append: UseFieldArrayAppend<ExperienceSectionType, "companies">;
  update: UseFieldArrayUpdate<ExperienceSectionType, "companies">;
  syncExperienceState: () => void;
  onClose: () => void;
};

export const CompanyModal: FC<CompanyModalProps> = ({
  selectedItem,
  append,
  update,
  syncExperienceState,
  onClose,
}) => {
  const isUpdateMode = Boolean(selectedItem);

  return (
    <Modal
      title={isUpdateMode ? "Update Company" : "Create Company"}
      onClose={onClose}
      widthProps={{ maxWidth: "1000px" }}
      preventOutsideClose
    >
      <Flex gap={usySpacing.px20}>
        <CompanyInfo
          selectedItem={selectedItem}
          isUpdateMode={isUpdateMode}
          append={append}
          update={update}
          syncExperienceState={syncExperienceState}
          onClose={onClose}
        />
        <CompanyProjects />
      </Flex>
    </Modal>
  );
};
