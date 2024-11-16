import { useContext } from "react";

import { CvContentContext } from "@/context/cv-context";

import { CvSection } from "../../cv-section";

import { QualifyItem } from "./qualify-item";

export const QualificationSection = () => {
  const {
    cvContent: { qualification },
  } = useContext(CvContentContext);

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
