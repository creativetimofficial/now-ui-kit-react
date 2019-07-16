import React from "react";

// reactstrap components
import {
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

function ExamplesNavbar() {
  return (
    <>
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

export default ExamplesNavbar;
