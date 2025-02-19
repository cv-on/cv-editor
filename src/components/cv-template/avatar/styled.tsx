import { usySpacing } from "@usy-ui/base";
import Image from "next/image";
import styled from "styled-components";

export const ImageStyled = styled(Image)`
  width: 100%;
  min-width: 230px;
  max-width: 230px;
  margin-bottom: ${usySpacing.px32};
  margin-top: ${usySpacing.px24};
  border-radius: ${usySpacing.px2};
  object-fit: cover;
  object-position: center;
`;
