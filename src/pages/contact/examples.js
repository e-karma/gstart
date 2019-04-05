import React from "react";
import Link from "gatsby-link";
import Layout from "../../modules/Layout";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section>
          <h1>Hi people</h1>
          <p />
          <ul>
            <li>
              <Link to="/contact">Basic contact form</Link>
            </li>
            <li>
              <Link to="/contact/file-upload/">Form with file upload</Link>
            </li>
          </ul>
        </section>
      </Layout>
    );
  }
}
