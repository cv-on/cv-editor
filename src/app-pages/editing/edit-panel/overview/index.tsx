import { FC, useMemo, useState } from "react";

import {
  Box,
  Button,
  ConfirmContent,
  Flex,
  Popover,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import { resetCvContentOnStorage } from "@/utils/local-storage";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

import { ExportModal } from "./export-modal";
import { ImportModal } from "./import-modal";
import { EditSectionStyled } from "./styled";

type SectionThumbType = {
  id: DisplaySectionUnion;
  name: string;
};

type OverviewSectionsProps = {
  changeSection: (section: DisplaySectionUnion) => void;
};

export const OverviewSections: FC<OverviewSectionsProps> = ({
  changeSection,
}) => {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);

  const sectionThumbsMemo = useMemo<SectionThumbType[]>(
    () => [
      { id: "personal-info", name: "Personal" },
      { id: "qualification", name: "Qualification" },
      { id: "technical", name: "Technical" },
      { id: "experience", name: "Experience" },
      { id: "side-projects", name: "Side Projects" },
      { id: "certifications", name: "Certifications" },
    ],
    []
  );

  const openExportModal = () => setIsExportModalOpen(true);
  const closeExportModal = () => setIsExportModalOpen(false);

  const openImportModal = () => setIsImportModalOpen(true);
  const closeImportModal = () => setIsImportModalOpen(false);

  /**
   * Render
   */

  const renderSectionThumbs = () => {
    return (
      <Box>
        <SectionHeader sectionTitle="Editing Sections" />
        <Flex
          justifyContent="space-around"
          alignItems="flex-start"
          gap={usySpacing.px32}
          wrap="wrap"
          marginProps={{ marginTop: usySpacing.px20 }}
        >
          {sectionThumbsMemo.map(({ id, name }) => (
            <EditSectionStyled key={id} onClick={() => changeSection(id)}>
              <Typography align="center" weight="semibold">
                {name}
              </Typography>
            </EditSectionStyled>
          ))}
        </Flex>
      </Box>
    );
  };

  const renderActions = () => {
    return (
      <Flex justifyContent="center" gap={usySpacing.px20}>
        <>
          {isExportModalOpen && <ExportModal onClose={closeExportModal} />}
          <Button variant="primary" onClick={openExportModal}>
            Export
          </Button>
        </>
        <>
          {isImportModalOpen && <ImportModal onClose={closeImportModal} />}
          <Button variant="primary" onClick={openImportModal}>
            Import
          </Button>
        </>
        <Popover
          position="top"
          color="dark-8"
          content={
            <ConfirmContent
              description="Remember to backup your changes by export Json file before reset!"
              onConfirm={() => {
                resetCvContentOnStorage();
                window.location.reload();
              }}
            />
          }
        >
          <Button variant="outline">Reset</Button>
        </Popover>
      </Flex>
    );
  };

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      widthProps={{ maxWidth: "50%" }}
      paddingProps={{ ...SectionPaddingConst }}
    >
      {renderSectionThumbs()}
      {renderActions()}
    </Flex>
  );
};
