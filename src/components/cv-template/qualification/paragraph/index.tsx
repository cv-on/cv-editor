import { FC } from "react";

import { Typography } from "@usy-ui/base";

type ParagraphProps = {
  content: string;
};

export const Paragraph: FC<ParagraphProps> = ({ content }) => {
  return <Typography size="small">- {content}</Typography>;
};
