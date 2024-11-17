"use client";
import { useEffect } from "react";

import {
  RecoilState,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { personalInfoSelector } from "@/app-states";
import { educationSelector } from "@/app-states/education";
import { experienceSelector } from "@/app-states/experience";
import { qualificationSelector } from "@/app-states/qualification";
import { sideProjectsSelector } from "@/app-states/side-projects";
import { technicalSelector } from "@/app-states/technical";
import { CvTemplateType } from "@/types";
import { setCvContentToStorage } from "@/utils/local-storage";

type UseObserveStateProps<T = unknown> = {
  atom: RecoilState<T>;
  sectionType: keyof CvTemplateType;
};

export const useObserveState = <T>({
  atom,
  sectionType,
}: UseObserveStateProps<T>): [T, SetterOrUpdater<T>] => {
  const [state, setState] = useRecoilState(atom);

  const personalInfoState = useRecoilValue(personalInfoSelector);
  const qualificationState = useRecoilValue(qualificationSelector);
  const technicalState = useRecoilValue(technicalSelector);
  const experienceState = useRecoilValue(experienceSelector);
  const sideProjectsState = useRecoilValue(sideProjectsSelector);
  const educationState = useRecoilValue(educationSelector);

  useEffect(() => {
    setCvContentToStorage({
      personalInfo: personalInfoState,
      qualification: qualificationState,
      technical: technicalState,
      experience: experienceState,
      sideProjects: sideProjectsState,
      education: educationState,
      [sectionType]: state,
    });
  }, [
    personalInfoState,
    qualificationState,
    technicalState,
    experienceState,
    sideProjectsState,
    educationState,
    sectionType,
    state,
  ]);

  return [state, setState];
};
