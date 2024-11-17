import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  getIsCvContentCached,
} from "@/utils/local-storage";

const isCvContentCached = getIsCvContentCached();
const cvContentFromStorage = getCvContentFromStorage();

export const technicalAtom = atom({
  key: "technicalAtom",
  default:
    isCvContentCached && cvContentFromStorage.technical
      ? cvContentFromStorage.technical
      : mockCvContent.technical,
});

export const technicalSelector = selector({
  key: "technicalSelector",
  get: ({ get }) => get(technicalAtom),
});
