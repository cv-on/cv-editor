import { FC } from "react";

import { Typography } from "@usy-ui/base";

type ItemDescProps = {
  content: string;
};

export const ItemDesc: FC<ItemDescProps> = ({ content }) => {
  return <Typography size="small">- {content}</Typography>;
};
