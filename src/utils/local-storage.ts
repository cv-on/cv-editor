import { AppContentStorageKey } from "@/constants/app";
import { mockCvContent } from "@/mock/cv-content";
import { CvTemplateType } from "@/types";

export const isClient = typeof window !== "undefined";

export const getIsCvContentCached = (): boolean => {
  if (isClient) {
    return Boolean(localStorage.getItem(AppContentStorageKey));
  }

  return false;
};

export const setCvContentToStorage = (cvContent: CvTemplateType) => {
  if (isClient) {
    localStorage.setItem(AppContentStorageKey, JSON.stringify(cvContent));
  }
};

export const getCvContentFromStorage = (): CvTemplateType => {
  if (isClient) {
    const pureData = localStorage.getItem(AppContentStorageKey);
    return pureData ? JSON.parse(pureData) : mockCvContent;
  }

  return mockCvContent;
};

export const resetCvContentOnStorage = () => {
  if (isClient) {
    localStorage.setItem(AppContentStorageKey, JSON.stringify(mockCvContent));
  }
};
