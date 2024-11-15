import { usyColor, usyFontSize, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const BadgeProjectName = styled.span`
  font-size: ${usyFontSize.small};
  background-color: ${usyColor.primary};
  color: ${usyColor.white};
  padding: ${usySpacing.px4} ${usySpacing.px8};
  border-radius: ${usySpacing.px16};
  margin-right: ${usySpacing.px4};
`;
