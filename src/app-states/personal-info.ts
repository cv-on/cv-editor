import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  getIsCvContentCached,
} from "@/utils/local-storage";

const isCvContentCached = getIsCvContentCached();
const cvContentFromStorage = getCvContentFromStorage();

export const personalInfoAtom = atom({
  key: "personalInfoAtom",
  default:
    isCvContentCached && cvContentFromStorage.personalInfo
      ? cvContentFromStorage.personalInfo
      : mockCvContent.personalInfo,
});

export const personalInfoSelector = selector({
  key: "personalInfoSelector",
  get: ({ get }) => get(personalInfoAtom),
});
