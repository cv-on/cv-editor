"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";

export const experienceAtom = atom({
  key: "experienceAtom",
  default: mockCvContent.experience,
});

export const experienceSelector = selector({
  key: "experienceSelector",
  get: ({ get }) => get(experienceAtom),
});
