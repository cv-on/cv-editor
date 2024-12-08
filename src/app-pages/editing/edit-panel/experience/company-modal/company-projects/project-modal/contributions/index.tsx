import { FC } from "react";

import { Button, Flex, TextArea, Typography, usySpacing } from "@usy-ui/base";
import { Control, Controller, useFieldArray } from "react-hook-form";

import { ValidateRules } from "@/constants/validation";

import { ProjectTypeWithIdIndex } from "../..";
import { DragDropTextArea } from "../_drag-drop-textarea";

type ContributionsProps = {
  control: Control<ProjectTypeWithIdIndex> | undefined;
};

export const Contributions: FC<ContributionsProps> = ({ control }) => {
  const contributionsField = useFieldArray({
    control,
    name: "contributions",
  });

  const addContribution = () => {
    contributionsField.append({ content: "" });
  };

  return (
    <Flex direction="column" gap={usySpacing.px10}>
      <Typography weight="semibold">Contributions</Typography>
      {contributionsField.fields.map(({ id }, index) => {
        return (
          <Controller
            key={id}
            name={`contributions.${index}.content`}
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field, fieldState: { error } }) => (
              <DragDropTextArea
                onRemove={() => contributionsField.remove(index)}
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
        <Button variant="outline" size="small" onClick={addContribution}>
          Add Contribution
        </Button>
      </Flex>
    </Flex>
  );
};
