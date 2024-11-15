import { FC } from "react";

import { Box, Flex, Typography, usySpacing } from "@usy-ui/base";

import { ProjectType } from "@/types";

import { BadgeProjectName } from "./project.styled";

export const Project: FC<ProjectType> = ({
  client,
  projectName,
  techStacks,
  responsibilities,
  achievements,
}) => {
  const renderProjects = () => {
    return (
      <Flex alignItems="center" marginProps={{ marginBottom: usySpacing.px4 }}>
        {projectName.split(",").map((proj) => (
          <BadgeProjectName key={proj.trim()}>{proj.trim()}</BadgeProjectName>
        ))}
      </Flex>
    );
  };

  const renderClient = () => {
    return (
      client && (
        <Typography size="small">
          <Typography tag="span" size="small" weight="bold">
            ◾Client:&nbsp;
          </Typography>
          {client}
        </Typography>
      )
    );
  };

  const renderTechStacks = () => {
    return (
      <Typography size="small">
        <Typography tag="span" size="small" weight="bold">
          ◾Tech stacks:&nbsp;
        </Typography>
        {techStacks.join(", ")}
      </Typography>
    );
  };

  const renderResponsibilities = () => {
    return (
      <>
        <Typography tag="span" size="small" weight="bold">
          ◾Responsibilities:
        </Typography>
        <Box paddingProps={{ paddingLeft: usySpacing.px14 }}>
          {responsibilities.map((res) => (
            <Typography key={res.substring(0, 10)} size="small">
              {`- ${res}`}
            </Typography>
          ))}
        </Box>
      </>
    );
  };

  const renderAchievements = () => {
    return (
      <>
        <Typography tag="span" size="small" weight="bold">
          ◾Achievements:
        </Typography>
        <Box paddingProps={{ paddingLeft: usySpacing.px14 }}>
          {achievements.map((res) => (
            <Typography
              key={res.substring(0, 10)}
              size="small"
            >{`- ${res}`}</Typography>
          ))}
        </Box>
      </>
    );
  };

  return (
    <Flex
      key={projectName}
      direction="column"
      marginProps={{ marginTop: usySpacing.px8, marginBottom: usySpacing.px10 }}
    >
      {renderProjects()}
      {renderClient()}
      {renderTechStacks()}
      {renderResponsibilities()}
      {renderAchievements()}
    </Flex>
  );
};
