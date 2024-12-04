import { usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const DragDropStyled = styled.div`
  min-width: ${usySpacing.px32};
  max-width: ${usySpacing.px32};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${usySpacing.px32};
  cursor: grab;
`;
