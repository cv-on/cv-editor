export type TechStack = {
  items: string[];
};

export type TechSkillType = {
  skillType: string;
  techStacks: TechStack[];
};

export type TechnicalSectionType = {
  skills: TechSkillType[];
};
