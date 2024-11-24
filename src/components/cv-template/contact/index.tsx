import { ReactNode, useMemo } from "react";

import {
  EnvelopeIcon,
  Flex,
  PhoneIcon,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import Link from "next/link";
import { useRecoilValue } from "recoil";

import { ReferenceIconsConst } from "@/app-pages/editing/edit-panel/personal-info/reference-link-input/constants";
import { personalInfoSelector } from "@/app-states";

import { CvSection } from "../../cv-section";

type ContactItem = {
  icon: ReactNode;
  label: string;
  url?: string;
};

export const ContactSection = () => {
  const personalInfo = useRecoilValue(personalInfoSelector);

  const referenceLinksMemo = useMemo<ContactItem[]>(
    () =>
      personalInfo.referenceLinks.map((link) => ({
        icon: ReferenceIconsConst[link.type],
        label: link.url,
        url: link.url.includes("https://") ? link.url : `https://${link.url}`,
      })),
    [personalInfo]
  );

  const itemsMemo = useMemo<ContactItem[]>(
    () => [
      {
        icon: (
          <EnvelopeIcon
            style={{
              minWidth: "22px",
              maxWidth: "22px",
              minHeight: "22px",
              maxHeight: "22px",
            }}
          />
        ),
        label: personalInfo.email,
      },
      {
        icon: (
          <PhoneIcon
            style={{
              minWidth: "22px",
              maxWidth: "22px",
              minHeight: "22px",
              maxHeight: "22px",
            }}
          />
        ),
        label: personalInfo.phone,
      },
      ...referenceLinksMemo,
    ],
    [personalInfo, referenceLinksMemo]
  );

  return (
    <>
      <CvSection title="Contact">
        {itemsMemo.map(({ icon, label, url }, index) => (
          <Flex
            key={`${label}-${index}`}
            marginProps={{ marginBottom: usySpacing.px10 }}
          >
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
