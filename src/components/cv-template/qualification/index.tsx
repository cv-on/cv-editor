"use client";
import { useRecoilValue } from "recoil";

import { qualificationSelector } from "@/app-states/qualification";

import { CvSection } from "../../cv-section";

import { QualifyItem } from "./qualify-item";

export const QualificationSection = () => {
  const qualification = useRecoilValue(qualificationSelector);

  return (
    <>
      <CvSection title="Qualification">
        {qualification.paragraphs.map(({ keyWord, description }) => (
          <QualifyItem
            key={keyWord}
            keyWord={keyWord}
            description={description}
          />
        ))}
      </CvSection>
    </>
  );
};
