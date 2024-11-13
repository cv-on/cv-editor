export * from "./company";
export * from "./qualification";
export * from "./personal-info";
export * from "./technical-skills";

import { CompanyType } from "./company";
import { QualificationType } from "./qualification";
import { PersonalInfoType } from "./personal-info";
import { SideProjectType } from "./side-project";
import { TechnicalSkillType } from "./technical-skills";
import { EducationType } from "./education";

export type CvTemplateType = {
  personalInfo: PersonalInfoType;
  qualification: QualificationType;
  technicalSkills: TechnicalSkillType[];
  experience: CompanyType[];
  sideProjects: SideProjectType[];
  education: EducationType;
};
