/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

// core components
const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Nature, United States",
    caption: "Nature, United States"
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States"
  }
];

const codeExample = `import React from "react";

// reactstrap components
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

// core components
const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Nature, United States",
    caption: "Nature, United States"
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States"
  }
];

function Example(){
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {items.map(item => {
          return (
            <CarouselItem
              onExiting={onExiting}
              onExited={onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.caption}</h5>
              </div>
            </CarouselItem>
          );
        })}
        <a
          className="carousel-control-prev"
          data-slide="prev"
          href="#pablo"
          onClick={e => {
            e.preventDefault();
            previous();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-left"></i>
        </a>
        <a
          className="carousel-control-next"
          data-slide="next"
          href="#pablo"
          onClick={e => {
            e.preventDefault();
            next();
          }}
          role="button"
        >
          <i className="now-ui-icons arrows-1_minimal-right"></i>
        </a>
      </Carousel>
    </>
  );
}

export default Example;`;

function Carousels() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
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
      <h2 id="example">Example</h2>
      <p>
        Carousels don’t automatically normalize slide dimensions. As such, you
        may need to use additional utilities or custom styles to appropriately
        size content. While carousels support previous/next controls and
        indicators, they’re not explicitly required. Add and customize as you
        see fit.
      </p>
      <h3 id="with-indicators">With indicators</h3>
      <p>
        You can also add the indicators to the carousel, alongside the controls,
        too.
      </p>
      <div className=" bd-example" data-example-id="">
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {items.map(item => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}
              >
                <img src={item.src} alt={item.altText} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{item.caption}</h5>
                </div>
              </CarouselItem>
            );
          })}
          <a
            className="carousel-control-prev"
            data-slide="prev"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              previous();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-left"></i>
          </a>
          <a
            className="carousel-control-next"
            data-slide="next"
            href="#pablo"
            onClick={e => {
              e.preventDefault();
              next();
            }}
            role="button"
          >
            <i className="now-ui-icons arrows-1_minimal-right"></i>
          </a>
        </Carousel>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <h3>Props</h3>
      <p>
        For props, please read the{" "}
        <a
          href="https://reactstrap.github.io/components/card/?ref=creativetim"
          target="_blank"
        >
          official reactstrap documentation
        </a>
        .
      </p>
    </>
  );
}

export default Carousels;
