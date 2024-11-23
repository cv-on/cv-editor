import { Flex, Typography, usySpacing } from "@usy-ui/base";

export const CompanyProjects = () => {
  return (
    <Flex
      direction="column"
      gap={usySpacing.px24}
      paddingProps={{ paddingTop: usySpacing.px16 }}
    >
      <Typography weight="semibold">Company Projects</Typography>
    </Flex>
  );
};
