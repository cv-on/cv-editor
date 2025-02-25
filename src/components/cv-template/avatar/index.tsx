import { useRecoilValue } from "recoil";

import { personalInfoSelector } from "@/app-states";

import { ImageStyled } from "./styled";

export const AvatarSection = () => {
  const personalInfo = useRecoilValue(personalInfoSelector);

  return (
    <ImageStyled
      src={personalInfo.avatarSrc}
      alt={personalInfo.name}
      width={230}
      height={256}
    />
  );
};
