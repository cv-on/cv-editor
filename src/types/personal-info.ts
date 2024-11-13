import { Url } from "./common";

type ConnectLink = {
  type: "github" | "linkedin";
  label: string;
  url: Url;
};

export type PersonalInfoType = {
  avatar: string;
  name: string;
  position: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  summary: string;
  connectLinks: ConnectLink[];
};
