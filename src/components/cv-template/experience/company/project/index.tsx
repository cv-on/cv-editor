import { FC } from "react";

import { Box, Flex, Typography, usySpacing } from "@usy-ui/base";

import { ProjectType } from "@/types";

import { BadgeProjectName } from "./project.styled";

export const Project: FC<ProjectType> = ({
  clientName,
  projectNames,
  description,
  techStacks,
  contributions,
  achievements,
}) => {
  const renderProjectsName = () => {
    return (
      <Flex alignItems="center" marginProps={{ marginBottom: usySpacing.px8 }}>
        {projectNames.map((name) => (
          <BadgeProjectName key={name}>{name}</BadgeProjectName>
        ))}
      </Flex>
    );
  };

  const renderClient = () => {
    return (
      clientName && (
        <Typography size="small">
          <Typography tag="span" size="small" weight="bold">
            ◾Client:&nbsp;
          </Typography>
          {clientName}
        </Typography>
      )
    );
  };

  const renderDescription = () => {
    return (
      description && (
        <Typography size="small">
          <Typography tag="span" size="small" weight="bold">
            ◾Description:&nbsp;
          </Typography>
          {description}
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

  const renderContributions = () => {
    return (
      <Box>
        <Typography tag="strong" size="small" weight="bold">
          ◾Contributions:
        </Typography>
        <Box paddingProps={{ paddingLeft: usySpacing.px14 }}>
          {contributions.map(({ content }) => (
            <Typography key={content.substring(0, 10)} size="small">
              {`- ${content}`}
            </Typography>
          ))}
        </Box>
      </Box>
    );
  };

  const renderAchievements = () => {
    return (
      <Box>
        <Typography tag="span" size="small" weight="bold">
          ◾Achievements:
        </Typography>
        <Box paddingProps={{ paddingLeft: usySpacing.px14 }}>
          {achievements.map(({ content }) => (
            <Typography key={content.substring(0, 10)} size="small">
              {`- ${content}`}
            </Typography>
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Flex
      key={projectNames[0]}
      direction="column"
      marginProps={{
        marginTop: usySpacing.px16,
        marginBottom: usySpacing.px12,
      }}
    >
      {renderProjectsName()}
      <Flex direction="column" gap={usySpacing.px4}>
        {renderClient()}
        {renderDescription()}
        {renderTechStacks()}
        {renderContributions()}
        {renderAchievements()}
      </Flex>
    </Flex>
  );
};
