import { Flex, usySpacing } from "@usy-ui/base";
import { useRecoilValue } from "recoil";

import { qualificationSelector } from "@/app-states/qualification";

import { CvSection } from "../../cv-section";

import { QualifyItem } from "./qualify-item";

export const QualificationSection = () => {
  const qualification = useRecoilValue(qualificationSelector);

  return (
    <>
      <CvSection title="Qualification">
        <Flex direction="column" gap={usySpacing.px8}>
          {qualification.qualifyItems.map(({ keyPoint, description }) => (
            <QualifyItem
              key={keyPoint}
              keyPoint={keyPoint}
              description={description}
            />
          ))}
        </Flex>
      </CvSection>
    </>
  );
};
