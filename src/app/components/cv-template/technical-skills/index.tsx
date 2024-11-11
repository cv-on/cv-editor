import { Section } from "../../section";

import { Skill } from "./skills";

export const TechnicalSkills = () => {
  return (
    <>
      <Section title="Technical Skills">
        <Skill
          type="Languages"
          paragraph={{
            content: "JavaScript (ES6+), TypeScript, Go, HTML5, CSS3/Sass",
          }}
        />
        <Skill type="Frontend" paragraph={{ content: "ReactJS, NextJS" }} />
        <Skill type="Backend" paragraph={{ content: "NestJS, ExpressJS" }} />
        <Skill type="AWS" paragraph={{ content: "S3, EC2" }} />
        <Skill
          type="Testing"
          paragraph={{ content: "Jest, React Testing Library, Playwright" }}
        />
        <Skill type="Other tools" paragraph={{ content: "Git, Jira, npm" }} />
      </Section>
    </>
  );
};
