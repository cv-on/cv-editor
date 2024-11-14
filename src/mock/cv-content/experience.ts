import { ExperienceSectionType } from "@/types";

export const experience: ExperienceSectionType = {
  companies: [
    {
      companyName: "Company A",
      fromDate: new Date("2020/01/01"),
      toDate: "present",
      position: "Senior Frontend",
      projects: [
        {
          client: "Libeara",
          projectName: "Delta V1",
          techStacks: ["ReactJS", "NodeJS"],
          responsibilities: [
            "My main tasks were estimating, developing features for Order Placement module and integrating with other 6 modules in a large micro-frontend architect",
            "My main tasks were estimating, developing features for Order Placement module and integrating with other 6 modules in a large micro-frontend architect",
          ],
          achievements: ["Achievements 1", "Achievements 2"],
        },
        {
          client: "DBS",
          projectName: "Crypto Trading, YFJ",
          techStacks: ["ReactJS", "NodeJS"],
          responsibilities: [
            "My main tasks were estimating, developing features for Order Placement module and integrating with other 6 modules in a large micro-frontend architect",
            "My main tasks were estimating, developing features for Order Placement module and integrating with other 6 modules in a large micro-frontend architect",
          ],
          achievements: ["Achievements 1", "Achievements 2"],
        },
      ],
    },
    {
      companyName: "Company B",
      fromDate: new Date("2018/01/01"),
      toDate: new Date("2020/01/01"),
      position: "Senior Frontend",
      projects: [
        {
          projectName: "Project A",
          techStacks: ["ReactJS", "NodeJS"],
          responsibilities: ["Responsibilities 1", "Responsibilities 2"],
          achievements: ["Achievements 1", "Achievements 2"],
        },
        {
          projectName: "Project B",
          techStacks: ["ReactJS", "NodeJS"],
          responsibilities: ["Responsibilities 1", "Responsibilities 2"],
          achievements: ["Achievements 1", "Achievements 2"],
        },
      ],
    },
  ],
};
