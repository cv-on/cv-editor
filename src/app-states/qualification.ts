"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  isCvContentCached,
} from "@/utils/local-storage";

export const qualificationAtom = atom({
  key: "qualificationAtom",
  default: isCvContentCached()
    ? getCvContentFromStorage().qualification
    : mockCvContent.qualification,
});

export const qualificationSelector = selector({
  key: "qualificationSelector",
  get: ({ get }) => get(qualificationAtom),
});
