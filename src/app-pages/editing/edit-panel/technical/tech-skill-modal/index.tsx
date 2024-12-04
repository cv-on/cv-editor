import { FC } from "react";

import { Button, Flex, Input, Modal, usySpacing } from "@usy-ui/base";
import {
  Controller,
  useFieldArray,
  UseFieldArrayAppend,
  UseFieldArrayUpdate,
  useForm,
} from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { TechnicalSectionType, TechSkillType } from "@/types";

import { TechSkillTypeWithIndex } from "..";

import { TechStacks } from "./tech-stacks";

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
  const isUpdateMode = Boolean(selectedItem);

  const {
    formState: { errors },
    control,
    getValues,
    setValue,
    handleSubmit,
  } = useForm<TechSkillTypeWithIndex>({
    defaultValues: selectedItem,
  });

  const techStacksFieldArray = useFieldArray({
    control,
    name: "techStacks",
  });

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

  const renderSkillType = () => {
    return (
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
    );
  };

  return (
    <Modal
      title={isUpdateMode ? "Update Skill" : "Create Skill"}
      onClose={onClose}
      widthProps={{ minWidth: "700px", maxWidth: "700px" }}
      preventOutsideClose
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          direction="column"
          gap={usySpacing.px24}
          paddingProps={{ paddingTop: usySpacing.px16 }}
        >
          {renderSkillType()}
          <TechStacks
            getValues={getValues}
            setValue={setValue}
            control={control}
            techStacksFieldArray={techStacksFieldArray}
            syncTechnicalState={syncTechnicalState}
          />
          <Flex justifyContent="center">
            <Button
              type="submit"
              variant="primary"
              widthProps={{ minWidth: "200px" }}
            >
              {isUpdateMode ? "Update" : "Create"}
            </Button>
          </Flex>
        </Flex>
      </form>
    </Modal>
  );
};
