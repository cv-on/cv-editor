import { Flex } from "@usy-ui/base";

import { CvTemplate } from "../../components/cv-template";

const PreviewPage = () => {
  return (
    <Flex justifyContent="center">
      <CvTemplate isRenderMode />
    </Flex>
  );
};

export default PreviewPage;
