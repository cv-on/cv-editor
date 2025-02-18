import { useRecoilValue } from "recoil";

import { educationSelector } from "@/app-states/education";
import { GrayBoard } from "@/components/gray-board";

import { Achievement } from "./achievement";

export const EducationSection = () => {
  const education = useRecoilValue(educationSelector);

  return (
    <GrayBoard title="Education">
      {education.achievements.map(({ content }) => (
        <Achievement key={content.substring(0, 10)} content={content} />
      ))}
    </GrayBoard>
  );
};
