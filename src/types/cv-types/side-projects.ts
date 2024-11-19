export type SideProjectType = {
  name: string;
  description: string;
  techStacks: string[];
  url: string;
};

export type SideProjectsSectionType = {
  projects: SideProjectType[];
};
