import { useRecoilValue } from "recoil";

import { certificationsSelector } from "@/app-states/certifications";
import { GrayBoard } from "@/components/gray-board";

import { Achievement } from "./achievement";

export const CertificationsSection = () => {
  const certifications = useRecoilValue(certificationsSelector);

  return (
    <GrayBoard title="Certifications">
      {certifications.certificationItems.map(({ content }) => (
        <Achievement key={content.substring(0, 10)} content={content} />
      ))}
    </GrayBoard>
  );
};
