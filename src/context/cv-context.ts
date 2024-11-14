import { createContext } from "react";

import { mockCvContent } from "@/mock/cv-content";
import { CvTemplateType } from "@/types";

type CvContentContextProps = {
  cvContent: CvTemplateType;
  setCvContent?: (cvContent: CvTemplateType) => void;
};

export const CvContentContext = createContext<CvContentContextProps>({
  cvContent: mockCvContent,
});
