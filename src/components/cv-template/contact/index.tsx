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
import Link from "next/link";

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
        url: "https://github.com/orgs/exper-projects",
      },
      {
        icon: <BrandLinkedinIcon />,
        label: "linkedin.com/in/anhthi-ieig",
        url: "https://www.linkedin.com/in/anhthi-ieig/",
      },
    ],
    []
  );

  return (
    <>
      <Section title="Contact">
        {itemsMemo.map(({ icon, label, url }) => (
          <Flex key={label} marginProps={{ marginBottom: usySpacing.px10 }}>
            {icon}
            &nbsp;&nbsp;
            {url ? (
              <Link href={url} target="_blank">
                <Typography size="small">{label}</Typography>
              </Link>
            ) : (
              <Typography size="small">{label}</Typography>
            )}
          </Flex>
        ))}
      </Section>
    </>
  );
};
