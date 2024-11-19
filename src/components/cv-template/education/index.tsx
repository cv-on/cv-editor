import { useRecoilValue } from "recoil";

import { educationSelector } from "@/app-states/education";

import { CvSection } from "../../cv-section";

import { Achievement } from "./achievement";

export const EducationSection = () => {
  const education = useRecoilValue(educationSelector);

  return (
    <>
      <CvSection title="Education">
        {education.achievements.map(({ content }) => (
          <Achievement key={content.substring(0, 10)} content={content} />
        ))}
      </CvSection>
    </>
  );
};
