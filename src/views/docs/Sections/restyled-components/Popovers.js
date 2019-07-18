import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover
} from "reactstrap";

function Popovers() {
  return (
    <>
      <h1 className=" bd-title" id="content">
        Popovers
      </h1>
      <p className=" bd-lead">
        Documentation and examples for adding Bootstrap popovers, like those
        found in iOS, to any element on your site.
      </p>
      <h2 id="static-popover">Static popover</h2>
      <p>Four options are available: top, right, bottom, and left aligned.</p>
      <div className=" bd-example bd-example-popover-static">
        <div className=" popover bs-popover-top bs-popover-top-docs">
          <div className=" arrow"></div>
          <h3 className=" popover-header">Popover top</h3>
          <div className=" popover-body">
            <p>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
          </div>
        </div>
        <div className=" popover bs-popover-right bs-popover-right-docs">
          <div className=" arrow"></div>
          <h3 className=" popover-header">Popover right</h3>
          <div className=" popover-body">
            <p>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
          </div>
        </div>
        <div className=" popover bs-popover-bottom bs-popover-bottom-docs">
          <div className=" arrow"></div>
          <h3 className=" popover-header">Popover bottom</h3>
          <div className=" popover-body">
            <p>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
          </div>
        </div>
        <div className=" popover bs-popover-left bs-popover-left-docs">
          <div className=" arrow"></div>
          <h3 className=" popover-header">Popover left</h3>
          <div className=" popover-body">
            <p>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam.
              Pellentesque ornare sem lacinia quam venenatis vestibulum.
            </p>
          </div>
        </div>
        <div className=" clearfix"></div>
      </div>
      <h2 id="live-demo">Live demo</h2>
      <div className=" bd-example" data-example-id="">
        <Button
          color="danger"
          data-content="And here's some amazing content. It's very engaging. Right?"
          id="tooltip393326274"
          size="lg"
          title="Popover title"
          type="button"
        >
          Click to toggle popover
        </Button>
        <UncontrolledPopover target="tooltip393326274">
          <PopoverHeader>Popover title</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </UncontrolledPopover>
      </div>
      <h3 id="four-directions">Four directions</h3>
      <div className=" bd-example popover-demo">
        <div className=" bd-example-popovers">
          <Button
            color="secondary"
            data-container="body"
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            data-placement="top"
            id="tooltip887124832"
            type="button"
          >
            Popover on top
          </Button>
          <UncontrolledPopover placement="top" target="tooltip887124832">
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="secondary"
            data-container="body"
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            data-placement="right"
            id="tooltip353181735"
            type="button"
          >
            Popover on right
          </Button>
          <UncontrolledPopover placement="right" target="tooltip353181735">
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="secondary"
            data-container="body"
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            data-placement="bottom"
            id="tooltip454316910"
            type="button"
          >
            Popover on bottom
          </Button>
          <UncontrolledPopover placement="bottom" target="tooltip454316910">
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </PopoverBody>
          </UncontrolledPopover>
          <Button
            color="secondary"
            data-container="body"
            data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            data-placement="left"
            id="tooltip726153615"
            type="button"
          >
            Popover on left
          </Button>
          <UncontrolledPopover placement="left" target="tooltip726153615">
            <PopoverBody>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
            </PopoverBody>
          </UncontrolledPopover>
        </div>
      </div>
      <h3 id="dismiss-on-next-click">Dismiss on next click</h3>
      <p>
        Use the <code className=" highlighter-rouge">focus</code>
        trigger to dismiss popovers on the user’s next click of a different
        element than the toggle element.
      </p>
      <div className=" bd-callout bd-callout-danger">
        <h4 id="specific-markup-required-for-dismiss-on-next-click">
          Specific markup required for dismiss-on-next-click
        </h4>
        <p>
          For proper cross-browser and cross-platform behavior, you must use the{" "}
          <code className=" highlighter-rouge">{`<a>`}</code>
          tag, <em>not</em>
          the <code className=" highlighter-rouge">{`<button>`}</code>
          tag, and you also must include a{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">
            <code className=" highlighter-rouge">tabindex</code>
          </a>
          attribute.
        </p>
      </div>
      <div className=" bd-example" data-example-id="">
        <Button
          color="danger"
          data-content="And here's some amazing content. It's very engaging. Right?"
          data-trigger="focus"
          id="tooltip949964578"
          role="button"
          size="lg"
          tabindex="0"
          title="Dismissible popover"
        >
          Dismissible popover
        </Button>
        <UncontrolledPopover target="tooltip949964578">
          <PopoverHeader>Dismissible popover</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </UncontrolledPopover>
      </div>
      <p>
        If you want to see more examples and properties please check the
        official{" "}
        <a href="http://getbootstrap.com/docs/4.0/components/popovers/">
          Bootstrap Documentation
        </a>
      </p>
    </>
  );
}

export default Popovers;
