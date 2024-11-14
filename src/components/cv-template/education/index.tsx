import { useContext } from "react";

import { CvContentContext } from "@/context/cv-context";

import { CvSection } from "../../cv-section";

import { Paragraph } from "./paragraph";

export const EducationSection = () => {
  const {
    cvContent: { education },
  } = useContext(CvContentContext);

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
