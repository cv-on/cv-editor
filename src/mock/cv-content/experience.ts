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
          projectNames: ["Alpha System Revamp"],
          description: "A platform to biotech management",
          techStacks: ["Angular", "Node.js", "MongoDB"],
          contributions: [
            {
              content:
                "Collaborated with a team to design and implement new features for the Customer Management module in a modular architecture.",
            },
            {
              content:
                "Optimized API endpoints for better performance and reduced latency by 30%.",
            },
            {
              content:
                "Integrated third-party services such as payment gateways and email notifications.",
            },
          ],
          achievements: [
            {
              content:
                "Successfully delivered the project ahead of schedule by 2 weeks.",
            },
            {
              content:
                "Recognized for improving the module's performance, reducing errors by 20%.",
            },
          ],
        },
        {
          clientName: "ShopEase",
          projectNames: ["Beta E-commerce Platform", "ReFace"],
          description: "An online e-commerce which connect clients and sellers",
          techStacks: ["ReactJS", "Express.js", "PostgreSQL"],
          contributions: [
            {
              content:
                "Developed and maintained the Product Catalog and Search modules, ensuring seamless user experience.",
            },
            {
              content:
                "Worked on implementing server-side rendering (SSR) to improve website load times.",
            },
            {
              content:
                "Collaborated with UI/UX designers to create responsive and accessible web components.",
            },
          ],
          achievements: [
            {
              content:
                "Improved website performance, resulting in a 25% increase in user retention.",
            },
            {
              content:
                "Played a key role in achieving 99.9% uptime for the platform during peak holiday seasons.",
            },
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
          projectNames: ["Gamma Healthcare Dashboard"],
          description: "Book health check and manage client health info",
          techStacks: ["Vue.js", "Firebase", "Python (Flask)"],
          contributions: [
            {
              content:
                "Designed and implemented real-time data visualization dashboards for healthcare analytics.",
            },
            {
              content:
                "Integrated Firebase for secure authentication and cloud storage of sensitive data.",
            },
            {
              content:
                "Coordinated with backend teams to ensure smooth API integration for live updates.",
            },
          ],
          achievements: [
            {
              content:
                "Delivered the dashboard with 100% client satisfaction, praised for intuitive design.",
            },
            {
              content:
                "Reduced data processing time by 40% through optimized database queries and caching strategies.",
            },
          ],
        },
      ],
    },
  ],
};
