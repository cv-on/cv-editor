import { ConnectTypeUnion } from "@/types";
import { BrandGithubIcon, BrandLinkedinIcon } from "@usy-ui/base";

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
