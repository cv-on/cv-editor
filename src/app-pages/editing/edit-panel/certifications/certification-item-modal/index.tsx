import { FC } from "react";

import { Button, Flex, Modal, TextArea, usySpacing } from "@usy-ui/base";
import {
  Controller,
  UseFieldArrayAppend,
  UseFieldArrayUpdate,
  useForm,
} from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { CertificationsSectionType } from "@/types";

import { CertificationItemWithIndexType } from "..";

type CertificationItemModalProps = {
  selectedItem?: CertificationItemWithIndexType;
  append: UseFieldArrayAppend<CertificationsSectionType, "certificationItems">;
  update: UseFieldArrayUpdate<CertificationsSectionType, "certificationItems">;
  syncCertificationsState: () => void;
  onClose: () => void;
};

export const CertificationItemModal: FC<CertificationItemModalProps> = ({
  selectedItem,
  append,
  update,
  syncCertificationsState,
  onClose,
}) => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<CertificationItemWithIndexType>({
    defaultValues: selectedItem,
  });

  const isUpdateMode = Boolean(selectedItem);

  const onSubmit = (formValues: CertificationItemWithIndexType) => {
    const data = {
      content: formValues.content,
    };

    if (isUpdateMode && typeof selectedItem?.index === "number") {
      update(selectedItem.index, data);
    } else {
      append(data);
    }

    syncCertificationsState();
    onClose();
  };

  return (
    <Modal
      title={isUpdateMode ? "Update Certification" : "Create Certification"}
      onClose={onClose}
      widthProps={{ maxWidth: "550px", width: "100%" }}
      preventOutsideClose
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction="column"
          alignItems="center"
          gap={usySpacing.px24}
          paddingProps={{ paddingTop: usySpacing.px16 }}
        >
          <Controller
            name="content"
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field }) => (
              <TextArea
                {...field}
                label="Description"
                placeholder="Description about your skills"
                description={errors.content?.message}
                hasError={Boolean(errors.content?.message)}
                heightProps={{ minHeight: "150px" }}
              />
            )}
          />
          <Button
            type="submit"
            variant="primary"
            widthProps={{ minWidth: "200px" }}
          >
            {isUpdateMode ? "Update" : "Create"}
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};
