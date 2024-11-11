import { useMemo } from "react";

import {
  BrandGithubIcon,
  BrandLinkedinIcon,
  EnvelopeIcon,
  Flex,
  PhoneIcon,
  Typography,
  usySpacing,
} from "@usy-ui/base";

import { Section } from "../../section";

export const Contact = () => {
  const itemsMemo = useMemo(
    () => [
      {
        icon: <EnvelopeIcon />,
        label: "anhthi.ieig@gmail.com",
      },
      {
        icon: <PhoneIcon />,
        label: "(+84) 342777610",
      },
      {
        icon: <BrandGithubIcon />,
        label: "github.com/orgs/exper-projects",
      },
      {
        icon: <BrandLinkedinIcon />,
        label: "linkedin.com/in/anhthi-ieig",
      },
    ],
    []
  );

  return (
    <>
      <Section title="Contact">
        {itemsMemo.map(({ icon, label }) => (
          <Flex key={label} marginProps={{ marginBottom: usySpacing.px10 }}>
            {icon}
            &nbsp;&nbsp;
            <Typography size="small">{label}</Typography>
          </Flex>
        ))}
      </Section>
    </>
  );
};
