"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";

export const educationAtom = atom({
  key: "educationAtom",
  default: mockCvContent.education,
});

export const educationSelector = selector({
  key: "educationSelector",
  get: ({ get }) => get(educationAtom),
});
