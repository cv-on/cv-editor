import { usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const EditSectionStyled = styled.div`
  width: 120px;
  height: 120px;
  padding: ${usySpacing.px10};
  border: 1px dashed ${usyColor.light7};
  border-radius: ${usySpacing.px2};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: -8px -8px 2px 0px rgba(0, 0, 0, 0.1);
    transform: translateX(4px) translateY(4px);
    transition: 0.1s ease-in-out;
  }
`;
