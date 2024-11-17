"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  isCvContentCached,
} from "@/utils/local-storage";

export const experienceAtom = atom({
  key: "experienceAtom",
  default: isCvContentCached()
    ? getCvContentFromStorage().experience
    : mockCvContent.experience,
});

export const experienceSelector = selector({
  key: "experienceSelector",
  get: ({ get }) => get(experienceAtom),
});
