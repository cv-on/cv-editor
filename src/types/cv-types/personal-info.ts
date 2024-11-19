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
  url: string;
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
