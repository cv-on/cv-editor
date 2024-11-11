export * from "./company";
export * from "./core-qualification";
export * from "./personal-info";
export * from "./technical-skills";

import { ParagraphType } from "./common";
import { CompanyType } from "./company";
import { CoreQualificationType } from "./core-qualification";
import { PersonalInfoType } from "./personal-info";
import { SideProjectType } from "./side-project";
import { TechnicalSkillType } from "./technical-skills";

export type CvTemplateType = {
  personalInfo: PersonalInfoType;
  coreQualification: CoreQualificationType[];
  technicalSkills: TechnicalSkillType[];
  experience: CompanyType[];
  sideProjects: SideProjectType[];
  education: ParagraphType[];
};
