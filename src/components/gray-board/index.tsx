import { FC, ReactNode } from "react";

import { GrayBoardStyled, TitleTypography } from "./styled";

type GrayBoardProps = {
  title?: string;
  children: ReactNode;
};

export const GrayBoard: FC<GrayBoardProps> = ({ title, children }) => {
  return (
    <GrayBoardStyled>
      <TitleTypography size="medium" weight="bold">
        {title}
      </TitleTypography>
      {children}
    </GrayBoardStyled>
  );
};
