/*eslint-disable*/
import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

class License extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          License
        </h1>
        <p className="bd-lead" />
        <p>
          Currently, on{" "}
          <a
            href="https://www.creative-tim.com/?ref=nukr-docs-license-page"
            target="_blank"
          >
            Creative Tim
          </a>{" "}
          you can get the products with two types of licenses: Personal or
          Developer. All the freebies are licensed to Personal License as
          default. If you are making a paid purchase, be sure to go through the
          table with the rights and the guidelines, so you can know what is the
          best fit for you. View the rights table and the description for each
          license on our{" "}
          <a
            href="http://www.creative-tim.com/license?ref=nukr-docs-license-page"
            target="_blank"
          >
            Official License Page
          </a>
          .
        </p>
      </>
    );
  }
}

export default License;
