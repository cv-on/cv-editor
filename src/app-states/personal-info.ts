"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";

export const personalInfoAtom = atom({
  key: "personalInfoAtom",
  default: mockCvContent.personalInfo,
});

export const personalInfoSelector = selector({
  key: "personalInfoSelector",
  get: ({ get }) => get(personalInfoAtom),
});
