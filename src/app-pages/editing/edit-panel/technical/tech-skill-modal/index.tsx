import { FC } from "react";

import { Button, Flex, Input, Modal, Tags, usySpacing } from "@usy-ui/base";
import {
  Controller,
  UseFieldArrayAppend,
  UseFieldArrayUpdate,
  useForm,
} from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { TechnicalSectionType, TechSkillType } from "@/types";

import { TechSkillTypeWithIndex } from "..";

type TechSkillModalProps = {
  selectedItem?: TechSkillTypeWithIndex;
  append: UseFieldArrayAppend<TechnicalSectionType, "skills">;
  update: UseFieldArrayUpdate<TechnicalSectionType, "skills">;
  syncTechnicalState: () => void;
  onClose: () => void;
};

export const TechSkillModal: FC<TechSkillModalProps> = ({
  selectedItem,
  append,
  update,
  syncTechnicalState,
  onClose,
}) => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<TechSkillTypeWithIndex>({
    defaultValues: selectedItem,
  });

  const isUpdateMode = Boolean(selectedItem);

  const onSubmit = (formValues: TechSkillTypeWithIndex) => {
    const data: TechSkillType = {
      skillType: formValues.skillType,
      techStacks: formValues.techStacks,
    };

    if (isUpdateMode && typeof selectedItem?.index === "number") {
      update(selectedItem.index, data);
    } else {
      append(data);
    }

    syncTechnicalState();
    onClose();
  };

  /**
   * Render
   */

  return (
    <Modal
      title={isUpdateMode ? "Update Skill" : "Create Skill"}
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
            name="skillType"
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field }) => (
              <Input
                {...field}
                label="Skill Type"
                placeholder=""
                description={errors.skillType?.message}
                hasError={Boolean(errors.skillType?.message)}
              />
            )}
          />
          <Controller
            name="techStacks"
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field }) => (
              <Tags
                label="Tech Stacks"
                tags={field.value}
                onAdd={(tags) => field.onChange(tags)}
                onRemove={(tags) => field.onChange(tags)}
                description={errors.techStacks?.message}
                hasError={Boolean(errors.techStacks?.message)}
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
