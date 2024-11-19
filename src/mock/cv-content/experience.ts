import { ExperienceSectionType } from "@/types";

export const experience: ExperienceSectionType = {
  companies: [
    {
      companyName: "GBK Technologies",
      fromDate: new Date("2020/01/01").toISOString(),
      toDate: "present",
      position: "Senior Fullstack Developer",
      projects: [
        {
          clientName: "TechCorp",
          projectName: "Alpha System Revamp",
          techStacks: ["Angular", "Node.js", "MongoDB"],
          responsibilities: [
            "Collaborated with a team to design and implement new features for the Customer Management module in a modular architecture.",
            "Optimized API endpoints for better performance and reduced latency by 30%.",
            "Integrated third-party services such as payment gateways and email notifications.",
          ],
          achievements: [
            "Successfully delivered the project ahead of schedule by 2 weeks.",
            "Recognized for improving the module's performance, reducing errors by 20%.",
          ],
        },
        {
          clientName: "ShopEase",
          projectName: "Beta E-commerce Platform, ReFace",
          techStacks: ["ReactJS", "Express.js", "PostgreSQL"],
          responsibilities: [
            "Developed and maintained the Product Catalog and Search modules, ensuring seamless user experience.",
            "Worked on implementing server-side rendering (SSR) to improve website load times.",
            "Collaborated with UI/UX designers to create responsive and accessible web components.",
          ],
          achievements: [
            "Improved website performance, resulting in a 25% increase in user retention.",
            "Played a key role in achieving 99.9% uptime for the platform during peak holiday seasons.",
          ],
        },
      ],
    },
    {
      companyName: "MediFlow Solutions",
      fromDate: new Date("2018/05/01").toISOString(),
      toDate: new Date("2020/01/01").toISOString(),
      position: "Senior Fullstack Developer",
      projects: [
        {
          projectName: "Gamma Healthcare Dashboard",
          techStacks: ["Vue.js", "Firebase", "Python (Flask)"],
          responsibilities: [
            "Designed and implemented real-time data visualization dashboards for healthcare analytics.",
            "Integrated Firebase for secure authentication and cloud storage of sensitive data.",
            "Coordinated with backend teams to ensure smooth API integration for live updates.",
          ],
          achievements: [
            "Delivered the dashboard with 100% client satisfaction, praised for intuitive design.",
            "Reduced data processing time by 40% through optimized database queries and caching strategies.",
          ],
        },
      ],
    },
  ],
};
