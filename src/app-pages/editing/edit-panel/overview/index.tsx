import { FC, useMemo, useState } from "react";

import { Badge, Box, Button, Flex, Typography, usySpacing } from "@usy-ui/base";
import Link from "next/link";

import {
  getCvContentFromStorage,
  resetCvContentOnStorage,
} from "@/utils/local-storage";

import { SectionHeader } from "../_header";
import { SectionPaddingConst } from "../constants";
import { DisplaySectionUnion } from "../types";

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
  const [isDownloading, setIsDownloading] = useState(false);
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

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);
      const cvContent = getCvContentFromStorage();
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cvContent),
      });

      if (!response.ok) throw new Error("PDF generation failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");

      link.href = url;
      link.setAttribute("download", "generated.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      setIsDownloading(false);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  /**
   * Render
   */

  const renderNote = () => {
    return (
      <Flex alignItems="flex-start" gap={usySpacing.px4}>
        <Badge variant="filled" color="amber" radius="full">
          Note
        </Badge>
        <Typography tag="em" size="small">
          This tool is still in development, and some functions are not yet
          available.
        </Typography>
      </Flex>
    );
  };

  const renderSectionThumbs = () => {
    return (
      <Box>
        <SectionHeader sectionTitle="Editing Sections" />
        {renderNote()}
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
        <Button
          variant="primary"
          loading={isDownloading}
          onClick={handleDownloadPDF}
        >
          Export CV
        </Button>
        <Link href="/preview" target="_blank">
          <Button variant="outline">Preview</Button>
        </Link>
        <Button
          variant="outline"
          onClick={() => {
            resetCvContentOnStorage();
          }}
        >
          Reset
        </Button>
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
