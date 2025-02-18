import { useRecoilValue } from "recoil";

import { technicalSelector } from "@/app-states/technical";
import { GrayBoard } from "@/components/gray-board";

import { TechSkill } from "./tech-skill";

export const TechnicalSection = () => {
  const technical = useRecoilValue(technicalSelector);

  return (
    <GrayBoard title="Technical">
      {technical.skills.map(({ skillType, techStacks }, index) => (
        <TechSkill
          key={skillType}
          index={index}
          skillType={skillType}
          techStacks={techStacks}
        />
      ))}
    </GrayBoard>
  );
};
