import { TechnicalSectionType } from "@/types";

export const technical: TechnicalSectionType = {
  skills: [
    {
      skillType: "Languages",
      techStacks: [
        {
          items: [
            "JavaScript (ES6+)",
            "TypeScript",
            "Go",
            "HTML5",
            "CSS3/Sass",
          ],
        },
      ],
    },
    {
      skillType: "Frontend",
      techStacks: [{ items: ["ReactJS", "NextJS", "Vue.js"] }],
    },
    {
      skillType: "Backend",
      techStacks: [
        { items: ["Node.js", "NestJS", "Express.js", "Django", "Flask"] },
      ],
    },
    {
      skillType: "Databases",
      techStacks: [{ items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] }],
    },
    {
      skillType: "DevOps & Cloud",
      techStacks: [
        {
          items: [
            "Docker",
            "Kubernetes",
            "AWS (Lambda, S3, EC2)",
            "CI/CD Pipelines",
          ],
        },
      ],
    },
    {
      skillType: "Testing",
      techStacks: [{ items: ["Jest", "Mocha", "Supertest", "Cypress"] }],
    },
  ],
};
