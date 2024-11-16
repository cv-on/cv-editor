import { BrandGithubIcon, BrandLinkedinIcon } from "@usy-ui/base";

import { ConnectTypeUnion } from "@/types";

export const getBrandIconByType = (type: ConnectTypeUnion) => {
  switch (type) {
    case "github": {
      return (
        <BrandGithubIcon
          style={{
            minWidth: "22px",
            maxWidth: "22px",
            minHeight: "22px",
            maxHeight: "22px",
          }}
        />
      );
    }
    case "linkedin": {
      return (
        <BrandLinkedinIcon
          style={{
            minWidth: "22px",
            maxWidth: "22px",
            minHeight: "22px",
            maxHeight: "22px",
          }}
        />
      );
    }
  }
};
