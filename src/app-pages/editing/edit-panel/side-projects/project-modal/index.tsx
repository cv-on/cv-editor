import { FC } from "react";

import {
  Button,
  Flex,
  Input,
  Modal,
  Tags,
  TextArea,
  usySpacing,
} from "@usy-ui/base";
import {
  Controller,
  UseFieldArrayAppend,
  UseFieldArrayUpdate,
  useForm,
} from "react-hook-form";

import { ValidateRules } from "@/constants/validation";
import { SideProjectsSectionType, SideProjectType } from "@/types";
import { getShortUrl } from "@/utils/format";

import { SideProjectTypeWithIndex } from "..";

type ProjectItemModalProps = {
  selectedItem?: SideProjectTypeWithIndex;
  append: UseFieldArrayAppend<SideProjectsSectionType, "projects">;
  update: UseFieldArrayUpdate<SideProjectsSectionType, "projects">;
  syncSideProjectsState: () => void;
  onClose: () => void;
};

export const ProjectItemModal: FC<ProjectItemModalProps> = ({
  selectedItem,
  append,
  update,
  syncSideProjectsState,
  onClose,
}) => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<SideProjectTypeWithIndex>({
    defaultValues: selectedItem,
  });

  const isUpdateMode = Boolean(selectedItem);

  const onSubmit = (formValues: SideProjectTypeWithIndex) => {
    const data: SideProjectType = {
      name: formValues.name,
      description: formValues.description,
      techStacks: formValues.techStacks,
      url: getShortUrl(formValues.url),
    };

    if (isUpdateMode && typeof selectedItem?.index === "number") {
      update(selectedItem.index, data);
    } else {
      append(data);
    }

    syncSideProjectsState();
    onClose();
  };

  /**
   * Render
   */

  return (
    <Modal
      title={isUpdateMode ? "Update Project" : "Create Project"}
      widthProps={{ width: "100%", maxWidth: "550px" }}
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
            name="name"
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field }) => (
              <Input
                {...field}
                label="Project Name"
                placeholder=""
                description={errors.name?.message}
                hasError={Boolean(errors.name?.message)}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: ValidateRules.required }}
            render={({ field }) => (
              <TextArea
                {...field}
                label="Description"
                placeholder="Description about your skills"
                description={errors.description?.message}
                hasError={Boolean(errors.description?.message)}
                heightProps={{ minHeight: "100px" }}
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
          <Controller
            name="url"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Url" placeholder="" />
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
