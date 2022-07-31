import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Typography() {
  return (
    <>
      <div className="section">
        <Container>
          <h3 className="title">Typography</h3>
          <div id="typography">
            <Row>
              <Col md="12">
                <div className="typography-line">
                  <h1>
                    <span>Header 1</span>
                    The Life of Now UI Kit
                  </h1>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Header 2</span>
                    The Life of Now UI Kit
                  </h2>
                </div>
                <div className="typography-line">
                  <h3>
                    <span>Header 3</span>
                    The Life of Now UI Kit
                  </h3>
                </div>
                <div className="typography-line">
                  <h4>
                    <span>Header 4</span>
                    The Life of Now UI Kit
                  </h4>
                </div>
                <div className="typography-line">
                  <h5>
                    <span>Header 5</span>
                    The Life of Now UI Kit
                  </h5>
                </div>
                <div className="typography-line">
                  <h6>
                    <span>Header 6</span>
                    The Life of Now UI Kit
                  </h6>
                </div>
                <div className="typography-line">
                  <p>
                    <span>Paragraph</span>I will be the leader of a company that
                    ends up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus. I think
                    that’s a responsibility that I have, to push possibilities,
                    to show people, this is the level that things could be at.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Quote</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br></br>
                      <br></br>
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <span>Muted Text</span>
                  <p className="text-muted">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Primary Text</span>
                  <p className="text-primary">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Info Text</span>
                  <p className="text-info">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Success Text</span>
                  <p className="text-success">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Warning Text</span>
                  <p className="text-warning">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Danger Text</span>
                  <p className="text-danger">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Small Tag</span>
                    Header with small subtitle <br></br>
                    <small>Use "small" tag for the headers</small>
                  </h2>
                </div>
              </Col>
            </Row>
          </div>
          <div className="space-50"></div>
          <div id="images">
            <h4>Images</h4>
            <Row>
              <Col sm="2">
                <p className="category">Image</p>
                <img
                  alt="..."
                  className="rounded"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Circle Image</p>
                <img
                  alt="..."
                  className="rounded-circle"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Raised</p>
                <img
                  alt="..."
                  className="rounded img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
              <Col sm="2">
                <p className="category">Circle Raised</p>
                <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/julie.jpg")}
                ></img>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Typography;
