import { FC } from "react";

import { Flex, Modal, Separator, usySpacing } from "@usy-ui/base";
import { UseFieldArrayAppend, UseFieldArrayUpdate } from "react-hook-form";

import { ExperienceSectionType } from "@/types";

import { CompanyTypeWithIdIndex } from "..";

import { CompanyInfo } from "./company-info";
import { CompanyProjects } from "./company-projects";

type CompanyModalProps = {
  selectedCompany?: CompanyTypeWithIdIndex;
  appendCompany: UseFieldArrayAppend<ExperienceSectionType, "companies">;
  updateCompany: UseFieldArrayUpdate<ExperienceSectionType, "companies">;
  syncExperienceState: () => void;
  onClose: () => void;
};

export const CompanyModal: FC<CompanyModalProps> = ({
  selectedCompany,
  appendCompany,
  updateCompany,
  syncExperienceState,
  onClose,
}) => {
  const isUpdateMode = Boolean(selectedCompany);

  return (
    <Modal
      title={isUpdateMode ? "Update Company" : "Create Company"}
      onClose={onClose}
      widthProps={{ maxWidth: "1000px", width: "100%" }}
      preventOutsideClose
    >
      <Flex direction="row" gap={usySpacing.px4}>
        <CompanyInfo
          selectedCompany={selectedCompany}
          isUpdateMode={isUpdateMode}
          appendCompany={appendCompany}
          updateCompany={updateCompany}
          syncExperienceState={syncExperienceState}
          onClose={onClose}
        />
        <Separator direction="vertical" heightProps={{ height: "unset" }} />
        <CompanyProjects
          selectedCompany={selectedCompany}
          updateCompany={updateCompany}
          syncExperienceState={syncExperienceState}
        />
      </Flex>
    </Modal>
  );
};
