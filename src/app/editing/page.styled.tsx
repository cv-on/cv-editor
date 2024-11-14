"use client";
import { Scrollable, usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

import { CvTemplate } from "../../components/cv-template";

export const PreviewContainerStyled = styled(Scrollable)`
  max-height: 100vh;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.05);
  padding: ${usySpacing.px32};
`;

export const CvTemplateStyled = styled(CvTemplate)`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${usyColor.light1};
  border-radius: 2px;
`;

export const EditSectionContainerStyled = styled.div`
  min-width: 500px;
  max-width: 500px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${usySpacing.px32};
`;
