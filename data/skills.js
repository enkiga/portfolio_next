export const skills = [
  {
    id: 1,
    name: "JavaScript",
    level: "Advanced",
    image: "/skills/javascript.png",
    description:
      "Proficient in JavaScript, including ES6+ features and asynchronous programming.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    projects: [
      "E-commerce Website",
      "Portfolio Website",
      "Blog Platform",
      "Chat Application",
      "Weather App",
    ],
  },
  {
    id: 2,
    name: "React",
    level: "Intermediate",
    image: "/skills/react.png",
    description:
      "Experienced in building single-page applications using React and its ecosystem.",
    link: "https://reactjs.org/",
    projects: ["E-commerce Website", "Portfolio Website", "Weather App"],
  },
  {
    id: 3,
    name: "Node.js",
    level: "Intermediate",
    image: "/skills/nodejs.png",
    description:
      "Skilled in building server-side applications using Node.js and Express.",
    link: "https://nodejs.org/en/",
    projects: ["E-commerce Website", "Chat Application"],
  },
];

export async function getStaticProps() {
  return {
    props: {
      skills,
    },
  };
}
