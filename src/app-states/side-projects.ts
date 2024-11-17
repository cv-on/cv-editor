import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  getIsCvContentCached,
} from "@/utils/local-storage";

const isCvContentCached = getIsCvContentCached();
const cvContentFromStorage = getCvContentFromStorage();

export const sideProjectsAtom = atom({
  key: "sideProjectsAtom",
  default:
    isCvContentCached && cvContentFromStorage.sideProjects
      ? cvContentFromStorage.sideProjects
      : mockCvContent.sideProjects,
});

export const sideProjectsSelector = selector({
  key: "sideProjectsSelector",
  get: ({ get }) => get(sideProjectsAtom),
});
