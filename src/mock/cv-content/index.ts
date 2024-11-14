import { CvTemplateType } from "@/types";

import { education } from "./education";
import { experience } from "./experience";
import { personalInfo } from "./personal-info";
import { qualification } from "./qualification";
import { sideProjects } from "./side-projects";
import { technical } from "./technical";

export const mockCvContent: CvTemplateType = {
  personalInfo: personalInfo,
  qualification: qualification,
  technical: technical,
  experience: experience,
  sideProjects: sideProjects,
  education: education,
};
