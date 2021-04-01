import Link from "next/link";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

const images = [
  "/portfolio/1.png",
  "/portfolio/2.png",
  "/portfolio/3.png",
  "/portfolio/4.png",
];

const Homepage = () => (
  <Layout>
    <div className="cover">
      <div className="hello">
        <h1>Hi, I'm Dave</h1>
        <div>
          I'm an experienced professional web developer. Welcome to my site.{" "}
        </div>
        <Link href="/services">
          <a className="view-more">What I do</a>
        </Link>
      </div>
    </div>
    <div className="latest-work">
      <h2>Latest Work</h2>
      <Gallery images={images} />
      <div className="">
        <Link href="/portfolio">
          <a className="view-more">View All</a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default Homepage;
