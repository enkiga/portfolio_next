export const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "An e-commerce website built with React and Node.js, featuring a user-friendly interface and secure payment processing.",
    image: "/projects/ecommerce.png",
    link: "https://ecommerce-website.com",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills, built with HTML, CSS, and JavaScript.",
    image: "/projects/portfolio.png",
    link: "https://myportfolio.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A blog platform built with Django and PostgreSQL, allowing users to create and manage their own blogs.",
    image: "/projects/blog.png",
    link: "https://blogplatform.com",
    technologies: ["Django", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Chat Application",
    description:
      "A real-time chat application built with Socket.io and Node.js, featuring user authentication and message history.",
    image: "/projects/chat.png",
    link: "https://chatapplication.com",
    technologies: ["Socket.io", "Node.js"],
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A weather application built with React and OpenWeatherMap API, providing real-time weather updates.",
    image: "/projects/weather.png",
    link: "https://weatherapp.com",
    technologies: ["React", "OpenWeatherMap API"],
  },
];

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}
