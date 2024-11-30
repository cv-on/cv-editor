import { usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const FileTypeWrapperStyled = styled.div`
  width: 80px;
  height: 80px;
  border: 1px dashed ${usyColor.light5};
  border-radius: ${usySpacing.px8};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
