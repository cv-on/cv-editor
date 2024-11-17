import { Url } from "./common";

export type ReferenceTypeUnion =
  | "facebook"
  | "instagram"
  | "x"
  | "linkedin"
  | "whatsapp"
  | "reddit"
  | "github"
  | "custom";

export type ReferenceLink = {
  type: ReferenceTypeUnion;
  url: Url;
};

export type PersonalInfoSectionType = {
  avatarSrc: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  summary: string;
  referenceLinks: ReferenceLink[];
};
