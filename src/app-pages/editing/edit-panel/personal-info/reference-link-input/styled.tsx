import { TrashBinIcon, usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const TrashBinIconStyled = styled(TrashBinIcon)`
  min-width: ${usySpacing.px20};
  margin-bottom: ${usySpacing.px10};
  color: ${usyColor.dark5};
  cursor: pointer;
`;

export const BrandIconButton = styled.button`
  width: ${usySpacing.px48};
  height: ${usySpacing.px40};
  background-color: transparent;
  border: 1px dashed ${usyColor.light7};
  border-radius: ${usySpacing.px4};
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    color: ${usyColor.dark5};
  }
`;
