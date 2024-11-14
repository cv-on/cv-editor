import { useContext } from "react";

import { Typography } from "@usy-ui/base";

import { CvContentContext } from "@/context/cv-context";

import { CvSection } from "../../cv-section";

export const SummarySection = () => {
  const {
    cvContent: { personalInfo },
  } = useContext(CvContentContext);

  return (
    <>
      <CvSection title="Summary">
        <Typography size="small">{personalInfo.summary}</Typography>
      </CvSection>
    </>
  );
};
