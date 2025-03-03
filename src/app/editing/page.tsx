"use client";
import { useState } from "react";

import { EditIcon, Toast } from "@usy-ui/base";

import {
  CvTemplateStyled,
  StyledEditPanelContainer,
  StyledEditPanelTrigger,
  StyledHomePage,
  StyledModal,
  StyledPreviewCvContainer,
} from "./styled";

import { EditPanel } from "@/app-pages/editing/edit-panel";
import { useViewport } from "@/hooks/use-viewport";

const breakpoint = 1500;

const HomePage = () => {
  const [isEditPanelModalOpen, setIsEditPanelModalOpen] = useState(false);
  const { width } = useViewport();

  const openModal = () => setIsEditPanelModalOpen(true);
  const closeModal = () => setIsEditPanelModalOpen(false);

  /**
   * Render
   */

  const renderEditPanelContainer = () => {
    if (width < breakpoint) {
      return (
        <StyledEditPanelTrigger size="large" onClick={openModal}>
          <EditIcon />
        </StyledEditPanelTrigger>
      );
    }

    return (
      <StyledEditPanelContainer>
        <EditPanel displayMode="right-side" />
      </StyledEditPanelContainer>
    );
  };

  const renderEditPanelModal = () => {
    if (!isEditPanelModalOpen || width > breakpoint) {
      return null;
    }

    return (
      <StyledModal
        onClose={closeModal}
        preventOutsideClose
        widthProps={{ maxWidth: "600px" }}
      >
        <EditPanel displayMode="modal" />
      </StyledModal>
    );
  };

  return (
    <>
      <Toast />
      <StyledHomePage>
        <StyledPreviewCvContainer>
          <CvTemplateStyled />
        </StyledPreviewCvContainer>
        {renderEditPanelContainer()}
      </StyledHomePage>
      {renderEditPanelModal()}
    </>
  );
};

export default HomePage;
