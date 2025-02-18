import { usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const SummaryBoard = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  padding: ${usySpacing.px14};
  margin-bottom: ${usySpacing.px32};
  position: relative;

  &::before,
  &::after {
    content: "”";
    font-size: 60px;
    color: ${usyColor.blue8};
    position: absolute;
  }

  &::before {
    top: -${usySpacing.px12};
    left: -${usySpacing.px4};
  }

  &::after {
    bottom: -${usySpacing.px48};
    right: -${usySpacing.px4};
  }
`;
