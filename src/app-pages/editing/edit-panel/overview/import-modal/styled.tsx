import { usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const UploadZoneStyled = styled.div`
  width: 100%;
  height: 100px;
  border: 1px dashed ${usyColor.light5};
  border-radius: ${usySpacing.px8};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
