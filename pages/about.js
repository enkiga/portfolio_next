import Layout from "@/components/Layout";
import { getStaticProps } from "@/data/workExperience";
import Timeline from "@/components/Timeline";

export default function About({ WorkExperience }) {
  return (
    <Layout>
      <section className="w-full pt-20 min-h-screen bg-background text-text">
        {/* Intro */}
        <div className="flex flex-col items-start">
          <h1 className=" w-full text-3xl px-2 font-light text-primary tracking-wider">
            About Me
          </h1>
          <p className="mt-4 px-2 text-base font-light text-text">
            I'm <span className="font-medium font-mono">Enoch Garoli</span>, a{" "}
            <span className="underline underline-offset-4 decoration-primary decoration-2">
              software engineer
            </span>{" "}
            who occasionally writes code that actually works (most of the time
            <span className="cursor-pointer">🙃</span>). I'm passionate about
            building user-friendly applications that don't spontaneously
            combust, and I have a knack for turning caffeine into code ☕.
          </p>
        </div>
        {/* Experience */}
        <div className="flex flex-col items-start mt-6">
          <h1 className=" w-full text-3xl px-2 font-light text-primary tracking-wider ">
            Work Experience
          </h1>
          <div className="flex flex-col w-full mt-4 px-2">
            {WorkExperience.map((experience) => (
              <div
                key={experience.id}
                className={`mb-8 ${
                  experience.id === experience.length - 1 ? "mb-0" : ""
                }`}
              >
                <Timeline {...experience} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export { getStaticProps };
