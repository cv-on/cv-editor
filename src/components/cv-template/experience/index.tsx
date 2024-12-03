import { useRecoilValue } from "recoil";

import { experienceSelector } from "@/app-states/experience";

import { CvSection } from "../../cv-section";

import { Company } from "./company";

export const ExperienceSection = () => {
  const experience = useRecoilValue(experienceSelector);

  return (
    <>
      <CvSection title="Working Experience">
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
