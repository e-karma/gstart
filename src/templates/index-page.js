import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../modules/Layout";
// import withStyles from "@material-ui/core/styles/withStyles";
// import Parallax from "../components/Parallax/Parallax.jsx";
// import GridContainer from "../components/Grid/GridContainer.jsx";
// import GridItem from "../components/Grid/GridItem.jsx";
import SectionHeaders from "../sections/SectionHeaders/SectionHeaders";
import SectionFeatures from "../sections/SectionFeatures/SectionFeatures";
import SectionContacts from "../sections/SectionContacts/SectionContacts";
import SectionBlogs from "../sections/SectionBlogs/SectionBlogs";
import SectionPricing from "../sections/SectionPricing/SectionPricing";
import SectionProjects from "../sections/SectionProjects/SectionProjects";
import SectionTeams from "../sections/SectionTeams/SectionTeams";
import SectionTestimonials from "../sections/SectionTestimonials/SectionTestimonials";
import "../styles/scss/index.scss";

// import LandingPage from "./LandingPage/LandingPage";
// import presentationStyle from "../views/presentationStyle";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  classes
}) => (
  <React.Fragment>
    <div
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
      // className={classes.parallax}
    >
      {/* <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <div className={classes.brand}>
              <h1>
                Material Kit React
                <span className={classes.proBadge}>PRO</span>
              </h1>
              <h3 className={classes.title}>
                A Badass Material-UI Kit based on Material Design.
              </h3>
            </div>
          </GridItem>
        </GridContainer>
      </div> */}
    </div>
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column"
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
            backgroundColor: "rgb(255, 68, 0)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {subheading}
        </h3>
      </div>
    </div> */}

    <SectionHeaders />
    <SectionFeatures />
    <SectionPricing />
    <SectionContacts />
    <SectionBlogs />
    <SectionPricing />
    <SectionProjects />
    <SectionTeams />
    <SectionTestimonials />

    {/* <SectionDescription />
      <SectionComponents />
      <SectionCards />
      <SectionContent />
      <SectionSections />
      <SectionExamples />
      <SectionFreeDemo />
      <SectionOverview /> */}

    <h1>{title} </h1>
    <h2>{subheading}</h2>
    {/* <h1>{mainpitch.title}</h1>
    <h3>{mainpitch.description}</h3> */}
    <h3>{heading}</h3>
    <p>{description}</p>
  </React.Fragment>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  // mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        # mainpitch {
        #   title
        #   description
        # }
        description
        intro {
          blurbs {
            text
          }
          heading
          description
        }
      }
    }
  }
`;
