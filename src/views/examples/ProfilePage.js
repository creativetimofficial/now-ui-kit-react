import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

function ProfilePage() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <html lang="en">
        <head>
          <meta charset="utf-8"></meta>
          <link
            href="../assets/img/apple-icon.png"
            rel="apple-touch-icon"
            sizes="76x76"
          ></link>
          <link
            href="../assets/img/favicon.png"
            rel="icon"
            type="image/png"
          ></link>
          <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"></meta>
          <title>Now UI Kit by Creative Tim</title>
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
            name="viewport"
          ></meta>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
            rel="stylesheet"
          ></link>
          <link
            crossorigin="anonymous"
            href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            rel="stylesheet"
          ></link>
          <link href="../assets/css/bootstrap.min.css" rel="stylesheet"></link>
          <link
            href="../assets/css/now-ui-kit.css?v=1.3.0"
            rel="stylesheet"
          ></link>
          <link href="../assets/demo/demo.css" rel="stylesheet"></link>
        </head>
        <body className="profile-page sidebar-collapse">
          <Navbar
            className="bg-primary fixed-top navbar-transparent"
            color-on-scroll="400"
            expand="lg"
          >
            <Container>
              <UncontrolledDropdown className="button-dropdown">
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdown"
                  onClick={e => e.preventDefault()}
                >
                  <span className="button-bar"></span>
                  <span className="button-bar"></span>
                  <span className="button-bar"></span>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdown">
                  <DropdownItem header>Dropdown header</DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Something else here
                  </DropdownItem>
                  <DropdownItem divider></DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Separated link
                  </DropdownItem>
                  <DropdownItem divider></DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    One more separated link
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <div className="navbar-translate">
                <NavbarBrand
                  data-placement="bottom"
                  href="https://demos.creative-tim.com/now-ui-kit/index.html"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Designed by Invision. Coded by Creative Tim"
                >
                  Now Ui Kit
                </NavbarBrand>
                <button
                  aria-controls="navigation-index"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler navbar-toggler"
                  data-target="#navigation"
                  data-toggle="collapse"
                  id="navigation"
                  type="button"
                >
                  <span className="navbar-toggler-bar top-bar"></span>
                  <span className="navbar-toggler-bar middle-bar"></span>
                  <span className="navbar-toggler-bar bottom-bar"></span>
                </button>
              </div>
              <UncontrolledCollapse
                className="justify-content-end"
                data-nav-image="../assets/img/blurred-image-1.jpg"
                id="navigation"
                navbar
                toggler="#navigation"
              >
                <Nav navbar>
                  <NavItem>
                    <NavLink href="../index.html">Back to Kit</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/creativetimofficial/now-ui-kit/issues">
                      Have an issue?
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-placement="bottom"
                      href="https://twitter.com/CreativeTim"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Follow us on Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                      <p className="d-lg-none d-xl-none">Twitter</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-placement="bottom"
                      href="https://www.facebook.com/CreativeTim"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Like us on Facebook"
                    >
                      <i className="fab fa-facebook-square"></i>
                      <p className="d-lg-none d-xl-none">Facebook</p>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-placement="bottom"
                      href="https://www.instagram.com/CreativeTimOfficial"
                      rel="noopener noreferrer"
                      target="_blank"
                      title="Follow us on Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                      <p className="d-lg-none d-xl-none">Instagram</p>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <div className="wrapper">
            <div
              className="page-header clear-filter page-header-small"
              filter-color="orange"
            >
              <div
                className="page-header-image"
                data-parallax={true}
                style={{ backgroundImage: "url('../assets/img/bg5.jpg')" }}
              ></div>
              <Container>
                <div className="photo-container">
                  <img alt="..." src={require("assets/img/ryan.jpg")}></img>
                </div>
                <h3 className="title">Ryan Scheinder</h3>
                <p className="category">Photographer</p>
                <div className="content">
                  <div className="social-description">
                    <h2>26</h2>
                    <p>Comments</p>
                  </div>
                  <div className="social-description">
                    <h2>26</h2>
                    <p>Comments</p>
                  </div>
                  <div className="social-description">
                    <h2>48</h2>
                    <p>Bookmarks</p>
                  </div>
                </div>
              </Container>
            </div>
            <div className="section">
              <Container>
                <div className="button-container">
                  <Button
                    className="btn-round"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Follow
                  </Button>
                  <Button
                    className="btn-round btn-icon"
                    color="default"
                    href="#pablo"
                    id="tooltip515203352"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip515203352">
                    Follow me on Twitter
                  </UncontrolledTooltip>
                  <Button
                    className="btn-round btn-icon"
                    color="default"
                    href="#pablo"
                    id="tooltip340339231"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip340339231">
                    Follow me on Instagram
                  </UncontrolledTooltip>
                </div>
                <h3 className="title">About me</h3>
                <h5 className="description">
                  An artist of considerable range, Ryan — the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure. An artist of
                  considerable range.
                </h5>
                <Row>
                  <Col className="ml-auto mr-auto" md="6">
                    <h4 className="title text-center">My Portfolio</h4>
                    <div className="nav-align-center">
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
                            <i className="now-ui-icons design_image"></i>
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
                            <i className="now-ui-icons location_world"></i>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            role="tablist"
                          >
                            <i className="now-ui-icons sport_user-run"></i>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Col>
                  <TabContent className="gallery">
                    <TabPane className="active" id="home" role="tabpanel">
                      <Col className="ml-auto mr-auto" md="10">
                        <Row className="collections">
                          <Col md="6">
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg1.jpg")}
                            ></img>
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg3.jpg")}
                            ></img>
                          </Col>
                          <Col md="6">
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg8.jpg")}
                            ></img>
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg7.jpg")}
                            ></img>
                          </Col>
                        </Row>
                      </Col>
                    </TabPane>
                    <TabPane id="profile" role="tabpanel">
                      <Col className="ml-auto mr-auto" md="10">
                        <Row className="collections">
                          <Col md="6">
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg6.jpg")}
                            ></img>
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg11.jpg")}
                            ></img>
                          </Col>
                          <Col md="6">
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg7.jpg")}
                            ></img>
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg8.jpg")}
                            ></img>
                          </Col>
                        </Row>
                      </Col>
                    </TabPane>
                    <TabPane id="messages" role="tabpanel">
                      <Col className="ml-auto mr-auto" md="10">
                        <Row className="collections">
                          <Col md="6">
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg3.jpg")}
                            ></img>
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg8.jpg")}
                            ></img>
                          </Col>
                          <Col md="6">
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg7.jpg")}
                            ></img>
                            <img
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/bg6.jpg")}
                            ></img>
                          </Col>
                        </Row>
                      </Col>
                    </TabPane>
                  </TabContent>
                </Row>
              </Container>
            </div>
            <footer className="footer footer-default">
              <Container>
                <nav>
                  <ul>
                    <li>
                      <a href="https://www.creative-tim.com">Creative Tim</a>
                    </li>
                    <li>
                      <a href="http://presentation.creative-tim.com">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="http://blog.creative-tim.com">Blog</a>
                    </li>
                  </ul>
                </nav>
                <div className="copyright" id="copyright">
                  ©{" "}
                  <script>
                    document.getElementById('copyright').appendChild(document.createTextNode(new
                    Date().getFullYear()))
                  </script>
                  , Designed by{" "}
                  <a
                    href="https://www.invisionapp.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Invision
                  </a>
                  . Coded by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                  .
                </div>
              </Container>
            </footer>
          </div>
          <script
            src="../assets/js/core/jquery.min.js"
            type="text/javascript"
          ></script>
          <script
            src="../assets/js/core/popper.min.js"
            type="text/javascript"
          ></script>
          <script
            src="../assets/js/core/bootstrap.min.js"
            type="text/javascript"
          ></script>
          <script src="../assets/js/plugins/bootstrap-switch.js"></script>
          <script
            src="../assets/js/plugins/nouislider.min.js"
            type="text/javascript"
          ></script>
          <script
            src="../assets/js/plugins/bootstrap-datepicker.js"
            type="text/javascript"
          ></script>
          <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
          <script
            src="../assets/js/now-ui-kit.js?v=1.3.0"
            type="text/javascript"
          ></script>
        </body>
      </html>
    </>
  );
}

export default ProfilePage;
