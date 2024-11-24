import { FC, useState } from "react";

import {
  Button,
  Flex,
  Input,
  Modal,
  Scrollable,
  Switch,
  Tags,
  TextArea,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import { Controller, useFieldArray, useForm } from "react-hook-form";

import { ValidateRules } from "@/constants/validation";

import { ProjectTypeWithIdIndex } from "..";

import { DragDropTextArea } from "./drag-drop-textarea";

type ProjectModalProps = {
  selectedProject?: ProjectTypeWithIdIndex;
  onProjectUpdate: (updatedProject: ProjectTypeWithIdIndex) => void;
  onClose: () => void;
};

export const ProjectModal: FC<ProjectModalProps> = ({
  selectedProject,
  onProjectUpdate,
  onClose,
}) => {
  const isUpdateMode = Boolean(selectedProject);
  const [isBelongToClient, setIsBelongToClient] = useState(false);
  const [isAppliedToMultipleProjects, setIsAppliedToMultipleProjects] =
    useState(false);
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<ProjectTypeWithIdIndex>({
    mode: "onBlur",
    values: selectedProject,
    defaultValues: selectedProject,
  });

  const responsibilitiesField = useFieldArray({
    control,
    name: "responsibilities",
  });

  const achievementsField = useFieldArray({
    control,
    name: "achievements",
  });

  const onSubmit = (projectValues: ProjectTypeWithIdIndex) => {
    onProjectUpdate(projectValues);
    onClose();
  };

  /**
   * Render
   */

  const renderSwitchQuestions = () => {
    return (
      <>
        <Flex justifyContent="space-between" alignItems="center">
          <Typography weight="semibold">
            Project(s) belong to a client
          </Typography>
          <Switch
            name="belong-to-client"
            size="small"
            onChange={(checked) => setIsBelongToClient(checked)}
          />
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginProps={{ marginTop: `-${usySpacing.px10}` }}
        >
          <Typography weight="semibold">Apple to multiple projects</Typography>
          <Switch
            name="multiple-projects"
            size="small"
            onChange={(checked) => setIsAppliedToMultipleProjects(checked)}
          />
        </Flex>
      </>
    );
  };

  const renderClientName = () => {
    if (!isBelongToClient) {
      return null;
    }

    return (
      <Controller
        name="clientName"
        control={control}
        rules={{ required: ValidateRules.required }}
        render={({ field }) => (
          <Input
            {...field}
            label="Client Name"
            description={errors.clientName?.message}
            hasError={Boolean(errors.clientName?.message)}
          />
        )}
      />
    );
  };

  const renderProjectName = () => {
    if (isAppliedToMultipleProjects) {
      return (
        <Controller
          name="projectName"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Tags
              tags={field.value.split(",")}
              label="Project Names"
              description={errors.projectName?.message}
              hasError={Boolean(errors.projectName?.message)}
            />
          )}
        />
      );
    }

    return (
      <Controller
        name="projectName"
        control={control}
        rules={{ required: ValidateRules.required }}
        render={({ field }) => (
          <Input
            {...field}
            label="Project Name"
            description={errors.projectName?.message}
            hasError={Boolean(errors.projectName?.message)}
          />
        )}
      />
    );
  };

  const renderResponsibilities = () => {
    return (
      <Flex direction="column" gap={usySpacing.px10}>
        <Typography weight="semibold">Responsibilities</Typography>
        {responsibilitiesField.fields.map(({ content }, index) => {
          return (
            <Controller
              key={content.substring(0, 10)}
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
      </Flex>
    );
  };

  const renderAchievements = () => {
    return (
      <Flex direction="column" gap={usySpacing.px10}>
        <Typography weight="semibold">Achievements</Typography>
        {achievementsField.fields.map(({ content }, index) => {
          return (
            <Controller
              key={content.substring(0, 10)}
              name={`responsibilities.${index}.content`}
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
      </Flex>
    );
  };

  return (
    <Modal
      title={isUpdateMode ? "Update Project" : "Create Project"}
      onClose={onClose}
      widthProps={{ minWidth: "600px" }}
      preventOutsideClose
    >
      <Scrollable
        widthProps={{ width: "unset" }}
        heightProps={{ maxHeight: "72vh" }}
        paddingProps={{ paddingRight: usySpacing.px14 }}
        marginProps={{ marginRight: `-${usySpacing.px18}` }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" gap={usySpacing.px24}>
            {renderSwitchQuestions()}
            {renderClientName()}
            {renderProjectName()}
            <Controller
              name="techStacks"
              control={control}
              rules={{
                required: ValidateRules.required,
              }}
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
            {renderResponsibilities()}
            {renderAchievements()}
            <Flex
              justifyContent="center"
              marginProps={{ marginTop: usySpacing.px10 }}
            >
              <Button
                type="submit"
                variant="primary"
                widthProps={{ width: "200px" }}
              >
                {isUpdateMode ? "Update" : "Create"}
              </Button>
            </Flex>
          </Flex>
        </form>
      </Scrollable>
    </Modal>
  );
};
