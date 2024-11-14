import { CompanyType } from "./company";
import { EducationType } from "./education";
import { PersonalInfoType } from "./personal-info";
import { QualificationType } from "./qualification";
import { SideProjectType } from "./side-project";
import { TechnicalSkillType } from "./technical-skills";

export type CvTemplateType = {
  personalInfo: PersonalInfoType;
  qualification: QualificationType;
  technicalSkills: TechnicalSkillType[];
  experience: CompanyType[];
  sideProjects: SideProjectType[];
  education: EducationType;
};
