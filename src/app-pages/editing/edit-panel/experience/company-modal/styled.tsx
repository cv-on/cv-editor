import {
  mediaQueryMin,
  Scrollable,
  usyBreakpoint,
  usyColor,
  usySpacing,
} from "@usy-ui/base";
import styled from "styled-components";

export const StyledCompanyInfoAndProjectsScrollable = styled(Scrollable)`
  display: flex;
  flex-direction: column;
  gap: ${usySpacing.px4};

  ${mediaQueryMin(usyBreakpoint.laptop)} {
    flex-direction: row;
  }
`;

export const StyledSeparator = styled.div`
  width: 100%;
  margin: ${usySpacing.px40} 0 ${usySpacing.px32};
  border-top: 1px solid ${usyColor.light2};

  ${mediaQueryMin(usyBreakpoint.laptop)} {
    width: 0;
    height: unset;
    margin: 0 ${usySpacing.px20};
    border-left: 1px solid ${usyColor.light2};
  }
`;
