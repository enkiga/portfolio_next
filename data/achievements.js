export const achievements = [
  {
    id: 1,
    title: "Completed React Course",
    description:
      "Successfully completed a comprehensive course on React, covering hooks, state management, and component lifecycle.",
    date: "2023-01-15",
    image: "/achievements/react-course.png",
    link: "https://example.com/react-course",
    technologies: ["React", "JavaScript"],
  },
  {
    id: 2,
    title: "Built a Personal Portfolio",
    description:
      "Created a personal portfolio website to showcase my projects and skills, utilizing HTML, CSS, and JavaScript.",
    date: "2023-03-10",
    image: "/achievements/portfolio.png",
    link: "https://example.com/portfolio",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Leetcode Challenge Completion",
    description:
      "Completed 50 Leetcode challenges to improve problem-solving skills and algorithm knowledge.",
    date: "2023-05-20",
    image: "/achievements/leetcode.png",
    link: "https://leetcode.com/username",
    technologies: ["Algorithms", "Data Structures"],
  },
];

export async function getStaticProps() {
  return {
    props: {
      achievements,
    },
  };
}
