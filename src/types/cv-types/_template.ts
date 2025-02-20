import { CertificationsSectionType } from "./certifications";
import { ExperienceSectionType } from "./experience";
import { PersonalInfoSectionType } from "./personal-info";
import { QualificationSectionType } from "./qualification";
import { SideProjectsSectionType } from "./side-projects";
import { TechnicalSectionType } from "./technical";

export type CvTemplateType = {
  personalInfo: PersonalInfoSectionType;
  qualification: QualificationSectionType;
  technical: TechnicalSectionType;
  experience: ExperienceSectionType;
  sideProjects: SideProjectsSectionType;
  certifications: CertificationsSectionType;
};
