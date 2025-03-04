import { mediaQueryMin, usyBreakpoint } from "@usy-ui/base";
import styled from "styled-components";

export const StyledFormContainer = styled.form`
  width: 100%;

  ${mediaQueryMin(usyBreakpoint.laptop)} {
    max-width: 400px;
  }
`;
