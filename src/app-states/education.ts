"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  isCvContentCached,
} from "@/utils/local-storage";

export const educationAtom = atom({
  key: "educationAtom",
  default: isCvContentCached()
    ? getCvContentFromStorage().education
    : mockCvContent.education,
});

export const educationSelector = selector({
  key: "educationSelector",
  get: ({ get }) => get(educationAtom),
});
