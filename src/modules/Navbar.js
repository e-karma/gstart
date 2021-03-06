import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
// import github from "../img/github-icon.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav role="navigation" aria-label="main-navigation">
        <div>
          <div>
            <Link to="/" title="Logo">
              <img src={logo} alt="eWeb" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div>
              <Link to="/about">About</Link>
              <Link to="/products">Products</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/contact/examples">Form Examples</Link>
            </div>
            <div>
              <a
                href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{/* <img src={github} alt="Github" /> */}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
