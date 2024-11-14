import { PersonalInfoSectionType } from "@/types";

import { AvatarSrcConst } from "../images/avatar";

export const personalInfo: PersonalInfoSectionType = {
  avatarSrc: AvatarSrcConst,
  name: "Thi Nguyen",
  position: "Senior Frontend Developer",
  dateOfBirth: new Date("1995/05/13"),
  email: "anhthi.ieig@gmail.com",
  phone: "+84 342 777 610",
  summary: `
    Integrity, Emotion, Innovation, and Giving are four key lifestyles I always chase. I'm Thi Nguyen, 
    a senior developer who has 6 years of experience in software development. To me, every line of code 
    must be optimized, maintainable, and easy to scale. I believe we're not only developers, we're also 
    owners of products who understand and bring solutions to solve customer's problems`,
  connectLinks: [
    {
      type: "linkedin",
      shortUrl: "linkedin.com/in/anhthi-ieig",
      fullUrl: "https://linkedin.com/in/anhthi-ieig",
    },
    {
      type: "github",
      shortUrl: "github.com/orgs/exper-projects",
      fullUrl: "https://github.com/orgs/exper-projects",
    },
  ],
};
