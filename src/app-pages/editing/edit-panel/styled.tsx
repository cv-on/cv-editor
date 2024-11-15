import styled from "styled-components";

export const EditPanelContainerStyled = styled.div<{
  $isDisplayOverview?: boolean;
}>`
  min-width: 200%;
  max-width: 200%;
  display: flex;
  justify-content: space-between;
  transition: 0.2s ease-in-out;
  transform: ${({ $isDisplayOverview }) =>
    $isDisplayOverview ? "translateX(0)" : "translateX(-50%)"};
`;
