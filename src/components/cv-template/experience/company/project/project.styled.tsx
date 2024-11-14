import { usyColor, usyFontSize, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const BadgeProjectName = styled.span`
  font-size: ${usyFontSize.medium};
  background-color: ${usyColor.primary};
  color: ${usyColor.white};
  padding: 1px ${usySpacing.px8};
  border-radius: ${usySpacing.px16};
`;
