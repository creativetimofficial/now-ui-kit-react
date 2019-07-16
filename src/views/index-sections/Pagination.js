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
  return (
    <>
      <div className="section section-pagination">
        <Container>
          <Row>
            <Col md="6">
              <h4>Progress Bars</h4>
              <div className="progress-container">
                <span className="progress-badge">Default</span>
                <Progress max="100" value="60">
                  <span className="progress-value">25%</span>
                </Progress>
              </div>
              <div className="progress-container progress-primary">
                <span className="progress-badge">Primary</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>
              <br></br>
              <h4>Navigation Pills</h4>
              <Nav
                className="nav-pills-primary nav-pills-just-icons"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    role="tablist"
                  >
                    <i className="far fa-gem"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="active"
                    data-toggle="tab"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    role="tablist"
                  >
                    <i className="fa fa-thermometer-full"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    data-toggle="tab"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    role="tablist"
                  >
                    <i className="fa fa-suitcase"></i>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="disabled"
                    data-toggle="tab"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    role="tablist"
                  >
                    <i className="fa fa-exclamation"></i>
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm="6">
              <h4>Pagination</h4>
              <Pagination
                className="pagination pagination-primary"
                listclassName="pagination-primary"
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
              <Badge className="badge-default">Default</Badge>
              <Badge color="primary">Primary</Badge>
              <Badge color="success">Success</Badge>
              <Badge color="info">Info</Badge>
              <Badge color="warning">Warning</Badge>
              <Badge color="danger">Danger</Badge>
              <Badge className="badge-neutral">Neutral</Badge>
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
