import Head from "next/head";
import HomeAbout from "../components/home/About";
import Contributers from "../components/home/Contributers";
import Footer from "../components/home/Footer";
import Header from "../components/home/Header";
import JoinUs from "../components/home/JoinUs";
import Projects from "../components/home/Projects";
import Quotes from "../components/home/Quotes";
import Technology from "../components/home/Technology";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BlockShala | Best platform to learn WEB3</title>
        <meta name="description" content="Best platform to learn WEB3 | LEARN.BUILD.EARN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Projects/>
      <Technology/>
      <HomeAbout/>
      <Quotes/>
      <Contributers />
      <JoinUs />
    </div>
  );
}
