import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  getIsCvContentCached,
} from "@/utils/local-storage";

const isCvContentCached = getIsCvContentCached();
const cvContentFromStorage = getCvContentFromStorage();

export const certificationsAtom = atom({
  key: "certificationsAtom",
  default:
    isCvContentCached && cvContentFromStorage.certifications
      ? cvContentFromStorage.certifications
      : mockCvContent.certifications,
});

export const certificationsSelector = selector({
  key: "certificationsSelector",
  get: ({ get }) => get(certificationsAtom),
});
