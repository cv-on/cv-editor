"use client";
import { usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

const a4Ratio = 1.414357682619647;

export const CvPageStyled = styled.div`
  width: 900px;
  min-height: calc(900px * ${a4Ratio});
  background-color: ${usyColor.white};
  padding: ${usySpacing.px40};
`;

export const MainColumnStyled = styled.div`
  flex-grow: 1;
  padding-right: ${usySpacing.px20};
`;

export const SubColumnStyled = styled.div`
  min-width: 33.33%;
  max-width: 33.33%;
  padding-left: ${usySpacing.px20};
`;

export const NameTypography = styled.h2`
  margin-top: 0;
  margin-bottom: ${usySpacing.px6};
  font-family: "Lora";
`;
