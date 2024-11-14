import { FC, ReactNode } from "react";

import { SectionStyled, TitleTypography } from "./styled";

type CvSectionProps = {
  title: string;
  children: ReactNode;
};

export const CvSection: FC<CvSectionProps> = ({ title, children }) => {
  return (
    <SectionStyled>
      <TitleTypography tag="h2" size="large" weight="bold">
        {title}
      </TitleTypography>
      {children}
    </SectionStyled>
  );
};
