import React from "react";

// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <a
                href="examples/landing-page.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                href="examples/landing-page.html"
                outline
              >
                View Landing Page
              </Button>
            </div>
            <div className="col">
              <a
                href="examples/profile-page.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/profile.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                href="examples/profile-page.html"
                outline
              >
                View Profile Page
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
