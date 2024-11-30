import { ChangeEvent, FC, useRef, useState } from "react";

import {
  Button,
  Flex,
  globalToast,
  Modal,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import { CvTemplateType } from "@/types";
import { setCvContentToStorage } from "@/utils/local-storage";

import { UploadZoneStyled } from "./styled";

type ImportModalProps = {
  onClose: () => void;
};

export const ImportModal: FC<ImportModalProps> = ({ onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      setSelectedFile(file);
    } else {
      globalToast.warning({
        title: "Incorrect format",
        content: "Please upload a valid Json file",
      });
    }
  };

  const restoreCV = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (!e.target?.result) {
          return;
        }

        try {
          setCvContentToStorage(
            JSON.parse(e.target.result as string) as CvTemplateType
          );
          window.location.reload();
        } catch (error) {
          console.log(error);
          globalToast.warning({
            title: "Parsing failed",
            content: "Your Json is invalid",
          });
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <Modal
      title="Restore CV"
      onClose={onClose}
      widthProps={{ minWidth: "400px" }}
    >
      <Flex
        direction="column"
        alignItems="center"
        gap={usySpacing.px24}
        marginProps={{ marginTop: usySpacing.px10 }}
      >
        <UploadZoneStyled onClick={() => inputRef.current?.click()}>
          <input
            ref={inputRef}
            type="file"
            accept="application/json"
            onChange={handleFileUpload}
            hidden
          />
          <Typography tag="em" size="small">
            {selectedFile ? selectedFile.name : "Select Json"}
          </Typography>
        </UploadZoneStyled>
        <Button variant="primary" disabled={!selectedFile} onClick={restoreCV}>
          Restore
        </Button>
      </Flex>
    </Modal>
  );
};
