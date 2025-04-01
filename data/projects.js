export const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "An e-commerce website built with React and Node.js, featuring a user-friendly interface and secure payment processing.",
    image: "/ecommerce.jpg",
    link: "https://ecommerce-website.com",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills, built with HTML, CSS, and JavaScript.",
    image: "/portfolio.png",
    link: "https://myportfolio.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A blog platform built with Django and PostgreSQL, allowing users to create and manage their own blogs.",
    image: "/blog.jpg",
    link: "https://blogplatform.com",
    technologies: ["Django", "PostgreSQL"],
  },
];

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}
