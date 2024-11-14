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
          ({ companyName, fromDate, toDate, position, projects }, index) => (
            <Company
              key={companyName}
              companyName={companyName}
              fromDate={fromDate}
              toDate={toDate}
              position={position}
              projects={projects}
              index={index}
            />
          )
        )}
      </CvSection>
    </>
  );
};
