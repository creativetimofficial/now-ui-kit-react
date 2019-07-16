import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CarouselSection() {
  return (
    <>
      <div className="section" id="carousel">
        <Container>
          <div className="title">
            <h4>Carousel</h4>
          </div>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <div
                className="carousel slide"
                data-ride="carousel"
                id="carouselExampleIndicators"
              >
                <ol className="carousel-indicators">
                  <li
                    className="active"
                    data-slide-to="0"
                    data-target="#carouselExampleIndicators"
                  ></li>
                  <li
                    data-slide-to="1"
                    data-target="#carouselExampleIndicators"
                  ></li>
                  <li
                    data-slide-to="2"
                    data-target="#carouselExampleIndicators"
                  ></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      alt="..."
                      className="d-block"
                      src={require("assets/img/bg1.jpg")}
                    ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Nature, United States</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      alt="..."
                      className="d-block"
                      src={require("assets/img/bg3.jpg")}
                    ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Somewhere Beyond, United States</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      alt="..."
                      className="d-block"
                      src={require("assets/img/bg4.jpg")}
                    ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Yellowstone National Park, United States</h5>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CarouselSection;
