import { usySpacing } from "@usy-ui/base";
import Image from "next/image";
import styled from "styled-components";

export const ImageStyled = styled(Image)`
  width: 100%;
  min-width: 230px;
  max-width: 230px;
  min-height: 256px;
  max-height: 256px;
  margin-bottom: ${usySpacing.px32};
  border-radius: ${usySpacing.px2};
`;
