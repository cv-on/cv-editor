import { Url } from "./common";

export type ConnectTypeUnion = "github" | "linkedin";
type ConnectLink = {
  type: ConnectTypeUnion;
  shortUrl: string;
  fullUrl: Url;
};

export type PersonalInfoSectionType = {
  avatarSrc: string;
  name: string;
  position: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  summary: string;
  connectLinks: ConnectLink[];
};
