import { CvTemplateType } from "@/types";

import { education } from "./education";
import { experience } from "./experience";
import { personalInfo } from "./personal-info";
import { qualification } from "./qualification";
import { sideProjects } from "./side-project";
import { technicalSkills } from "./technical-skills";

export const mockCvContent: CvTemplateType = {
  personalInfo: personalInfo,
  qualification: qualification,
  technicalSkills: technicalSkills,
  experience: experience,
  sideProjects: sideProjects,
  education: education,
};
