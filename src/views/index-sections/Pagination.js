import React from "react";

// reactstrap components
import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function PaginationSection() {
  const [pills, setPills] = React.useState("2");
  return (
    <>
      <div className="section section-pagination">
        <Container>
          <Row>
            <Col md="6">
              <h4>Progress Bars</h4>
              <div className="progress-container">
                <span className="progress-badge">Default</span>
                <Progress max="100" value="25">
                  <span className="progress-value">25%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">Info</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
              <br></br>
              <h4>Navigation Pills</h4>
              <Nav
                className="nav-pills-info nav-pills-just-icons"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    className={pills === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPills("1");
                    }}
                  >
                    <i className="far fa-gem"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={pills === "2" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPills("2");
                    }}
                  >
                    <i className="fa fa-thermometer-full"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={pills === "3" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPills("3");
                    }}
                  >
                    <i className="fa fa-suitcase"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#pablo" disabled>
                    <i className="fa fa-exclamation"></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm="6">
              <h4>Pagination</h4>
              <Pagination
                className="pagination pagination-info"
                listClassName="pagination-info"
              >
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    5
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
              <Pagination>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Previous"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span aria-hidden={true}>
                      <i
                        aria-hidden={true}
                        className="fa fa-angle-double-left"
                      ></i>
                    </span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    aria-label="Next"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <span aria-hidden={true}>
                      <i
                        aria-hidden={true}
                        className="fa fa-angle-double-right"
                      ></i>
                    </span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
              <br></br>
              <h4>Labels</h4>
              <Badge color="default" className="mr-1">
                Default
              </Badge>
              <Badge color="primary" className="mr-1">
                Primary
              </Badge>
              <Badge color="success" className="mr-1">
                Success
              </Badge>
              <Badge color="info" className="mr-1">
                Info
              </Badge>
              <Badge color="warning" className="mr-1">
                Warning
              </Badge>
              <Badge color="danger" className="mr-1">
                Danger
              </Badge>
              <Badge color="neutral">Neutral</Badge>
            </Col>
          </Row>
          <br></br>
          <div className="space"></div>
          <h4>Notifications</h4>
        </Container>
      </div>
    </>
  );
}

export default PaginationSection;
