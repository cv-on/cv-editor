import { Section } from "../../section";

import { Skill } from "./skills";

export const TechnicalSkills = () => {
  return (
    <>
      <Section title="Technical Skills">
        <Skill
          type="Languages"
          items={[
            "JavaScript (ES6+)",
            "TypeScript",
            "Go",
            "HTML5",
            "CSS3/Sass",
          ]}
        />
        <Skill type="Frontend" items={["ReactJS", "NextJS"]} />
        <Skill type="Backend" items={["NestJS", "ExpressJS"]} />
        <Skill type="AWS" items={["S3", "EC2"]} />
        <Skill
          type="Testing"
          items={["Jest", "React Testing Library", "Playwright"]}
        />
        <Skill type="Other tools" items={["Git", "Jira", "npm"]} />
      </Section>
    </>
  );
};
