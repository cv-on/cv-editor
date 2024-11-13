import { CvTemplateType } from "@/types";
import { personalInfo } from "./personal-info";
import { qualification } from "./qualification";
import { technicalSkills } from "./technical-skills";
import { experience } from "./experience";
import { sideProjects } from "./side-project";
import { education } from "./education";

export const mockCvContent: CvTemplateType = {
  personalInfo: personalInfo,
  qualification: qualification,
  technicalSkills: technicalSkills,
  experience: experience,
  sideProjects: sideProjects,
  education: education,
};
