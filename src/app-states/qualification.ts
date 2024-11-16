"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";

export const qualificationAtom = atom({
  key: "qualificationAtom",
  default: mockCvContent.qualification,
});

export const qualificationSelector = selector({
  key: "qualificationSelector",
  get: ({ get }) => get(qualificationAtom),
});
