import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import bg5 from "../../img/bg5.jpg";
// import Button from "components/CustomButtons/Button.jsx";
// // sections for this page
// import SectionDescription from "views/PresentationPage/Sections/SectionDescription.jsx";
// import SectionComponents from "views/PresentationPage/Sections/SectionComponents.jsx";
// import SectionCards from "views/PresentationPage/Sections/SectionCards.jsx";
// import SectionContent from "views/PresentationPage/Sections/SectionContent.jsx";
// import SectionSections from "views/PresentationPage/Sections/SectionSections.jsx";
// import SectionExamples from "views/PresentationPage/Sections/SectionExamples.jsx";
// import SectionFreeDemo from "views/PresentationPage/Sections/SectionFreeDemo.jsx";
// import SectionOverview from "views/PresentationPage/Sections/SectionOverview.jsx";
// import SectionPricing from "views/PresentationPage/Sections/SectionPricing.jsx";

import presentationStyle from "../../components/presentationStyle.jsx";

class PresentationPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          brand="Material Kit PRO React"
          // links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "info"
          }}
        />
        <Parallax image={bg5} className={classes.parallax}>
          <div className={classes.container}>
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
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          {/* <SectionDescription />
          <SectionComponents />
          <SectionCards />
          <SectionContent />
          <SectionSections />
          <SectionExamples />
          <SectionFreeDemo />
          <SectionOverview /> */}
        </div>
        {/* <SectionPricing /> */}
      </div>
    );
  }
}

export default withStyles(presentationStyle)(PresentationPage);
