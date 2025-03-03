"use client";
import { Button, Modal, Scrollable, usyColor, usySpacing } from "@usy-ui/base";
import styled from "styled-components";

import { CvTemplate } from "@/components/cv-template";

export const StyledHomePage = styled.div`
  min-width: 1000px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const StyledPreviewCvContainer = styled(Scrollable)`
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

export const StyledEditPanelContainer = styled.div`
  min-width: 500px;
  max-width: 500px;
  min-height: 100vh;
  overflow: hidden;
`;

export const StyledEditPanelTrigger = styled(Button)`
  position: fixed;
  top: 30vh;
  right: -${usySpacing.px4};
  border-top-left-radius: ${usySpacing.px8};
  border-bottom-left-radius: ${usySpacing.px8};
`;

export const StyledModal = styled(Modal)`
  overflow: hidden;
  padding-top: ${usySpacing.px32};
  padding-left: 0;
  padding-right: 0;
`;
