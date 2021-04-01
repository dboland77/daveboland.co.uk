import Layout from "../components/Layout";
import Image from "next/image";

const Services = () => (
  <Layout title="Web Services">
    <h1>Services</h1>
    <div className="services">
      <div className="services-list">
        <div className="item">
          <Image
            src="/services/design.jpg"
            alt="Web Design"
            width={400}
            height={300}
          />
          <h2>Web Design</h2>
          <p>
            I can work with you to design the site of your dreams with the
            latest blazing-fast technology and design techniques. All of my
            builds are SEO friendly so google will be optimised for lead
            conversion.
          </p>
        </div>
        <div className="item">
          <Image
            src="/services/react.jpg"
            alt="Web Development"
            width={400}
            height={300}
          />
          <h2>Web Development</h2>
          <p>
            I specialise in front-end development using HTML5, CSS3, Javascript
            and React. I am also an expert back-end developer with 20 years of
            experience with SQL and Node.js
          </p>
        </div>
        <div className="item">
          <img src="/services/SEO.jpg" alt="Website Redesign" />
          <h2>Website Redesign</h2>
          <p>
            I emphasise speed in my websites. (So does Google search). I build
            applications and websites that load every page as close to instantly
            as possible.
          </p>
        </div>
        <div className="item">
          <Image src="/services/responsive.jpg" alt="Responsive" 
            width={400}
            height={300}
          />
          <br />
          <h2>Responsive Design</h2>
          <p>
            Responsive design is a technique used to build mobile-friendly
            devices. This ensures that your website or application will have a
            consistent look and feel across all devices.
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .services {
        max-width: 1000px;
        margin: 0 auto;
      }
      .services-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .services .item {
        padding: 20px;
        margin-bottom: 40px;
        width: 50%;
      }
      img {
        max-width: 100%;
      }
      h2 {
        margin: 0 0 5px 0;
      }
      p {
        font-size: 18px;
        color: #777;
      }
      @media (max-width: 600px) {
        .services .item {
          width: auto;
          padding: 10px 20px;
        }
      }
    `}</style>
  </Layout>
);

export default Services;
