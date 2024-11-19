import { FC } from "react";

import { Button, Flex, Input, Modal, TextArea, usySpacing } from "@usy-ui/base";
import {
  Controller,
  UseFieldArrayAppend,
  UseFieldArrayUpdate,
  useForm,
} from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { EducationSectionType } from "@/types";

import { AchieveTypeWithIndex } from "..";

type AchievementItemModalProps = {
  selectedItem?: AchieveTypeWithIndex;
  append: UseFieldArrayAppend<EducationSectionType, "achievements">;
  update: UseFieldArrayUpdate<EducationSectionType, "achievements">;
  syncEducationState: () => void;
  onClose: () => void;
};

export const AchievementItemModal: FC<AchievementItemModalProps> = ({
  selectedItem,
  append,
  update,
  syncEducationState,
  onClose,
}) => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<AchieveTypeWithIndex>({
    defaultValues: selectedItem,
  });

  const isUpdateMode = Boolean(selectedItem);

  const onSubmit = (formValues: AchieveTypeWithIndex) => {
    const data = {
      content: formValues.content,
    };

    if (isUpdateMode && typeof selectedItem?.index === "number") {
      update(selectedItem.index, data);
    } else {
      append(data);
    }

    syncEducationState();
    onClose();
  };

  return (
    <Modal
      title={isUpdateMode ? "Update Achievement" : "Create Achievement"}
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
          <Button type="submit" variant="primary">
            {isUpdateMode ? "Update" : "Create"}
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};
