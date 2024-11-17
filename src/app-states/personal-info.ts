"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  isCvContentCached,
} from "@/utils/local-storage";

export const personalInfoAtom = atom({
  key: "personalInfoAtom",
  default: isCvContentCached()
    ? getCvContentFromStorage().personalInfo
    : mockCvContent.personalInfo,
});

export const personalInfoSelector = selector({
  key: "personalInfoSelector",
  get: ({ get }) => get(personalInfoAtom),
});
