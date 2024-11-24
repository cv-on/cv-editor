import { Dispatch, FC, SetStateAction } from "react";

import { Flex, Modal, Separator, usySpacing } from "@usy-ui/base";
import { UseFieldArrayReturn } from "react-hook-form";

import { ExperienceSectionType } from "@/types";

import { CompanyTypeWithIdIndex } from "..";

import { CompanyInfo } from "./company-info";
import { CompanyProjects } from "./company-projects";

type CompanyModalProps = {
  selectedCompany?: CompanyTypeWithIdIndex;
  setSelectedCompany: Dispatch<
    SetStateAction<CompanyTypeWithIdIndex | undefined>
  >;
  companiesFieldArray: UseFieldArrayReturn<
    ExperienceSectionType,
    "companies",
    "id"
  >;
  syncExperienceState: () => void;
  onClose: () => void;
};

export const CompanyModal: FC<CompanyModalProps> = ({
  selectedCompany,
  setSelectedCompany,
  companiesFieldArray,
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
          companiesFieldArray={companiesFieldArray}
          syncExperienceState={syncExperienceState}
          onClose={onClose}
        />
        <Separator direction="vertical" heightProps={{ height: "unset" }} />
        <CompanyProjects
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          companiesFieldArray={companiesFieldArray}
          syncExperienceState={syncExperienceState}
        />
      </Flex>
    </Modal>
  );
};
