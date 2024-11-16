"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";

export const technicalAtom = atom({
  key: "technicalAtom",
  default: mockCvContent.technical,
});

export const technicalSelector = selector({
  key: "technicalSelector",
  get: ({ get }) => get(technicalAtom),
});
