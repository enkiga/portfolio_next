import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="w-full mx-auto flex flex-wrap items-center justify-center gap-6 h-screen bg-background text-text">
        <div className="flex flex-col items-start">
          <h1 className="text-sm font-light text-primary tracking-wider">
            Welcome to my portfolio
          </h1>
          <h1 className="text-5xl font-extrabold"><span className="font-medium">I'm</span> Enoch Garoli .</h1>
          <p className="bg-primary rounded-full py-0.5 px-2 text-xs text-white self-end">
            Software Developer
          </p>
          {/* CTA */}
          <div className="flex flex-wrap items-start mt-8 w-full gap-2 text-sm">
            <button className="bg-primary text-white px-4 py-2 rounded-md w-full md:w-auto hover:scale-105 duration-300 ease-in">
              <Link href="/projects">View Projects</Link>
            </button>
            <button className="bg-secondary text-white px-4 py-2 rounded-md w-full md:w-auto hover:scale-105 duration-300 ease-in">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/profile.png"
            alt="Profile"
            width={300}
            height={300}
            priority
          />
        </div>
      </section>
    </Layout>
  );
}
