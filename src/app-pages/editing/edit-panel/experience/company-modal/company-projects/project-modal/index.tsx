import { FC, useState } from "react";

import {
  Button,
  Flex,
  Input,
  Modal,
  Switch,
  Tags,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import { Controller, useForm } from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { ProjectType } from "@/types";

type ProjectModalProps = {
  selectedProject?: ProjectType;
  onClose: () => void;
};

export const ProjectModal: FC<ProjectModalProps> = ({
  selectedProject,
  onClose,
}) => {
  const [isBelongToClient, setIsBelongToClient] = useState(false);
  const [isAppliedToMultipleProjects, setIsAppliedToMultipleProjects] =
    useState(false);
  const {
    formState: { errors },
    control,
  } = useForm<ProjectType>({
    mode: "onBlur",
  });

  const isUpdateMode = Boolean(selectedProject);

  /**
   * Render
   */

  const renderSwitchQuestions = () => {
    return (
      <>
        <Flex justifyContent="space-between" alignItems="center">
          <Typography weight="semibold">
            This project(s) belong to a client
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

  return (
    <Modal
      title={isUpdateMode ? "Update Project" : "Create Project"}
      onClose={onClose}
      widthProps={{ minWidth: "600px" }}
      preventOutsideClose
    >
      <form>
        <Flex direction="column" gap={usySpacing.px24}>
          {renderSwitchQuestions()}
          {isBelongToClient && (
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
          )}
          <Controller
            name="projectName"
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field }) => (
              <Input
                {...field}
                label="Project Name"
                placeholder={
                  isAppliedToMultipleProjects
                    ? "Use comma “,” to separate projects"
                    : ""
                }
                description={errors.projectName?.message}
                hasError={Boolean(errors.projectName?.message)}
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
    </Modal>
  );
};
