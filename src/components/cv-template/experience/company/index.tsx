import { FC } from "react";

import { Flex, Typography, usySpacing } from "@usy-ui/base";
import dayjs from "dayjs";

import { CompanyType } from "@/types";

import { CompanyFlexStyled } from "./company.styled";
import { Project } from "./project";

type CompanyProps = CompanyType & {
  index: number;
};

export const Company: FC<CompanyProps> = ({
  companyName,
  fromDate,
  toDate,
  position,
  projects,
  index,
}) => {
  const fromDateStr = dayjs(fromDate).format("MMM YYYY");
  const toDateStr =
    toDate === "present" ? "Present" : dayjs(toDate).format("MMM YYYY");

  /**
   * Render
   */

  const renderNameTimeAndPosition = () => {
    return (
      <>
        <Flex justifyContent="space-between" alignItems="center">
          <Typography size="large" weight="bold">
            {companyName}
          </Typography>
          <Typography
            tag="em"
            size="tiny"
          >{`${fromDateStr} - ${toDateStr}`}</Typography>
        </Flex>
        <Typography tag="em" size="small" weight="semibold">
          {position}
        </Typography>
      </>
    );
  };

  const renderProjects = () => {
    return projects.map(
      ({
        clientName,
        projectName,
        techStacks,
        responsibilities,
        achievements,
      }) => (
        <Project
          key={projectName}
          clientName={clientName}
          projectName={projectName}
          techStacks={techStacks}
          responsibilities={responsibilities}
          achievements={achievements}
        />
      )
    );
  };

  return (
    <CompanyFlexStyled
      direction="column"
      paddingProps={{
        paddingTop: index === 0 ? "0" : usySpacing.px24,
        paddingBottom: usySpacing.px12,
      }}
    >
      {renderNameTimeAndPosition()}
      {renderProjects()}
    </CompanyFlexStyled>
  );
};
