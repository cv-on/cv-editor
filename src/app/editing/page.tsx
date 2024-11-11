import { useMemo } from "react";

import { Box, Button, Flex, Typography, usySpacing } from "@usy-ui/base";

import {
  CvTemplateStyled,
  EditSectionContainerStyled,
  EditSectionStyled,
  PreviewContainerStyled,
} from "./styled";
import Link from "next/link";

const EditingPage = () => {
  const sections = useMemo(
    () => [
      { id: "personal-information", name: "Personal Information" },
      { id: "core-qualification", name: "Core Qualification" },
      { id: "technical-skills", name: "Technical Skills" },
      { id: "experience", name: "Experience" },
      { id: "side-projects", name: "Side Projects" },
      { id: "education", name: "Education" },
    ],
    []
  );

  return (
    <Flex justifyContent="center" alignItems="flex-start">
      <PreviewContainerStyled>
        <CvTemplateStyled />
      </PreviewContainerStyled>
      <EditSectionContainerStyled>
        <Box>
          <Typography size="large">Editing Sections</Typography>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            gap={usySpacing.px32}
            wrap="wrap"
            marginProps={{ marginTop: usySpacing.px20 }}
          >
            {sections.map(({ id, name }) => (
              <EditSectionStyled key={id}>
                <Typography align="center" weight="bold">
                  {name}
                </Typography>
              </EditSectionStyled>
            ))}
          </Flex>
        </Box>
        <Flex justifyContent="center" gap={usySpacing.px20}>
          <Button variant="primary">Download</Button>
          <Link href="/preview">
            <Button variant="outline">Preview</Button>
          </Link>
        </Flex>
      </EditSectionContainerStyled>
    </Flex>
  );
};

export default EditingPage;
