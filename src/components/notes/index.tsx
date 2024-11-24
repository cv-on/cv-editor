import { FC } from "react";

import { Badge, Flex, Typography, usySpacing } from "@usy-ui/base";

type NotesProps = {
  content: string;
};

export const Notes: FC<NotesProps> = ({ content }) => {
  return (
    <Flex alignItems="flex-start" gap={usySpacing.px4}>
      <Badge variant="filled" color="amber" radius="full">
        Notes
      </Badge>
      <Typography tag="em" size="small">
        {content}
      </Typography>
    </Flex>
  );
};
