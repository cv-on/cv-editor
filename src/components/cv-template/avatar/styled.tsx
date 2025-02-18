import { usySpacing } from "@usy-ui/base";
import Image from "next/image";
import styled from "styled-components";

export const ImageStyled = styled(Image)`
  width: 100%;
  margin-top: -${usySpacing.px40};
  margin-bottom: ${usySpacing.px32};
`;
