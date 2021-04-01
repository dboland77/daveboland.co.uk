import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => (
  <div className="site-wrapper">
    <Head>
      <title>
        {props.title ? `${props.title} | ` : ""}
        Dave Boland - Freelance Web Designer & Developer For Hire in Sutton
      </title>
      {props.description ? (
        <meta name="description" content={props.description} />
      ) : null}
    </Head>

    <Header />

    <div className="content-wrapper">{props.children}</div>

    <Footer />
  </div>
);

export default Layout;
