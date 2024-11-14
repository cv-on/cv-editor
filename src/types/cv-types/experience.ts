export type ProjectType = {
  client?: string;
  projectName: string;
  techStacks: string[];
  responsibilities: string[];
  achievements: string[];
};

export type CompanyType = {
  companyName: string;
  fromDate: Date;
  toDate: Date | "present";
  position: string;
  projects: ProjectType[];
};

export type ExperienceSectionType = {
  companies: CompanyType[];
};
