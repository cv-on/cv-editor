import { usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const AboutMeBoard = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  padding: ${usySpacing.px14};
  margin-bottom: ${usySpacing.px32};
  position: relative;

  &::before,
  &::after {
    content: "❟❟";
    font-size: 40px;
    color: ${usyColor.blue7};
    position: absolute;
  }

  &::before {
    top: -${usySpacing.px32};
    left: -${usySpacing.px4};
  }

  &::after {
    bottom: -${usySpacing.px6};
    right: ${usySpacing.px2};
  }
`;
