import { FC } from "react";

import { Box, Flex, Typography, usySpacing } from "@usy-ui/base";

import { CompanyType } from "@/types";
import dayjs from "dayjs";

type CompanyProps = CompanyType & {
  index: number;
};

export const Company: FC<CompanyProps> = ({
  name,
  fromDate,
  toDate,
  position,
  projects,
  techStacks,
  responsibilities,
  achievements,
  index,
}) => {
  const fromDateStr = dayjs(fromDate).format("MMM YYYY");
  const toDateStr =
    toDate === "present" ? "Present" : dayjs(toDate).format("MMM YYYY");

  /**
   * Render
   */

  const renderNameAndTime = () => {
    return (
      <Flex justifyContent="space-between" alignItems="center">
        <Typography weight="bold">{name}</Typography>
        <Typography size="tiny">{`${fromDateStr} - ${toDateStr}`}</Typography>
      </Flex>
    );
  };

  const renderPosition = () => {
    return (
      <>
        <Typography size="small">{position}</Typography>
      </>
    );
  };

  const renderTechStacks = () => {
    return (
      <>
        <Typography>
          <Typography weight="bold" size="small">
            ◾ Tech Stacks:&nbsp;
          </Typography>
          {techStacks.join(", ")}
        </Typography>
      </>
    );
  };

  const renderProjects = () => {
    return (
      <>
        <Typography weight="bold" size="small">
          ◾ Projects
        </Typography>
        <Box paddingProps={{ paddingLeft: usySpacing.px6 }}>
          {projects.map((project) => (
            <Typography key={project} size="small">
              {`- ${project}`}
            </Typography>
          ))}
        </Box>
      </>
    );
  };

  const renderResponsibilities = () => {
    return (
      <>
        <Typography weight="bold" size="small">
          ◾ Responsibilities
        </Typography>
        <Box paddingProps={{ paddingLeft: usySpacing.px6 }}>
          {responsibilities.map((responsibility) => (
            <Typography key={responsibility} size="small">
              {`- ${responsibility}`}
            </Typography>
          ))}
        </Box>
      </>
    );
  };

  const renderAchievements = () => {
    return (
      <>
        <Typography weight="bold" size="small">
          ◾ Achievements
        </Typography>
        <Box paddingProps={{ paddingLeft: usySpacing.px6 }}>
          {achievements.map((achieve) => (
            <Typography key={achieve} size="small">
              {`- ${achieve}`}
            </Typography>
          ))}
        </Box>
      </>
    );
  };

  return (
    <Flex
      direction="column"
      marginProps={{ marginTop: index === 0 ? "0" : usySpacing.px18 }}
    >
      {renderNameAndTime()}
      {renderPosition()}
      {renderTechStacks()}
      {renderProjects()}
      {renderResponsibilities()}
      {renderAchievements()}
    </Flex>
  );
};
