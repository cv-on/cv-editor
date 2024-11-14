import { BrandGithubIcon, BrandLinkedinIcon } from "@usy-ui/base";

import { ConnectTypeUnion } from "@/types";

export const getBrandIconByType = (type: ConnectTypeUnion) => {
  switch (type) {
    case "github": {
      return <BrandGithubIcon />;
    }
    case "linkedin": {
      return <BrandLinkedinIcon />;
    }
  }
};
