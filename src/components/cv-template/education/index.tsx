import { CvSection } from "../../cv-section";

import { Certificate } from "./certificate";

export const Education = () => {
  return (
    <>
      <CvSection title="Education">
        <Certificate content="Got a Bachelor's Degree from AeU University" />
      </CvSection>
    </>
  );
};
