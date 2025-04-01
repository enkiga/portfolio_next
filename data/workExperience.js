export const WorkExperience = [
  {
    id: 1,
    title: "IT intern",
    company: "Flag Forty Two Limited",
    logo: "/flag42.png",
    date: "2022 - 2023",
    description: [
      "Worked on various projects, including a web application for managing client data and a mobile app for tracking employee attendance.",
      "Collaborated with cross-functional teams to gather requirements and deliver high-quality software solutions.",
      "Participated in code reviews and contributed to the development of best practices for software development.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Tech Innovators Inc.",
    logo: "/tech-innovators.png",
    date: "2023 - Present",
    description: [
      "Developing and maintaining web applications using React and Node.js.",
      "Implementing RESTful APIs and integrating third-party services.",
      "Collaborating with designers and product managers to create user-friendly interfaces.",
    ],
  },
];

export async function getStaticProps() {
  return {
    props: {
      WorkExperience,
    },
  };
}
