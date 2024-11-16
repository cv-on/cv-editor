"use client";
import { useRecoilValue } from "recoil";

import { educationSelector } from "@/app-states/education";

import { CvSection } from "../../cv-section";

import { Paragraph } from "./paragraph";

export const EducationSection = () => {
  const education = useRecoilValue(educationSelector);

  return (
    <>
      <CvSection title="Education">
        {education.paragraphs.map((content) => (
          <Paragraph key={content.substring(0, 10)} content={content} />
        ))}
      </CvSection>
    </>
  );
};
