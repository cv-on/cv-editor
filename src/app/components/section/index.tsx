import { FC, ReactNode } from "react";

import { SectionStyled, TitleTypography } from "./styled";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <SectionStyled>
      <TitleTypography tag="h2" size="large" weight="bold">
        {title}
      </TitleTypography>
      {children}
    </SectionStyled>
  );
};
