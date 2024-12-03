import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Badge,
  Button,
  Flex,
  PlusIcon,
  Scrollable,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import { useFieldArray, UseFieldArrayReturn, useForm } from "react-hook-form";
import Sortable from "sortablejs";

import { DragDropPanel } from "@/components/drag-drop-panel";
import { Notes } from "@/components/notes";
import { ExperienceSectionType, ProjectType } from "@/types";
import { changeItemOrder } from "@/utils/helpers";

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
  companiesFieldArray: UseFieldArrayReturn<
    ExperienceSectionType,
    "companies",
    "id"
  >;
  syncExperienceState: () => void;
};

export const CompanyProjects: FC<CompanyProjectsProps> = ({
  selectedCompany,
  setSelectedCompany,
  companiesFieldArray,
  syncExperienceState,
}) => {
  const isUpdateMode = Boolean(selectedCompany);
  const [selectedProject, setSelectedProject] =
    useState<ProjectTypeWithIdIndex>();
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);
  const dragAreaRef = useRef(null);

  const { control, getValues, setValue } = useForm<CompanyTypeWithIdIndex>({
    mode: "onBlur",
    values: selectedCompany,
    defaultValues: selectedCompany,
  });
  const projectsFieldArray = useFieldArray({ control, name: "projects" });

  useEffect(() => {
    if (dragAreaRef.current) {
      new Sortable(dragAreaRef.current, {
        animation: 350,
        onEnd: (evt) => {
          if (
            typeof evt.oldIndex === "number" &&
            typeof evt.newIndex === "number" &&
            typeof selectedCompany?.index === "number"
          ) {
            const orderedProjects = changeItemOrder<ProjectType>({
              array: getValues().projects,
              fromIndex: evt.oldIndex,
              toIndex: evt.newIndex,
            });

            setValue("projects", orderedProjects);
            companiesFieldArray.update(selectedCompany?.index, getValues());
            setSelectedCompany(getValues());
            syncExperienceState();
          }
        },
      });
    }
  }, [
    getValues,
    setValue,
    selectedCompany?.index,
    setSelectedCompany,
    companiesFieldArray,
    syncExperienceState,
  ]);

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
      companiesFieldArray.update(selectedCompany?.index, updatedCompany);
      setSelectedCompany(updatedCompany);
      syncExperienceState();
    }
  };

  const handleSelectedProjectUpdate = (
    project: ProjectTypeWithIdIndex,
    isUpdateMode: boolean
  ) => {
    if (typeof selectedCompany?.index !== "number") {
      return;
    }

    const updatedCompany = {
      ...selectedCompany,
      projects: isUpdateMode
        ? projectsFieldArray.fields.map((prevProject) =>
            prevProject.id === project.id ? project : prevProject
          )
        : [...projectsFieldArray.fields, project],
    };

    companiesFieldArray.update(
      selectedCompany?.index,
      updatedCompany as CompanyTypeWithIdIndex
    );
    setSelectedCompany(updatedCompany as CompanyTypeWithIdIndex);
    syncExperienceState();
  };

  /**
   * Render
   */

  const renderAddProject = () => {
    return (
      <>
        {!isUpdateMode && (
          <Notes content="Projects can be added once the company has been created." />
        )}
        <Button
          variant="outline"
          radius="large"
          disabled={!isUpdateMode}
          widthProps={{ width: "100%" }}
          onClick={openProjectModal}
        >
          <PlusIcon />
          &nbsp; Add Project
        </Button>
      </>
    );
  };

  const renderProjectsList = () => {
    return projectsFieldArray.fields.map((project, index) => {
      const { projectNames, clientName, description } = project;

      return (
        <DragDropPanel
          key={projectNames[0]}
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
              {projectNames.map((name) => (
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
                ◾Description:&nbsp;
              </Typography>
              {description}
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
        {renderAddProject()}
        <Scrollable
          heightProps={{ maxHeight: "420px" }}
          paddingProps={{ paddingRight: usySpacing.px4 }}
        >
          <Flex ref={dragAreaRef} direction="column">
            {renderProjectsList()}
          </Flex>
        </Scrollable>
      </Flex>
    </>
  );
};
