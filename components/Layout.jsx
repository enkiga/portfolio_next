import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
