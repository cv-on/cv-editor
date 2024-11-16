import { TechnicalSectionType } from "@/types";

export const technical: TechnicalSectionType = {
  skills: [
    {
      type: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "Go", "HTML5", "CSS3/Sass"],
    },
    {
      type: "Frontend",
      items: ["ReactJS", "NextJS", "Vue.js"],
    },
    {
      type: "Backend",
      items: ["Node.js", "NestJS", "Express.js", "Django", "Flask"],
    },
    {
      type: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      type: "DevOps & Cloud",
      items: [
        "Docker",
        "Kubernetes",
        "AWS (Lambda, S3, EC2)",
        "CI/CD Pipelines",
      ],
    },
    {
      type: "Testing",
      items: ["Jest", "Mocha", "Supertest", "Cypress"],
    },
  ],
};
