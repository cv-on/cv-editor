import { Typography } from "@usy-ui/base";

import { Section } from "../../section";
import { useContext } from "react";
import { CvContentContext } from "@/context/cv-context";

export const Summary = () => {
  const {
    cvContent: { personalInfo },
  } = useContext(CvContentContext);

  return (
    <>
      <Section title="Summary">
        <Typography size="small">{personalInfo.summary}</Typography>
      </Section>
    </>
  );
};
