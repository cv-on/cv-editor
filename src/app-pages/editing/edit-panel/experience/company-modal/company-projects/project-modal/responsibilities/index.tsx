import { FC } from "react";

import { Button, Flex, TextArea, Typography, usySpacing } from "@usy-ui/base";
import { Control, Controller, useFieldArray } from "react-hook-form";

import { ValidateRules } from "@/constants/validation";

import { ProjectTypeWithIdIndex } from "../..";
import { DragDropTextArea } from "../_drag-drop-textarea";

type ResponsibilitiesProps = {
  control: Control<ProjectTypeWithIdIndex> | undefined;
};

export const Responsibilities: FC<ResponsibilitiesProps> = ({ control }) => {
  const responsibilitiesField = useFieldArray({
    control,
    name: "responsibilities",
  });

  const addResponsibility = () => {
    responsibilitiesField.append({ content: "" });
  };

  return (
    <Flex direction="column" gap={usySpacing.px10}>
      <Typography weight="semibold">Responsibilities</Typography>
      {responsibilitiesField.fields.map(({ id }, index) => {
        return (
          <Controller
            key={id}
            name={`responsibilities.${index}.content`}
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field, fieldState: { error } }) => (
              <DragDropTextArea
                onRemove={() => responsibilitiesField.remove(index)}
              >
                <TextArea
                  {...field}
                  size="small"
                  description={error?.message}
                  hasError={Boolean(error?.message)}
                />
              </DragDropTextArea>
            )}
          />
        );
      })}
      <Flex justifyContent="center">
        <Button variant="outline" size="small" onClick={addResponsibility}>
          Add Responsibility
        </Button>
      </Flex>
    </Flex>
  );
};
