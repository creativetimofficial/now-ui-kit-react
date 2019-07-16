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
  Container
} from "reactstrap";

function IndexNavbar() {
  return (
    <>
      <Navbar
        className="bg-primary fixed-top navbar-transparent"
        color-on-scroll="400"
        expand="lg"
      >
        <Container>
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
            data-nav-image="./assets/img/blurred-image-1.jpg"
            id="navigation"
            navbar
            toggler="#navigation"
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="#pablo" onClick="scrollToDownload()">
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Download</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>Components</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
                  <DropdownItem href="./index.html">
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit/docs/1.0/getting-started/introduction.html"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67"></i>
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="default"
                  href="https://www.creative-tim.com/product/now-ui-kit-pro"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="now-ui-icons arrows-1_share-66"></i>
                  <p>Upgrade to PRO</p>
                </Button>
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
    </>
  );
}

export default IndexNavbar;
