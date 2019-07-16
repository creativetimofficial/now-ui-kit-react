import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          data-parallax={true}
          style={{
            backgroundImage: "url(" + require("assets/img/bg6.jpg") + ")"
          }}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">This is our great company.</h1>
            <div className="text-center">
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-icon btn-round"
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="fab fa-google-plus"></i>
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
