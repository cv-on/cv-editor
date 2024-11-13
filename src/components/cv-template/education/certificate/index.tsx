import { FC } from "react";

import { Typography } from "@usy-ui/base";

type CertificateProps = {
  content: string;
};

export const Certificate: FC<CertificateProps> = ({ content }) => {
  return <Typography size="small">- {content}</Typography>;
};
