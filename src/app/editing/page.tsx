import { EditPanel } from "@/app-pages/editing/edit-panel";

import {
  CvTemplateStyled,
  EditingPageContainerStyled,
  EditPanelContainerStyled,
  PreviewContainerStyled,
} from "./styled";

const EditingPage = () => {
  return (
    <EditingPageContainerStyled>
      <PreviewContainerStyled>
        <CvTemplateStyled />
      </PreviewContainerStyled>
      <EditPanelContainerStyled>
        <EditPanel />
      </EditPanelContainerStyled>
    </EditingPageContainerStyled>
  );
};

export default EditingPage;
