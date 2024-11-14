import { ExperienceSectionType } from "@/types";

export const experience: ExperienceSectionType = {
  companies: [
    {
      name: "Company A",
      fromDate: new Date("2020/01/01"),
      toDate: "present",
      position: "Senior Frontend",
      projects: ["Project A", "Project B"],
      techStacks: ["Tech Stack A", "Tech Stack B"],
      responsibilities: ["Do A", "Do B"],
      achievements: ["Achievement A", "Achievement B"],
    },
    {
      name: "Company B",
      fromDate: new Date("2018/01/01"),
      toDate: new Date("2020/01/01"),
      position: "Senior Frontend",
      projects: ["Project A", "Project B"],
      techStacks: ["Tech Stack A", "Tech Stack B"],
      responsibilities: ["Do A", "Do B"],
      achievements: ["Achievement A", "Achievement B"],
    },
  ],
};
