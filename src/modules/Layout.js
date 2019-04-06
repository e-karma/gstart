import React from "react";
import Helmet from "react-helmet";
import Footer from "../modules/Footer";
// import Navbar from "../modules/Navbar";
import "./all.sass";
import "circular-std";
import useSiteMetadata from "./SiteMetadata";
import Header from "../components/Header/Header.jsx";
import HeaderLinks from "../components/Header/HeaderLinks.jsx";
// var hist = createBrowserHistory();

const TemplateWrapper = ({ children }) => {
  //  componentDidMount() {
  //    window.scrollTo(0, 0);
  //    document.body.scrollTop = 0;
  //  }
  const { title, description, classes, ...rest } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      {/* <Navbar /> */}
      <Header
        brand="eWebDesign.co"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 100,
          color: "info"
        }}
        {...rest}
      />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
