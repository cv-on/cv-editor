import { usySpacing } from "@usy-ui/base";
import styled from "styled-components";

import { DisplayModeUnion } from ".";

export const EditPanelContainerStyled = styled.div<{
  $isOnOverview?: boolean;
  $displayMode: DisplayModeUnion;
}>`
  min-width: 200%;
  max-width: 200%;
  min-height: ${({ $displayMode }) =>
    $displayMode === "right-side" ? "100vh" : "80vh"};
  max-height: ${({ $displayMode }) =>
    $displayMode === "right-side" ? "100vh" : "80vh"};
  padding-top: ${({ $displayMode }) =>
    $displayMode === "right-side" ? usySpacing.px24 : 0};
  padding-bottom: ${({ $displayMode }) =>
    $displayMode === "right-side" ? usySpacing.px48 : 0};
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  overflow: hidden;
  transition: 0.2s ease-in-out;
  transform: ${({ $isOnOverview }) =>
    $isOnOverview ? "translateX(0)" : "translateX(-50%)"};
`;
