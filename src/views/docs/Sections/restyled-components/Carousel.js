import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

function Carousels() {
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
        Carousel
      </h1>
      <p className=" bd-lead">
        A slideshow component for cycling through elements—images or slides of
        text—like a carousel.
      </p>
      <h2 id="how-it-works">How it works</h2>
      <p>
        The carousel is a slideshow for cycling through a series of content,
        built with CSS 3D transforms and a bit of JavaScript. It works with a
        series of images, text, or custom markup. It also includes support for
        previous/next controls and indicators.
      </p>
      <p>
        In browsers where the{" "}
        <a href="https://www.w3.org/TR/page-visibility/">Page Visibility API</a>
        is supported, the carousel will avoid sliding when the webpage is not
        visible to the user (such as when the browser tab is inactive, the
        browser window is minimized, etc.).
      </p>
      <p>
        Please be aware that nested carousels are not supported, and carousels
        are generally not compliant with accessibility standards.
      </p>
      <p>
        Lastly, if you’re building our JavaScript from source, it requires{" "}
        <code className=" highlighter-rouge">util.js</code>
      </p>
      <h2 id="example">Example</h2>
      <p>
        Carousels don’t automatically normalize slide dimensions. As such, you
        may need to use additional utilities or custom styles to appropriately
        size content. While carousels support previous/next controls and
        indicators, they’re not explicitly required. Add and customize as you
        see fit.
      </p>
      <p>
        Be sure to set a unique id on the{" "}
        <code className=" highlighter-rouge">.carousel</code>
        for optional controls, especially if you’re using multiple carousels on
        a single page.
      </p>
      <h3 id="with-indicators">With indicators</h3>
      <p>
        You can also add the indicators to the carousel, alongside the controls,
        too.
      </p>
      <div className=" bd-example" data-example-id="">
        <div
          className=" carousel slide"
          data-ride="carousel"
          id="carouselExampleIndicators"
        >
          <ol className=" carousel-indicators">
            <li data-slide-to="0" data-target="#carouselExampleIndicators"></li>
            <li
              className=" active"
              data-slide-to="1"
              data-target="#carouselExampleIndicators"
            ></li>
            <li data-slide-to="2" data-target="#carouselExampleIndicators"></li>
          </ol>
          <div className=" carousel-inner" role="listbox">
            <div className=" carousel-item">
              <img
                alt="..."
                className=" d-block"
                src={require("assets/img/bg1.jpg")}
              ></img>
              <div className=" carousel-caption d-none d-md-block">
                <h5>Nature, United States</h5>
              </div>
            </div>
            <div className=" carousel-item active">
              <img
                alt="..."
                className=" d-block"
                src={require("assets/img/bg3.jpg")}
              ></img>
              <div className=" carousel-caption d-none d-md-block">
                <h5>Somewhere Beyond, United States</h5>
              </div>
            </div>
            <div className=" carousel-item">
              <img
                alt="..."
                className=" d-block"
                src={require("assets/img/bg4.jpg")}
              ></img>
              <div className=" carousel-caption d-none d-md-block">
                <h5>Yellowstone National Park, United States</h5>
              </div>
            </div>
          </div>
          <a
            className=" carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={e => e.preventDefault()}
            role="button"
          >
            <i className=" now-ui-icons arrows-1_minimal-left"></i>
          </a>
          <a
            className=" carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={e => e.preventDefault()}
            role="button"
          >
            <i className=" now-ui-icons arrows-1_minimal-right"></i>
          </a>
        </div>
      </div>
      <p>
        If you want to see more examples and properties please check the
        official{" "}
        <a href="http://getbootstrap.com/docs/4.0/components/carousel/">
          Bootstrap Documentation
        </a>
      </p>
    </>
  );
}

export default Carousels;
