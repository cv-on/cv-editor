import { ReactNode, useMemo } from "react";

import {
  EnvelopeIcon,
  Flex,
  PhoneIcon,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import { useRecoilValue } from "recoil";

import { ReferenceIconsConst } from "@/app-pages/editing/edit-panel/personal-info/reference-link-input/constants";
import { personalInfoSelector } from "@/app-states";
import { GrayBoard } from "@/components/gray-board";

import { LinkStyled } from "./styled";

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
        url: `https://${link.url}`,
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
    <GrayBoard title="Contact">
      {itemsMemo.map(({ icon, label, url }) => (
        <Flex key={label} marginProps={{ marginBottom: usySpacing.px6 }}>
          {icon}
          &nbsp;&nbsp;
          {url ? (
            <LinkStyled href={url} target="_blank">
              <Typography size="small">{label}</Typography>
            </LinkStyled>
          ) : (
            <Typography size="small">{label}</Typography>
          )}
        </Flex>
      ))}
    </GrayBoard>
  );
};
