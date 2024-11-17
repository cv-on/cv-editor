import { atom, selector } from "recoil";

import { mockCvContent } from "@/mock/cv-content";
import {
  getCvContentFromStorage,
  getIsCvContentCached,
} from "@/utils/local-storage";

const isCvContentCached = getIsCvContentCached();
const cvContentFromStorage = getCvContentFromStorage();

export const experienceAtom = atom({
  key: "experienceAtom",
  default:
    isCvContentCached && cvContentFromStorage.experience
      ? cvContentFromStorage.experience
      : mockCvContent.experience,
});

export const experienceSelector = selector({
  key: "experienceSelector",
  get: ({ get }) => get(experienceAtom),
});
