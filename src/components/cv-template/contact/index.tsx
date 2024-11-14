import { ReactNode, useContext, useMemo } from "react";

import {
  EnvelopeIcon,
  Flex,
  PhoneIcon,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import Link from "next/link";

import { CvContentContext } from "@/context/cv-context";
import { Url } from "@/types";

import { CvSection } from "../../cv-section";

import { getBrandIconByType } from "./utils";

type ContactItem = {
  icon: ReactNode;
  label: string;
  url?: Url;
};

export const ContactSection = () => {
  const {
    cvContent: { personalInfo },
  } = useContext(CvContentContext);

  const connectLinksMemo = useMemo<ContactItem[]>(
    () =>
      personalInfo.connectLinks.map((link) => ({
        icon: getBrandIconByType(link.type),
        label: link.shortUrl,
        url: link.fullUrl,
      })),
    [personalInfo]
  );

  const itemsMemo = useMemo<ContactItem[]>(
    () => [
      {
        icon: <EnvelopeIcon />,
        label: personalInfo.email,
      },
      {
        icon: <PhoneIcon />,
        label: personalInfo.phone,
      },
      ...connectLinksMemo,
    ],
    [personalInfo, connectLinksMemo]
  );

  return (
    <>
      <CvSection title="Contact">
        {itemsMemo.map(({ icon, label, url }) => (
          <Flex key={label} marginProps={{ marginBottom: usySpacing.px10 }}>
            {icon}
            &nbsp;&nbsp;
            {url ? (
              <Link href={url} target="_blank">
                <Typography size="small">{label}</Typography>
              </Link>
            ) : (
              <Typography size="small">{label}</Typography>
            )}
          </Flex>
        ))}
      </CvSection>
    </>
  );
};
