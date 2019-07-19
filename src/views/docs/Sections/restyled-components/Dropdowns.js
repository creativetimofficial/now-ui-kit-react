/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

const codeSingleButton = `import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

function Example(){
  return (
    <>
      <UncontrolledDropdown>
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="secondary"
          data-toggle="dropdown"
          id="dropdownMenuButton"
          type="button"
        >
          Dropdown button
        </DropdownToggle>
        <DropdownMenu aria-labelledby="dropdownMenuButton">
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}

export default Example;`;

const codeA = `import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

function Example(){
  return (
    <>
      <UncontrolledDropdown>
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="secondary"
          data-toggle="dropdown"
          href="#pablo"
          id="dropdownMenuLink"
          onClick={e => e.preventDefault()}
          role="button"
        >
          Dropdown link
        </DropdownToggle>
        <DropdownMenu aria-labelledby="dropdownMenuLink">
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}

export default Example;`;

const codeTheBestPart = `import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

function Example(){
  return (
    <>
      <UncontrolledDropdown className="btn-group">
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="primary"
          data-toggle="dropdown"
          type="button"
        >
          Primary
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {/* /btn-group */}
      <UncontrolledDropdown className="btn-group">
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="secondary"
          data-toggle="dropdown"
          type="button"
        >
          Secondary
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {/* /btn-group */}
      <UncontrolledDropdown className="btn-group">
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="success"
          data-toggle="dropdown"
          type="button"
        >
          Success
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {/* /btn-group */}
      <UncontrolledDropdown className="btn-group">
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="info"
          data-toggle="dropdown"
          type="button"
        >
          Info
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {/* /btn-group */}
      <UncontrolledDropdown className="btn-group">
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="warning"
          data-toggle="dropdown"
          type="button"
        >
          Warning
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {/* /btn-group */}
      <UncontrolledDropdown className="btn-group">
        <DropdownToggle
          aria-expanded={false}
          aria-haspopup={true}
          caret
          color="danger"
          data-toggle="dropdown"
          type="button"
        >
          Danger
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}

export default Example;`;

const codeSplitButton = `import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";

function Example(){
  return (
    <>
      <UncontrolledDropdown>
        <ButtonGroup>
          <Button color="primary" type="button">
            Primary
          </Button>
          <DropdownToggle
            aria-expanded={false}
            aria-haspopup={true}
            caret
            className="dropdown-toggle-split"
            color="primary"
            data-toggle="dropdown"
            type="button"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </DropdownToggle>
        </ButtonGroup>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {/* /btn-group */}
      <UncontrolledDropdown>
        <ButtonGroup>
          <Button color="secondary" type="button">
            Secondary
          </Button>
          <DropdownToggle
            aria-expanded={false}
            aria-haspopup={true}
            caret
            className="dropdown-toggle-split"
            color="secondary"
            data-toggle="dropdown"
            type="button"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </DropdownToggle>
        </ButtonGroup>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {/* /btn-group */}
      <UncontrolledDropdown>
        <ButtonGroup>
          <Button color="success" type="button">
            Success
          </Button>
          <DropdownToggle
            aria-expanded={false}
            aria-haspopup={true}
            caret
            className="dropdown-toggle-split"
            color="success"
            data-toggle="dropdown"
            type="button"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </DropdownToggle>
        </ButtonGroup>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {/* /btn-group */}
      <UncontrolledDropdown>
        <ButtonGroup>
          <Button color="info" type="button">
            Info
          </Button>
          <DropdownToggle
            aria-expanded={false}
            aria-haspopup={true}
            caret
            className="dropdown-toggle-split"
            color="info"
            data-toggle="dropdown"
            type="button"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </DropdownToggle>
        </ButtonGroup>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {/* /btn-group */}
      <UncontrolledDropdown>
        <ButtonGroup>
          <Button color="warning" type="button">
            Warning
          </Button>
          <DropdownToggle
            aria-expanded={false}
            aria-haspopup={true}
            caret
            className="dropdown-toggle-split"
            color="warning"
            data-toggle="dropdown"
            type="button"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </DropdownToggle>
        </ButtonGroup>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      {/* /btn-group */}
      <UncontrolledDropdown>
        <ButtonGroup>
          <Button color="danger" type="button">
            Danger
          </Button>
          <DropdownToggle
            aria-expanded={false}
            aria-haspopup={true}
            caret
            className="dropdown-toggle-split"
            color="danger"
            data-toggle="dropdown"
            type="button"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </DropdownToggle>
        </ButtonGroup>
        <DropdownMenu>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Another action
          </DropdownItem>
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Something else here
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
            Separated link
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}

export default Example;`;

class Dropdowns extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Dropdowns
        </h1>
        <p className="bd-lead">
          Toggle contextual overlays for displaying lists of links and more with
          the Bootstrap dropdown plugin.
        </p>
        <h2 id="examples">Examples</h2>
        <p>
          The <code>Dropdown</code> component is used to pass the{" "}
          <code>isOpen</code> &amp; <code>toggle</code> props via context to the
          following components: <code>DropdownToggle</code>,{" "}
          <code>DropdownMenu</code>. The <code>DropdownToggle</code> uses the{" "}
          <code>Button</code> component internally, meaning it also accepts all
          the props the <a href="#/documentation/buttons/">Button component</a>{" "}
          accepts.
        </p>
        <p>
          You can either use a controlled or a uncontrolled dropdown. In our
          examples we are going to use uncontrolled dropdowns.
        </p>
        <h3 id="single-button-dropdowns">Single button dropdowns</h3>
        <div className="bd-example" data-example-id="">
          <UncontrolledDropdown>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="secondary"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              type="button"
            >
              Dropdown button
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSingleButton}
        </SyntaxHighlighter>
        <p>
          And with <code className="highlighter-rouge">{`<a>`}</code> elements:
        </p>
        <div className="bd-example" data-example-id="">
          <UncontrolledDropdown>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="secondary"
              data-toggle="dropdown"
              href="#pablo"
              id="dropdownMenuLink"
              onClick={e => e.preventDefault()}
              role="button"
            >
              Dropdown link
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeA}
        </SyntaxHighlighter>
        <p>The best part is you can do this with any button variant, too:</p>
        <div className="bd-example">
          <UncontrolledDropdown className="btn-group">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="primary"
              data-toggle="dropdown"
              type="button"
            >
              Primary
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
          <UncontrolledDropdown className="btn-group">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="secondary"
              data-toggle="dropdown"
              type="button"
            >
              Secondary
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
          <UncontrolledDropdown className="btn-group">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="success"
              data-toggle="dropdown"
              type="button"
            >
              Success
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
          <UncontrolledDropdown className="btn-group">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="info"
              data-toggle="dropdown"
              type="button"
            >
              Info
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
          <UncontrolledDropdown className="btn-group">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="warning"
              data-toggle="dropdown"
              type="button"
            >
              Warning
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
          <UncontrolledDropdown className="btn-group">
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              color="danger"
              data-toggle="dropdown"
              type="button"
            >
              Danger
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeTheBestPart}
        </SyntaxHighlighter>
        <h3 id="split-button-dropdowns">Split button dropdowns</h3>
        <div className="bd-example">
          <UncontrolledDropdown>
            <ButtonGroup>
              <Button color="primary" type="button">
                Primary
              </Button>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                className="dropdown-toggle-split"
                color="primary"
                data-toggle="dropdown"
                type="button"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </DropdownToggle>
            </ButtonGroup>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
          <UncontrolledDropdown>
            <ButtonGroup>
              <Button color="secondary" type="button">
                Secondary
              </Button>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                className="dropdown-toggle-split"
                color="secondary"
                data-toggle="dropdown"
                type="button"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </DropdownToggle>
            </ButtonGroup>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
          <UncontrolledDropdown>
            <ButtonGroup>
              <Button color="success" type="button">
                Success
              </Button>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                className="dropdown-toggle-split"
                color="success"
                data-toggle="dropdown"
                type="button"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </DropdownToggle>
            </ButtonGroup>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
          <UncontrolledDropdown>
            <ButtonGroup>
              <Button color="info" type="button">
                Info
              </Button>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                className="dropdown-toggle-split"
                color="info"
                data-toggle="dropdown"
                type="button"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </DropdownToggle>
            </ButtonGroup>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
          <UncontrolledDropdown>
            <ButtonGroup>
              <Button color="warning" type="button">
                Warning
              </Button>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                className="dropdown-toggle-split"
                color="warning"
                data-toggle="dropdown"
                type="button"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </DropdownToggle>
            </ButtonGroup>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
          <UncontrolledDropdown>
            <ButtonGroup>
              <Button color="danger" type="button">
                Danger
              </Button>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                className="dropdown-toggle-split"
                color="danger"
                data-toggle="dropdown"
                type="button"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </DropdownToggle>
            </ButtonGroup>
            <DropdownMenu>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/* /btn-group */}
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSplitButton}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          Please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/dropdowns/?ref=creativetim"
            target="_blank"
          >
            reactstrap dropdowns documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default Dropdowns;
