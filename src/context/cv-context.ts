import { mockCvContent } from "@/mock/cv-content";
import { CvTemplateType } from "@/types";
import { createContext } from "react";

type CvContentContextProps = {
  cvContent: CvTemplateType;
  setCvContent?: (cvContent: CvTemplateType) => void;
};

export const CvContentContext = createContext<CvContentContextProps>({
  cvContent: mockCvContent,
});
