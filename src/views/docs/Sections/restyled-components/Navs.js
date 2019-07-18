import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

function Navs() {
  React.useEffect(() => {
    document.body.classList.add("bd-docs");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("bd-docs");
    };
  });
  return (
    <>
      <h1 className=" bd-title" id="content">
        Navs
      </h1>
      <p className=" bd-lead">
        Documentation and examples for how to use Bootstrap's included
        navigation components.
      </p>
      <h2 id="base-nav">Base nav</h2>
      <p>
        Navigation available in Bootstrap share general markup and styles, from
        the base <code className=" highlighter-rouge">.nav</code>
        class to the active and disabled states. Swap modifier classes to switch
        between each style.
      </p>
      <p>
        The base <code className=" highlighter-rouge">.nav</code>
        component is built with flexbox and provide a strong foundation for
        building all types of navigation components. It includes some style
        overrides (for working with lists), some link padding for larger hit
        areas, and basic disabled styling.
      </p>
      <div className=" bd-callout bd-callout-info">
        <p>
          The base <code className=" highlighter-rouge">.nav</code>
          component does not include any{" "}
          <code className=" highlighter-rouge">.active</code>
          state. The following examples include the class, mainly to demonstrate
          that this particular class does not trigger any special styling.
        </p>
      </div>
      <div className=" bd-example" data-example-id="">
        <Nav>
          <NavItem>
            <NavLink
              className=" active"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className=" disabled"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <p>
        Classes are used throughout, so your markup can be super flexible. Use{" "}
        <code className=" highlighter-rouge">{`<ul>`}</code>s like above, or
        roll your own with say a{" "}
        <code className=" highlighter-rouge">{`<nav>`}</code>
        element. Because the <code className=" highlighter-rouge">.nav</code>
        uses <code className=" highlighter-rouge">display: flex</code>, the nav
        links behave the same as nav items would, but without the extra markup.
      </p>
      <div className=" bd-example" data-example-id="">
        <Nav tag="nav">
          <NavLink
            className=" active"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Active
          </NavLink>
          <NavLink href="#pablo" onClick={e => e.preventDefault()}>
            Link
          </NavLink>
          <NavLink href="#pablo" onClick={e => e.preventDefault()}>
            Link
          </NavLink>
          <NavLink
            className=" disabled"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Disabled
          </NavLink>
        </Nav>
      </div>
      <h2 id="available-styles">Available styles</h2>
      <p>
        Change the style of <code className=" highlighter-rouge">.nav</code>s
        component with modifiers and utilities. Mix and match as needed, or
        build your own.
      </p>
      <h3 id="horizontal-alignment">Horizontal alignment</h3>
      <p>
        Change the horizontal alignment of your nav with{" "}
        <a href="#pablo" onClick={e => e.preventDefault()}>
          flexbox utilities
        </a>
        . By default, navs are left-aligned, but you can easily change them to
        center or right aligned.
      </p>
      <p>
        Centered with{" "}
        <code className=" highlighter-rouge">.justify-content-center</code>:
      </p>
      <div className=" bd-example" data-example-id="">
        <Nav className=" justify-content-center">
          <NavItem>
            <NavLink
              className=" active"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className=" disabled"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <p>
        Right-aligned with{" "}
        <code className=" highlighter-rouge">.justify-content-end</code>:
      </p>
      <div className=" bd-example" data-example-id="">
        <Nav className=" justify-content-end">
          <NavItem>
            <NavLink
              className=" active"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className=" disabled"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <h3 id="vertical">Vertical</h3>
      <p>
        Stack your navigation by changing the flex item direction with the{" "}
        <code className=" highlighter-rouge">.flex-column</code>
        utility. Need to stack them on some viewports but not others? Use the
        responsive versions (e.g.,{" "}
        <code className=" highlighter-rouge">.flex-sm-column</code>
        ).
      </p>
      <div className=" bd-example" data-example-id="">
        <Nav className=" flex-column">
          <NavItem>
            <NavLink
              className=" active"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Active
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pablo" onClick={e => e.preventDefault()}>
              Link
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className=" disabled"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Disabled
            </NavLink>
          </NavItem>
        </Nav>
      </div>
      <p>
        As always, vertical navigation is possible without{" "}
        <code className=" highlighter-rouge">{`<ul>`}</code>
        s, too.
      </p>
      <div className=" bd-example" data-example-id="">
        <Nav className=" flex-column" tag="nav">
          <NavLink
            className=" active"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Active
          </NavLink>
          <NavLink href="#pablo" onClick={e => e.preventDefault()}>
            Link
          </NavLink>
          <NavLink href="#pablo" onClick={e => e.preventDefault()}>
            Link
          </NavLink>
          <NavLink
            className=" disabled"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Disabled
          </NavLink>
        </Nav>
      </div>
      <h3 id="tabs">Tabs</h3>
      <p>
        Takes the basic nav from above and adds the{" "}
        <code className=" highlighter-rouge">.nav-tabs</code>
        class to generate a tabbed interface. Use them to create tabbable
        regions with our{" "}
        <a href="#pablo" onClick={e => e.preventDefault()}>
          tab JavaScript plugin
        </a>
        .
      </p>
      <h4 id="tabs-on-plain-card">Tabs on Plain Card</h4>
      <div className=" bd-example" data-example-id="">
        <Card className=" card-nav-tabs card-plain">
          <CardHeader className=" card-header-danger">
            <div className=" nav-tabs-navigation">
              <div className=" nav-tabs-wrapper">
                <Nav data-tabs="tabs" tabs>
                  <NavItem>
                    <NavLink
                      className=" active"
                      data-toggle="tab"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Updates
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      data-toggle="tab"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      History
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <TabContent className=" text-center">
              <TabPane className=" active" id="home">
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
              <TabPane id="updates">
                <p>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers. I understand
                  culture. I am the nucleus. I think that’s a responsibility
                  that I have, to push possibilities, to show people, this is
                  the level that things could be at. I think that’s a
                  responsibility that I have, to push possibilities, to show
                  people, this is the level that things could be at.
                </p>
              </TabPane>
              <TabPane id="history">
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus. I think that’s a
                  responsibility that I have, to push possibilities, to show
                  people, this is the level that things could be at.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </div>
      <h4 id="tabs-with-icons-on-card">Tabs with Icons on Card</h4>
      <Card>
        <CardHeader>
          <Nav className=" justify-content-center" role="tablist" tabs>
            <NavItem>
              <NavLink
                className=" active"
                data-toggle="tab"
                href="#pablo"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                <i className=" now-ui-icons objects_umbrella-13"></i>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-toggle="tab"
                href="#pablo"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                <i className=" now-ui-icons shopping_cart-simple"></i>
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-toggle="tab"
                href="#pablo"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                <i className=" now-ui-icons shopping_shop"></i>
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-toggle="tab"
                href="#pablo"
                onClick={e => e.preventDefault()}
                role="tab"
              >
                <i className=" now-ui-icons ui-2_settings-90"></i>
                Settings
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent className=" text-center">
            <TabPane className=" active" id="home" role="tabpanel">
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </TabPane>
            <TabPane id="profile" role="tabpanel">
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at. I think that’s a responsibility that I
                have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </TabPane>
            <TabPane id="messages" role="tabpanel">
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </TabPane>
            <TabPane id="settings" role="tabpanel">
              <p>
                "I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at."
              </p>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
      <h3 id="using-data-attributes">Using data attributes</h3>
      <p>
        You can activate a tab or pill navigation without writing any JavaScript
        by simply specifying{" "}
        <code className=" highlighter-rouge">data-toggle="tab"</code>
        or <code className=" highlighter-rouge">data-toggle="pill"</code>
        on an element. Use these data attributes on{" "}
        <code className=" highlighter-rouge">.nav-tabs</code>
        or <code className=" highlighter-rouge">.nav-pills</code>.
      </p>
      <p>
        If you want to see more examples and properties please check the
        official{" "}
        <a href="http://getbootstrap.com/docs/4.0/components/navs/">
          Bootstrap Documentation
        </a>
      </p>
    </>
  );
}

export default Navs;
