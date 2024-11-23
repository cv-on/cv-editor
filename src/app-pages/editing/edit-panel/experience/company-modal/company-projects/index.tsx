import { FC, useState } from "react";

import {
  Badge,
  Button,
  Flex,
  PlusIcon,
  Scrollable,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import { DragDropPanel } from "@/components/drag-drop-panel";
import { ProjectType } from "@/types";

import { ProjectModal } from "./project-modal";

type CompanyProjectsProps = {
  projects?: ProjectType[];
};

export const CompanyProjects: FC<CompanyProjectsProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType>();
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  const handleEditClick = (project: ProjectType) => {
    setSelectedProject(project);
    openProjectModal();
  };

  return (
    <>
      {isProjectModalOpen && (
        <ProjectModal
          selectedProject={selectedProject}
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
          {(projects || []).map((project) => {
            const { projectName, clientName, techStacks } = project;

            return (
              <DragDropPanel
                key={projectName}
                isDraggable={false}
                onEdit={() => handleEditClick(project)}
                onRemove={() => ""}
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
          })}
        </Scrollable>
      </Flex>
    </>
  );
};
