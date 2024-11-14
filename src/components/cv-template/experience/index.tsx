import { useContext } from "react";

import { CvContentContext } from "@/context/cv-context";

import { CvSection } from "../../cv-section";

import { Company } from "./company";

export const ExperienceSection = () => {
  const {
    cvContent: { experience },
  } = useContext(CvContentContext);

  return (
    <>
      <CvSection title="Experience">
        {experience.companies.map(
          (
            {
              name,
              fromDate,
              toDate,
              position,
              projects,
              techStacks,
              responsibilities,
              achievements,
            },
            index
          ) => (
            <Company
              key={name}
              name={name}
              fromDate={fromDate}
              toDate={toDate}
              position={position}
              projects={projects}
              techStacks={techStacks}
              responsibilities={responsibilities}
              achievements={achievements}
              index={index}
            />
          )
        )}
      </CvSection>
    </>
  );
};
