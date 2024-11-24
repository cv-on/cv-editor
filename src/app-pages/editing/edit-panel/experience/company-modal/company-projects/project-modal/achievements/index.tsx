import { FC } from "react";

import { Button, Flex, TextArea, Typography, usySpacing } from "@usy-ui/base";
import { Control, Controller, useFieldArray } from "react-hook-form";

import { ValidateRules } from "@/constants/validation";

import { ProjectTypeWithIdIndex } from "../..";
import { DragDropTextArea } from "../_drag-drop-textarea";

type AchievementsProps = {
  control: Control<ProjectTypeWithIdIndex> | undefined;
};

export const Achievements: FC<AchievementsProps> = ({ control }) => {
  const achievementsField = useFieldArray({
    control,
    name: "achievements",
  });

  const addAchievement = () => {
    achievementsField.append({ content: "" });
  };

  return (
    <Flex direction="column" gap={usySpacing.px10}>
      <Typography weight="semibold">Achievements</Typography>
      {achievementsField.fields.map(({ id }, index) => {
        return (
          <Controller
            key={id}
            name={`achievements.${index}.content`}
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field, fieldState: { error } }) => (
              <DragDropTextArea
                onRemove={() => achievementsField.remove(index)}
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
        <Button variant="outline" size="small" onClick={addAchievement}>
          Add Achievement
        </Button>
      </Flex>
    </Flex>
  );
};
