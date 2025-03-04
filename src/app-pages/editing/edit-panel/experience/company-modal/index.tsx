import { Dispatch, FC, SetStateAction } from "react";

import { Modal, usySpacing } from "@usy-ui/base";
import { UseFieldArrayReturn } from "react-hook-form";

import { ExperienceSectionType } from "@/types";

import { CompanyTypeWithIdIndex } from "..";

import { CompanyInfo } from "./company-info";
import { CompanyProjects } from "./company-projects";
import {
  StyledCompanyInfoAndProjectsScrollable,
  StyledSeparator,
} from "./styled";

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
      widthProps={{ width: "100%", maxWidth: "1000px" }}
      heightProps={{ maxHeight: "90vh" }}
      preventOutsideClose
    >
      <StyledCompanyInfoAndProjectsScrollable
        heightProps={{ maxHeight: "calc(90vh - 100px)" }}
        paddingProps={{
          paddingRight: usySpacing.px8,
          paddingBottom: usySpacing.px40,
        }}
      >
        <CompanyInfo
          selectedCompany={selectedCompany}
          isUpdateMode={isUpdateMode}
          companiesFieldArray={companiesFieldArray}
          syncExperienceState={syncExperienceState}
          onClose={onClose}
        />
        <StyledSeparator />
        <CompanyProjects
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          companiesFieldArray={companiesFieldArray}
          syncExperienceState={syncExperienceState}
        />
      </StyledCompanyInfoAndProjectsScrollable>
    </Modal>
  );
};
