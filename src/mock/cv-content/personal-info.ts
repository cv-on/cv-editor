import { PersonalInfoType } from "@/types";

export const personalInfo: PersonalInfoType = {
  avatar: "",
  name: "John Doe",
  position: "Software Developer",
  dateOfBirth: new Date("1995/01/01"),
  email: "john-doe@gmail.com",
  phone: "+(84) 3427373821",
  summary:
    "Passionate and results-driven software developer with [X] years of experience in designing, developing, and implementing high-quality web applications. Proficient in modern JavaScript frameworks like React and Angular, with strong expertise in front-end technologies, responsive design, and state management. Skilled at collaborating with cross-functional teams to deliver scalable, user-focused solution",
  connectLinks: [
    {
      type: "github",
      label: "github.com/john-doe",
      url: "https://github.com/john-doe",
    },
  ],
};
