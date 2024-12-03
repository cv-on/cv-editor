export type ProjResponsibilityType = {
  content: string;
};

export type ProjAchievementType = {
  content: string;
};

export type ProjectType = {
  clientName?: string;
  projectNames: string[];
  description: string;
  techStacks: string[];
  responsibilities: ProjResponsibilityType[];
  achievements: ProjAchievementType[];
};

export type CompanyType = {
  companyName: string;
  fromDate: string;
  toDate: "present" | string;
  position: string;
  projects: ProjectType[];
};

export type ExperienceSectionType = {
  companies: CompanyType[];
};
