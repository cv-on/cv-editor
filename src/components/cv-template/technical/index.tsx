import { useContext } from "react";

import { CvContentContext } from "@/context/cv-context";

import { CvSection } from "../../cv-section";

import { TechSkill } from "./tech-skill";

export const TechnicalSection = () => {
  const {
    cvContent: { technical },
  } = useContext(CvContentContext);

  return (
    <>
      <CvSection title="Technical">
        {technical.skills.map(({ type, items }, index) => (
          <TechSkill key={type} index={index} type={type} items={items} />
        ))}
      </CvSection>
    </>
  );
};
