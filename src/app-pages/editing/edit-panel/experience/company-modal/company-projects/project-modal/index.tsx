import { FC, useState } from "react";

import {
  Button,
  Flex,
  Input,
  Modal,
  Scrollable,
  Switch,
  Tags,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import { Controller, useForm } from "react-hook-form";

import { ValidateRules } from "@/constants/validation";

import { ProjectTypeWithIdIndex } from "..";

import { Achievements } from "./achievements";
import { Contributions } from "./contributions";

type ProjectModalProps = {
  selectedProject?: ProjectTypeWithIdIndex;
  onProjectUpdate: (
    updatedProject: ProjectTypeWithIdIndex,
    isUpdateMode: boolean
  ) => void;
  onClose: () => void;
};

export const ProjectModal: FC<ProjectModalProps> = ({
  selectedProject,
  onProjectUpdate,
  onClose,
}) => {
  const isUpdateMode = Boolean(selectedProject);
  const hasMultiProjects = (selectedProject?.projectNames || []).length > 1;
  const [isBelongToClient, setIsBelongToClient] = useState(
    Boolean(selectedProject?.clientName)
  );
  const [isAppliedToMultipleProjects, setIsAppliedToMultipleProjects] =
    useState(hasMultiProjects);
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<ProjectTypeWithIdIndex>({
    mode: "onBlur",
    values: selectedProject,
    defaultValues: selectedProject,
  });

  const onSubmit = (projectValues: ProjectTypeWithIdIndex) => {
    onProjectUpdate(projectValues, isUpdateMode);
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
            value={isBelongToClient}
            onChange={(checked) => setIsBelongToClient(checked)}
          />
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginProps={{ marginTop: `-${usySpacing.px10}` }}
        >
          <Typography weight="semibold">Apply to multiple projects</Typography>
          <Switch
            name="multiple-projects"
            size="small"
            value={isAppliedToMultipleProjects}
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
          name="projectNames"
          control={control}
          rules={{ required: ValidateRules.required }}
          render={({ field }) => (
            <Tags
              tags={field.value}
              label="Project Names"
              onAdd={(tags) => field.onChange(tags)}
              onRemove={(tags) => field.onChange(tags)}
              description={errors.projectNames?.message}
              hasError={Boolean(errors.projectNames?.message)}
            />
          )}
        />
      );
    }

    return (
      <Controller
        name="projectNames"
        control={control}
        rules={{ required: ValidateRules.required }}
        render={({ field }) => (
          <Input
            {...field}
            label="Project Name"
            value={Array.isArray(field.value) ? field.value[0] : ""}
            onChange={(name) => field.onChange([name])}
            description={errors.projectNames?.message}
            hasError={Boolean(errors.projectNames?.message)}
          />
        )}
      />
    );
  };

  const renderDescription = () => {
    return (
      <Controller
        name="description"
        control={control}
        rules={{ required: ValidateRules.required }}
        render={({ field }) => (
          <Input
            {...field}
            label="Description"
            description={errors.description?.message}
            hasError={Boolean(errors.description?.message)}
          />
        )}
      />
    );
  };

  const renderTechStacks = () => {
    return (
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
    );
  };

  return (
    <Modal
      title={isUpdateMode ? "Update Project" : "Create Project"}
      onClose={onClose}
      widthProps={{ width: "100%", maxWidth: "700px" }}
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
            {renderDescription()}
            {renderTechStacks()}
            <Contributions control={control} />
            <Achievements control={control} />
            <Flex
              justifyContent="center"
              marginProps={{ marginTop: usySpacing.px10 }}
              paddingProps={{ paddingBottom: usySpacing.px32 }}
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
