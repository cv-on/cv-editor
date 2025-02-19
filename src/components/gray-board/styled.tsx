import { Typography, usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const GrayBoardStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  padding: ${usySpacing.px14};
  margin-bottom: ${usySpacing.px32};
  border-radius: 2px;
`;

export const TitleTypography = styled(Typography)`
  display: inline-block;
  color: ${usyColor.dark5};
  letter-spacing: 1px;
  margin-bottom: ${usySpacing.px14};
  position: relative;
  text-transform: uppercase;
`;
