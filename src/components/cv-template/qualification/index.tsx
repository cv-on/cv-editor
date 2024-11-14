import { useContext } from "react";

import { CvContentContext } from "@/context/cv-context";

import { CvSection } from "../../cv-section";

import { Paragraph } from "./paragraph";

export const QualificationSection = () => {
  const {
    cvContent: { qualification },
  } = useContext(CvContentContext);

  return (
    <>
      <CvSection title="Qualification">
        {qualification.paragraphs.map((content) => (
          <Paragraph key={content.substring(0, 10)} content={content} />
        ))}
      </CvSection>
    </>
  );
};
