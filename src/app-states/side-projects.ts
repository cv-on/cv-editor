"use client";
import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";

export const sideProjectsAtom = atom({
  key: "sideProjectsAtom",
  default: mockCvContent.sideProjects,
});

export const sideProjectsSelector = selector({
  key: "sideProjectsSelector",
  get: ({ get }) => get(sideProjectsAtom),
});
