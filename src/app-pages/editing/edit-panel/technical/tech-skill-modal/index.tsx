import { FC, useEffect, useRef } from "react";

import {
  AlignJustifyIcon,
  Box,
  Button,
  ConfirmContent,
  Flex,
  FlexChild,
  Input,
  Modal,
  Popover,
  Tags,
  TrashBinIcon,
  usyColor,
  usySpacing,
} from "@usy-ui/base";
import {
  Controller,
  useFieldArray,
  UseFieldArrayAppend,
  UseFieldArrayUpdate,
  useForm,
} from "react-hook-form";
import Sortable from "sortablejs";

import { ValidateRules } from "@/constants/validation";
import { TechnicalSectionType, TechSkillType, TechStack } from "@/types";
import { changeItemOrder } from "@/utils/helpers";

import { TechSkillTypeWithIndex } from "..";

import { DragDropStyled } from "./styled";

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
  const dragAreaRef = useRef(null);
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

  useEffect(() => {
    if (dragAreaRef.current) {
      new Sortable(dragAreaRef.current, {
        animation: 350,
        onEnd: (evt) => {
          if (
            typeof evt.oldIndex === "number" &&
            typeof evt.newIndex === "number"
          ) {
            const orderedAchieveItems = changeItemOrder<TechStack>({
              array: getValues().techStacks,
              fromIndex: evt.oldIndex,
              toIndex: evt.newIndex,
            });

            setValue("techStacks", orderedAchieveItems);
            syncTechnicalState();
          }
        },
      });
    }
  }, [getValues, setValue, syncTechnicalState]);

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

  const renderTechStacks = () => {
    const renderDeleteIcon = (index: number) => {
      return (
        <Popover
          position="left"
          color="dark-8"
          content={
            <ConfirmContent
              description="Are you sure to remove"
              onConfirm={() => techStacksFieldArray.remove(index)}
            />
          }
        >
          <Button variant="invisible">
            <TrashBinIcon color={usyColor.red7} />
          </Button>
        </Popover>
      );
    };

    return (
      <>
        <Flex ref={dragAreaRef} direction="column">
          {techStacksFieldArray.fields.map((skill, index) => (
            <Flex
              key={skill.id}
              alignItems="flex-start"
              gap={usySpacing.px4}
              widthProps={{ width: "unset" }}
              marginProps={{ margin: `${usySpacing.px10} -${usySpacing.px10}` }}
            >
              <DragDropStyled>
                <AlignJustifyIcon />
              </DragDropStyled>
              <FlexChild grow={1}>
                <Controller
                  name={`techStacks.${index}.items`}
                  control={control}
                  rules={{ required: ValidateRules.required }}
                  render={({ field }) => (
                    <Tags
                      label={`Tech Stacks ${index + 1}`}
                      tags={field.value}
                      onAdd={(tags) => field.onChange(tags)}
                      onRemove={(tags) => field.onChange(tags)}
                      description={errors.techStacks?.message}
                      hasError={Boolean(errors.techStacks?.message)}
                    />
                  )}
                />
              </FlexChild>
              <Box
                widthProps={{ maxWidth: usySpacing.px40 }}
                paddingProps={{ paddingTop: usySpacing.px24 }}
              >
                {renderDeleteIcon(index)}
              </Box>
            </Flex>
          ))}
        </Flex>
        <Flex justifyContent="center">
          <Button
            variant="outline"
            size="small"
            onClick={() => techStacksFieldArray.append({ items: [] })}
            widthProps={{ maxWidth: "150px" }}
          >
            Add Tech Stacks
          </Button>
        </Flex>
      </>
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
          {renderTechStacks()}
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
