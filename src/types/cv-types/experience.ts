export type ProjectType = {
  clientName?: string;
  projectName: string;
  techStacks: string[];
  responsibilities: string[];
  achievements: string[];
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
