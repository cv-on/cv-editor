import { TechnicalSectionType } from "@/types";

export const technical: TechnicalSectionType = {
  skills: [
    {
      skillType: "Languages",
      techStacks: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Go",
        "HTML5",
        "CSS3/Sass",
      ],
    },
    {
      skillType: "Frontend",
      techStacks: ["ReactJS", "NextJS", "Vue.js"],
    },
    {
      skillType: "Backend",
      techStacks: ["Node.js", "NestJS", "Express.js", "Django", "Flask"],
    },
    {
      skillType: "Databases",
      techStacks: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      skillType: "DevOps & Cloud",
      techStacks: [
        "Docker",
        "Kubernetes",
        "AWS (Lambda, S3, EC2)",
        "CI/CD Pipelines",
      ],
    },
    {
      skillType: "Testing",
      techStacks: ["Jest", "Mocha", "Supertest", "Cypress"],
    },
  ],
};
