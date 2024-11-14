import { Url } from "./common";

export type SideProjectType = {
  name: string;
  description: string;
  techStacks: string[];
  shortUrl: string;
  fullUrl: Url;
};

export type SideProjectsSectionType = {
  projects: SideProjectType[];
};
