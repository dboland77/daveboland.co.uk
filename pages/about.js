import Layout from "../components/Layout";
import Image from "next/image";

const About = () => (
  <Layout title="About Me">
    <h1>About Me</h1>
    <ul className="company-info">
      <li>
        <span className="company"></span>
      </li>
      <li>3 Oaks Way</li>
      <li>Carshalton, SM5 4NQ</li>
      <li>
        <a href="mailto:dave@daveboland.co.uk">dave@daveboland.co.uk</a>
      </li>
    </ul>
    <div className="about-text">
      <p>
        Hi! <br />
        I'm Dave, a happy javascript developer living in the beautiful suburb of
        Carshalton in London with my wife and two kids. I have been building
        websites and web applications for two years and counting - I love it!
      </p>
      <p>
        I'm a keen runner and pre-COVID could be found knocking about on a
        Saturday morning at the spectacular{" "}
        <a href="https://www.parkrun.org.uk/banstead/">
          Banstead Woods parkrun.{" "}
        </a>
        Much as I love running it on my own I am counting the days down to it's
        return.{" "}
      </p>
      <p>
        Please have a look around my services and portfolio and reach out if you
        would like to chat :)
      </p>
    </div>
  </Layout>
);

export default About;
