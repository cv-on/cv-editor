import { CvSection } from "../../cv-section";

import { TechSkill } from "./tech-skill";

export const TechnicalSection = () => {
  return (
    <>
      <CvSection title="Technical Skills">
        <TechSkill
          type="Languages"
          items={[
            "JavaScript (ES6+)",
            "TypeScript",
            "Go",
            "HTML5",
            "CSS3/Sass",
          ]}
        />
        <TechSkill type="Frontend" items={["ReactJS", "NextJS"]} />
        <TechSkill type="Backend" items={["NestJS", "ExpressJS"]} />
        <TechSkill type="AWS" items={["S3", "EC2"]} />
        <TechSkill
          type="Testing"
          items={["Jest", "React Testing Library", "Playwright"]}
        />
        <TechSkill type="Other tools" items={["Git", "Jira", "npm"]} />
      </CvSection>
    </>
  );
};
