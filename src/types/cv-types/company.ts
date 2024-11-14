export type CompanyType = {
  name: string;
  fromDate: Date;
  toDate: Date | "present";
  position: string;
  projects: string[];
  techStacks: string[];
  responsibilities: string[];
  achievements: string[];
};
