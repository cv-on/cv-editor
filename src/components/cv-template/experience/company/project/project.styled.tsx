import { usyColor, usyFontSize, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const BadgeProjectName = styled.span`
  font-size: ${usyFontSize.small};
  background-color: ${usyColor.blue7};
  color: ${usyColor.white};
  padding: ${usySpacing.px6} ${usySpacing.px8};
  border-radius: ${usySpacing.px4};
  margin-right: ${usySpacing.px4};
`;
