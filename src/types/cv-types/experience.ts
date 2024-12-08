export type ProjContributionType = {
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
  contributions: ProjContributionType[];
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
