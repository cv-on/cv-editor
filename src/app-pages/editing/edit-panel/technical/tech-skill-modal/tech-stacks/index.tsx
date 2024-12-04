import { FC, useEffect, useRef } from "react";

import {
  AlignJustifyIcon,
  Box,
  Button,
  ConfirmContent,
  Flex,
  FlexChild,
  Popover,
  Tags,
  TrashBinIcon,
  usyColor,
  usySpacing,
} from "@usy-ui/base";
import {
  Control,
  Controller,
  UseFieldArrayReturn,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import Sortable from "sortablejs";

import { ValidateRules } from "@/constants/validation";
import { TechStack } from "@/types";
import { changeItemOrder } from "@/utils/helpers";

import { TechSkillTypeWithIndex } from "../..";

import { DragDropStyled } from "./styled";

type TechStacksProps = {
  getValues: UseFormGetValues<TechSkillTypeWithIndex>;
  setValue: UseFormSetValue<TechSkillTypeWithIndex>;
  control: Control<TechSkillTypeWithIndex, any>;
  techStacksFieldArray: UseFieldArrayReturn<
    TechSkillTypeWithIndex,
    "techStacks",
    "id"
  >;
  syncTechnicalState: () => void;
};

export const TechStacks: FC<TechStacksProps> = ({
  getValues,
  setValue,
  control,
  techStacksFieldArray,
  syncTechnicalState,
}) => {
  const dragAreaRef = useRef(null);

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
                render={({ field, fieldState: { error } }) => (
                  <Tags
                    label={`Tech Stacks ${index + 1}`}
                    tags={field.value}
                    onAdd={(tags) => field.onChange(tags)}
                    onRemove={(tags) => field.onChange(tags)}
                    description={error?.message}
                    hasError={Boolean(error?.message)}
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
