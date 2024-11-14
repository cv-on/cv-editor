"use client";
import { usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

const a4Ratio = 1.414357682619647;

export const CvPageStyled = styled.div<{ $isRenderMode?: boolean }>`
  width: 900px;
  height: 100%;
  min-height: calc(900px * ${a4Ratio});
  background-color: ${usyColor.white};
  padding: ${({ $isRenderMode }) => ($isRenderMode ? 0 : usySpacing.px40)};
`;

export const MainColumnStyled = styled.div`
  flex-grow: 1;
  padding-right: ${usySpacing.px20};
  border-right: 1px solid ${usyColor.light1};
`;

export const SubColumnStyled = styled.div`
  min-width: 33.33%;
  max-width: 33.33%;
  padding-left: ${usySpacing.px20};
`;
