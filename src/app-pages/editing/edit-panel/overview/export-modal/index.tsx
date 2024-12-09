import { FC, useState } from "react";

import {
  Flex,
  LoadingCircleIcon,
  Modal,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import Image from "next/image";

import { getCvContentFromStorage } from "@/utils/local-storage";

import { FileTypeWrapperStyled } from "./styled";

type ExportModalProps = {
  onClose: () => void;
};

export const ExportModal: FC<ExportModalProps> = ({ onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

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
      link.setAttribute("download", "pdf-generated.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      setIsDownloading(false);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const downloadJson = () => {
    const jsonData = JSON.stringify(getCvContentFromStorage());
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "cv-generated.json";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Modal
      title="Download File"
      onClose={onClose}
      widthProps={{ minWidth: "400px", maxWidth: "400px" }}
      preventOutsideClose
    >
      <Flex
        justifyContent="space-around"
        paddingProps={{
          paddingTop: usySpacing.px20,
          paddingBottom: usySpacing.px24,
        }}
      >
        <FileTypeWrapperStyled onClick={handleDownloadPDF}>
          {isDownloading ? (
            <Flex direction="column" alignItems="center">
              <LoadingCircleIcon />
              <Typography size="small">pdf</Typography>
            </Flex>
          ) : (
            <Image src="/icons/pdf-file.svg" width={60} height={60} alt="pdf" />
          )}
        </FileTypeWrapperStyled>
        <FileTypeWrapperStyled onClick={downloadJson}>
          <Image src="/icons/json-file.svg" width={60} height={60} alt="png" />
        </FileTypeWrapperStyled>
      </Flex>
    </Modal>
  );
};
