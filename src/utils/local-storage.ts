import { mockCvContent } from "@/mock/cv-content";
import { CvTemplateType } from "@/types";

export const isClient = typeof window !== "undefined";

export const isCvContentCached = (): boolean => {
  if (isClient) {
    return Boolean(localStorage.getItem("cv-content"));
  }

  return false;
};

export const setCvContentToStorage = (cvContent: CvTemplateType) => {
  if (isClient) {
    localStorage.setItem("cv-content", JSON.stringify(cvContent));
  }
};

export const getCvContentFromStorage = (): CvTemplateType => {
  if (isClient) {
    const pureData = localStorage.getItem("cv-content");
    return pureData ? JSON.parse(pureData) : null;
  }

  return mockCvContent;
};
