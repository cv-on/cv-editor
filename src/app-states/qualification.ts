import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  getIsCvContentCached,
} from "@/utils/local-storage";

const isCvContentCached = getIsCvContentCached();
const cvContentFromStorage = getCvContentFromStorage();

export const qualificationAtom = atom({
  key: "qualificationAtom",
  default:
    isCvContentCached && cvContentFromStorage.qualification
      ? cvContentFromStorage.qualification
      : mockCvContent.qualification,
});

export const qualificationSelector = selector({
  key: "qualificationSelector",
  get: ({ get }) => get(qualificationAtom),
});
