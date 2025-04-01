import Layout from "@/components/Layout";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout>
      <section className="w-full pt-20 min-h-screen bg-background text-text">
        <div className="flex flex-wrap items-center justify-center w-full mx-auto">
          <div className="flex flex-col items-center w-full max-w-md">
            <Image
              src="/contact.png"
              alt="Contact"
              width={320}
              height={320}
              priority
            />
          </div>

          <div className="flex flex-col items-start mt-6 px-2 w-full max-w-md">
            <h1 className=" w-full text-3xl font-light text-primary tracking-wider ">
              Get in Touch
            </h1>
            <form className="flex flex-col mt-4 w-full max-w-md gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 rounded-md bg-gray-200"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-md bg-gray-200"
                required
              />
              <textarea
                placeholder="Your Message"
                className="p-2 rounded-md bg-gray-200 h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md hover:scale-105 duration-300 ease-in"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
