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
      { id: "personal-info", name: "Personal Info" },
      { id: "qualification", name: "Qualification" },
      { id: "technical", name: "Technical" },
      { id: "experience", name: "Experience" },
      { id: "side-projects", name: "Side Projects" },
      { id: "education", name: "Education" },
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
          justifyContent="space-between"
          alignItems="flex-start"
          gap={usySpacing.px32}
          wrap="wrap"
          marginProps={{ marginTop: usySpacing.px20 }}
        >
          {sectionThumbsMemo.map(({ id, name }) => (
            <EditSectionStyled key={id} onClick={() => changeSection(id)}>
              <Typography align="center" weight="bold">
                {name}
              </Typography>
            </EditSectionStyled>
          ))}
        </Flex>
      </Box>
    );
  };

  const renderCta = () => {
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
      heightProps={{ minHeight: "100vh" }}
      paddingProps={{ ...SectionPaddingConst }}
    >
      {renderSectionThumbs()}
      {renderCta()}
    </Flex>
  );
};
