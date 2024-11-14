import { Flex } from "@usy-ui/base";

import { EditingSection } from "./editing-section";
import {
  CvTemplateStyled,
  EditSectionContainerStyled,
  PreviewContainerStyled,
} from "./page.styled";

const EditingPage = () => {
  return (
    <Flex justifyContent="center" alignItems="flex-start">
      <PreviewContainerStyled>
        <CvTemplateStyled />
      </PreviewContainerStyled>
      <EditSectionContainerStyled>
        <EditingSection />
      </EditSectionContainerStyled>
    </Flex>
  );
};

export default EditingPage;
