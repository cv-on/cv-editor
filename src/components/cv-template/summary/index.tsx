"use client";
import { Typography } from "@usy-ui/base";
import { useRecoilValue } from "recoil";

import { personalInfoSelector } from "@/app-states";

import { CvSection } from "../../cv-section";

export const SummarySection = () => {
  const personalInfo = useRecoilValue(personalInfoSelector);

  return (
    <>
      <CvSection title="Summary">
        <Typography size="small">{personalInfo.summary}</Typography>
      </CvSection>
    </>
  );
};
