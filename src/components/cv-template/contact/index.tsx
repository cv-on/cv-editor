import { ReactNode, useContext, useMemo } from "react";

import {
  BrandGithubIcon,
  BrandLinkedinIcon,
  EnvelopeIcon,
  Flex,
  PhoneIcon,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import { Section } from "../../section";
import Link from "next/link";
import { CvContentContext } from "@/context/cv-context";
import { getBrandIconByType } from "./utils";
import { Url } from "@/types/common";

type ContactItem = {
  icon: ReactNode;
  label: string;
  url?: Url;
};

export const Contact = () => {
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
      <Section title="Contact">
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
      </Section>
    </>
  );
};
