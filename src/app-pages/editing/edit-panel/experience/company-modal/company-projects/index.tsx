import { FC } from "react";

import { Badge, Flex, Scrollable, Typography, usySpacing } from "@usy-ui/base";

import { DragDropPanel } from "@/components/drag-drop-panel";
import { ProjectType } from "@/types";

type CompanyProjectsProps = {
  projects?: ProjectType[];
};

export const CompanyProjects: FC<CompanyProjectsProps> = ({ projects }) => {
  return (
    <Flex
      direction="column"
      gap={usySpacing.px10}
      paddingProps={{ paddingTop: usySpacing.px16 }}
    >
      <Typography weight="semibold">Worked Projects</Typography>
      <Scrollable
        heightProps={{ maxHeight: "420px" }}
        paddingProps={{ paddingRight: usySpacing.px4 }}
      >
        {(projects || []).map(({ projectName, clientName, techStacks }) => (
          <DragDropPanel
            key={projectName}
            isDraggable={false}
            onEdit={() => ""}
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
                {projectName.split(",").map((proj) => (
                  <Badge
                    key={proj.trim()}
                    variant="filled"
                    radius="full"
                    size="small"
                  >
                    {proj.trim()}
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
        ))}
      </Scrollable>
    </Flex>
  );
};
