import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { getStaticProps } from "@/data/projects";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-start w-full pt-20 min-h-screen bg-background text-text">
        <h1 className="w-full text-3xl px-2 font-light text-primary tracking-wider">
          Projects
        </h1>
        <p className="mt-4 px-2 text-base font-light text-text">
          Here are some of the projects I've worked on:
        </p>
        <div className="flex flex-wrap items-start justify-start w-full mt-6 px-2 gap-4">
          {/* Add your project components here */}
          {projects.map((project) => (
            <div key={project.id} className="mb-8">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export { getStaticProps };
