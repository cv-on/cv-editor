import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  getIsCvContentCached,
} from "@/utils/local-storage";

const isCvContentCached = getIsCvContentCached();
const cvContentFromStorage = getCvContentFromStorage();

export const educationAtom = atom({
  key: "educationAtom",
  default:
    isCvContentCached && cvContentFromStorage.education
      ? cvContentFromStorage.education
      : mockCvContent.education,
});

export const educationSelector = selector({
  key: "educationSelector",
  get: ({ get }) => get(educationAtom),
});
