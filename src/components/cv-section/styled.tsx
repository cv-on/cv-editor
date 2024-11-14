"use client";
import { Typography, usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

export const SectionStyled = styled.div`
  margin-bottom: ${usySpacing.px32};
`;

export const TitleTypography = styled(Typography)`
  display: inline-block;
  color: ${usyColor.dark5};
  letter-spacing: 1px;
  margin-bottom: ${usySpacing.px16};
  position: relative;
  text-transform: uppercase;
  font-family: Lora;

  &::before {
    content: "";
    width: 80%;
    height: 1px;
    background-color: ${usyColor.dark5};
    position: absolute;
    left: 0;
    bottom: -${usySpacing.px2};
  }
`;
