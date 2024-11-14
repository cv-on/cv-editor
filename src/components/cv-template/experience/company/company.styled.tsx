import { Flex, usyColor } from "@usy-ui/base";
import styled from "styled-components";

export const CompanyFlexStyled = styled(Flex)`
  &:not(:last-child) {
    border-bottom: 1px solid ${usyColor.light1};
  }
`;
