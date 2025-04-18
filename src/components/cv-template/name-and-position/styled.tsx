import { Typography, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const NameAndPositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${usySpacing.px40};
  margin-bottom: 70px;
`;

export const NameTypography = styled(Typography)`
  letter-spacing: ${usySpacing.px2};

  * {
    text-transform: uppercase;
    letter-spacing: inherit;
  }
`;
