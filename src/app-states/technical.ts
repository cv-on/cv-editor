"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  isCvContentCached,
} from "@/utils/local-storage";

export const technicalAtom = atom({
  key: "technicalAtom",
  default: isCvContentCached()
    ? getCvContentFromStorage().technical
    : mockCvContent.technical,
});

export const technicalSelector = selector({
  key: "technicalSelector",
  get: ({ get }) => get(technicalAtom),
});
