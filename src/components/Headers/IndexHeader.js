import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          data-parallax={true}
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">Now UI Kit.</h1>
            <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>
          </div>
          <h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              ></img>
            </a>
            . Coded by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              ></img>
            </a>
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
