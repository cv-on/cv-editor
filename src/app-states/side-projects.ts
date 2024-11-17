"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  isCvContentCached,
} from "@/utils/local-storage";

export const sideProjectsAtom = atom({
  key: "sideProjectsAtom",
  default: isCvContentCached()
    ? getCvContentFromStorage().sideProjects
    : mockCvContent.sideProjects,
});

export const sideProjectsSelector = selector({
  key: "sideProjectsSelector",
  get: ({ get }) => get(sideProjectsAtom),
});
