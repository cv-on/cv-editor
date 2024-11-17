import { ReactNode } from "react";

import {
  BrandFacebookIcon,
  BrandGithubIcon,
  BrandInstagramIcon,
  BrandLinkedinIcon,
  BrandRedditIcon,
  BrandWhatsappIcon,
  BrandXIcon,
  LinkIcon,
  usySpacing,
} from "@usy-ui/base";

import { ReferenceTypeUnion } from "@/types";

const iconStyles = {
  maxWidth: "22px",
  minWidth: "22px",
  maxHeight: "22px",
  minHeight: "22px",
};

export const ReferenceIconsConst: Record<ReferenceTypeUnion, ReactNode> = {
  facebook: <BrandFacebookIcon style={iconStyles} />,
  instagram: <BrandInstagramIcon style={iconStyles} />,
  x: <BrandXIcon style={iconStyles} />,
  linkedin: <BrandLinkedinIcon style={iconStyles} />,
  whatsapp: <BrandWhatsappIcon style={iconStyles} />,
  reddit: <BrandRedditIcon style={iconStyles} />,
  github: <BrandGithubIcon style={iconStyles} />,
  custom: <LinkIcon style={iconStyles} />,
};

/**
 * ReferenceIconsArray
 */

type ReferenceIconsArrayType = {
  type: ReferenceTypeUnion;
  iconElement: ReactNode;
};

export const ReferenceIconsArray: ReferenceIconsArrayType[] = Object.keys(
  ReferenceIconsConst
).map((key) => ({
  type: key as ReferenceTypeUnion,
  iconElement: ReferenceIconsConst[key as ReferenceTypeUnion],
}));
