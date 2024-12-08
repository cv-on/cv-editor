import { useMemo } from "react";

import { useRecoilValue } from "recoil";

import { experienceSelector } from "@/app-states/experience";
import { sortCompaniesTimeline } from "@/utils/helpers";

import { CvSection } from "../../cv-section";

import { Company } from "./company";

export const ExperienceSection = () => {
  const experience = useRecoilValue(experienceSelector);

  const sortedCompanyMemo = useMemo(
    () => sortCompaniesTimeline(experience.companies),
    [experience.companies]
  );

  return (
    <>
      <CvSection title="Working Experience">
        {sortedCompanyMemo.map(
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
