import { PersonalInfoSectionType } from "@/types";

import { AvatarSrcConst } from "../images/avatar";

export const personalInfo: PersonalInfoSectionType = {
  avatarSrc: AvatarSrcConst,
  name: "John Doe",
  position: "Senior Fullstack Developer",
  dateOfBirth: new Date("2000/01/01"),
  email: "john-doe@gmail.com",
  phone: "+84 111 222 333",
  summary: `
    Highly skilled Senior Fullstack Developer with over [X years] of experience building scalable, high-performance web 
    applications. Proficient in modern frontend frameworks like React and robust backend solutions with Node.js and NestJS. 
    Adept at designing RESTful APIs, integrating databases, and ensuring system reliability. Strong passion for architecting 
    full-stack solutions, mentoring teams, and driving end-to-end product development`,
  referenceLinks: [
    {
      type: "linkedin",
      shortUrl: "linkedin.com/in/john-doe",
      fullUrl: "https://linkedin.com/in/john-doe",
    },
    {
      type: "github",
      shortUrl: "github.com/john-doe",
      fullUrl: "https://github.com/john-doe",
    },
  ],
};
