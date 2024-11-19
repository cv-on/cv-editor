import { FC } from "react";

import { Button, Flex, Input, Modal, TextArea, usySpacing } from "@usy-ui/base";
import {
  Controller,
  UseFieldArrayAppend,
  UseFieldArrayUpdate,
  useForm,
} from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { QualificationSectionType } from "@/types";

import { QualifyTypeWithIndex } from "..";

type QualifyItemModalProps = {
  selectedItem?: QualifyTypeWithIndex;
  append: UseFieldArrayAppend<QualificationSectionType, "qualifyItems">;
  update: UseFieldArrayUpdate<QualificationSectionType, "qualifyItems">;
  syncQualificationState: () => void;
  onClose: () => void;
};

export const QualifyItemModal: FC<QualifyItemModalProps> = ({
  selectedItem,
  append,
  update,
  syncQualificationState,
  onClose,
}) => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<QualifyTypeWithIndex>({
    defaultValues: selectedItem,
  });

  const isUpdateMode = Boolean(selectedItem);

  const onSubmit = (formValues: QualifyTypeWithIndex) => {
    const data = {
      keyPoint: formValues.keyPoint,
      description: formValues.description,
    };

    if (isUpdateMode && typeof selectedItem?.index === "number") {
      update(selectedItem.index, data);
    } else {
      append(data);
    }

    syncQualificationState();
    onClose();
  };

  return (
    <Modal
      title={isUpdateMode ? "Update Qualification" : "Create Qualification"}
      onClose={onClose}
      preventOutsideClose
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction="column"
          gap={usySpacing.px24}
          paddingProps={{ paddingTop: usySpacing.px16 }}
        >
          <Controller
            name="keyPoint"
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field }) => (
              <Input
                {...field}
                label="Key point"
                placeholder="Highlight words on your ability"
                description={errors.keyPoint?.message}
                hasError={Boolean(errors.keyPoint?.message)}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field }) => (
              <TextArea
                {...field}
                label="Description"
                placeholder="Description about your skills"
                description={errors.description?.message}
                hasError={Boolean(errors.description?.message)}
                heightProps={{ minHeight: "150px" }}
              />
            )}
          />
          <Button type="submit" variant="primary">
            {isUpdateMode ? "Update" : "Create"}
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};
