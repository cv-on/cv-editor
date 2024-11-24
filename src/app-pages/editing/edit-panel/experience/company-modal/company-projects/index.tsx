import { Dispatch, FC, SetStateAction, useState } from "react";

import {
  Badge,
  Button,
  Flex,
  PlusIcon,
  Scrollable,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import { useFieldArray, UseFieldArrayUpdate, useForm } from "react-hook-form";

import { DragDropPanel } from "@/components/drag-drop-panel";
import { ExperienceSectionType, ProjectType } from "@/types";

import { CompanyTypeWithIdIndex } from "../..";

import { ProjectModal } from "./project-modal";

export type ProjectTypeWithIdIndex = ProjectType & {
  id: string;
  index: number;
};

type CompanyProjectsProps = {
  selectedCompany?: CompanyTypeWithIdIndex;
  setSelectedCompany: Dispatch<
    SetStateAction<CompanyTypeWithIdIndex | undefined>
  >;
  updateCompany: UseFieldArrayUpdate<ExperienceSectionType, "companies">;
  syncExperienceState: () => void;
};

export const CompanyProjects: FC<CompanyProjectsProps> = ({
  selectedCompany,
  setSelectedCompany,
  updateCompany,
  syncExperienceState,
}) => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectTypeWithIdIndex>();
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  const { control, getValues } = useForm<CompanyTypeWithIdIndex>({
    mode: "onBlur",
    values: selectedCompany,
    defaultValues: selectedCompany,
  });
  const projectsFieldArray = useFieldArray({ control, name: "projects" });

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  const handleEdit = (project: ProjectTypeWithIdIndex) => {
    setSelectedProject(project);
    openProjectModal();
  };

  const handleRemove = (index: number) => {
    if (typeof selectedCompany?.index === "number") {
      const updatedCompany = getValues();

      projectsFieldArray.remove(index);
      updateCompany(selectedCompany?.index, updatedCompany);
      setSelectedCompany(updatedCompany);
      syncExperienceState();
    }
  };

  const handleSelectedProjectUpdate = (newProject: ProjectTypeWithIdIndex) => {
    if (typeof selectedCompany?.index === "number") {
      const updatedProject = projectsFieldArray.fields.map((prevProject) =>
        prevProject.id === newProject.id ? newProject : prevProject
      );
      const updatedCompany = {
        ...selectedCompany,
        projects: updatedProject,
      };

      updateCompany(selectedCompany?.index, updatedCompany);
      setSelectedCompany(updatedCompany);
      syncExperienceState();
    }
  };

  /**
   * Render
   */

  const renderProjectsList = () => {
    return projectsFieldArray.fields.map((project, index) => {
      const { projectName, clientName, techStacks } = project;

      return (
        <DragDropPanel
          key={projectName}
          isDraggable={false}
          onEdit={() => handleEdit({ ...project, index })}
          onRemove={() => handleRemove(index)}
          marginProps={{
            marginBottom: usySpacing.px10,
            marginRight: usySpacing.px4,
          }}
          paddingProps={{
            padding: `${usySpacing.px14} ${usySpacing.px16} ${usySpacing.px10}`,
          }}
        >
          <Flex direction="column">
            <Flex
              gap={usySpacing.px4}
              marginProps={{ marginBottom: usySpacing.px6 }}
            >
              {projectName.split(",").map((name) => (
                <Badge
                  key={name.trim()}
                  variant="filled"
                  radius="full"
                  size="small"
                >
                  {name.trim()}
                </Badge>
              ))}
            </Flex>
            {clientName && (
              <Typography size="small">
                <Typography tag="span" size="small" weight="bold">
                  ◾Client:&nbsp;
                </Typography>
                {clientName}
              </Typography>
            )}
            <Typography size="small">
              <Typography tag="span" size="small" weight="bold">
                ◾Tech stacks:&nbsp;
              </Typography>
              {techStacks.join(", ")}
            </Typography>
          </Flex>
        </DragDropPanel>
      );
    });
  };

  return (
    <>
      {isProjectModalOpen && (
        <ProjectModal
          selectedProject={selectedProject}
          onProjectUpdate={handleSelectedProjectUpdate}
          onClose={closeProjectModal}
        />
      )}
      <Flex direction="column" gap={usySpacing.px10}>
        <Typography weight="bold">Contributed to Projects</Typography>
        <Button
          variant="outline"
          widthProps={{ width: "100%" }}
          radius="large"
          onClick={openProjectModal}
        >
          <PlusIcon />
          &nbsp; Add Project
        </Button>
        <Scrollable
          heightProps={{ maxHeight: "420px" }}
          paddingProps={{ paddingRight: usySpacing.px4 }}
        >
          {renderProjectsList()}
        </Scrollable>
      </Flex>
    </>
  );
};
