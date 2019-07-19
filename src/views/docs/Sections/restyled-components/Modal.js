/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import {
  Button,
  Modal,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

const codeModalComponents = `import React from "react";
// reactstrap components
import { Button, Modal } from "reactstrap";
// core components

function Example(){
  return (
    <>
      <Modal>
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button
            aria-label="Close"
            className="close"

            type="button"
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div className="modal-footer">
          <Button color="secondary"  type="button">
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Example;`;
const codeLiveDemo = `import React from "react";
// reactstrap components
import { Button, Modal } from "reactstrap";
// core components

function Example(){
  const [modalLive, setModalLive] = React.useState(false);
  return (
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setModalLive(true)}
      >
        Launch demo modal
      </Button>
      <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalLive(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Woohoo, you're reading this text in a modal!</p>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalLive(false)}
          >
            Close
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={() => setModalLive(false)}
          >
            Save changes
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Example;`;
const codeTooltipsAndPopovers = `import React from "react";
// reactstrap components
import { Button, Modal, UncontrolledTooltip, UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
// core components

function Example(){
  const [modalTooltips, setModalTooltips] = React.useState(false);
  return (
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setModalTooltips(true)}
      >
        Launch demo modal
      </Button>
      <Modal isOpen={modalTooltips} toggle={() => setModalTooltips(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalPopoversLabel">
            Modal title
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalTooltips(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <h5>Popover in a modal</h5>
          <p>
            This{" "}
            <Button
              className="popover-test"
              color="secondary"
              href="#pablo"
              onClick={e => e.preventDefault()}
              role="button"
              id="popover-test"
            >
              button
            </Button>
            <UncontrolledPopover target="popover-test">
              <PopoverHeader>Popover title</PopoverHeader>
              <PopoverBody>Popover body content is set here.</PopoverBody>
            </UncontrolledPopover>
            triggers a popover on click.
          </p>
          <hr></hr>
          <h5>Tooltips in a modal</h5>
          <p>
            <a
              className="tooltip-test"
              href="#pablo"
              onClick={e => e.preventDefault()}
              id="tooltip-test1"
            >
              This link
            </a>
            <UncontrolledTooltip target="tooltip-test1">
              Tooltip
            </UncontrolledTooltip>
            and{" "}
            <a
              className="tooltip-test"
              href="#pablo"
              onClick={e => e.preventDefault()}
              id="tooltip-test2"
            >
              that link
            </a>
            <UncontrolledTooltip target="tooltip-test2">
              Tooltip
            </UncontrolledTooltip>
            have tooltips on hover.
          </p>
        </div>
        <div className="modal-footer">
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalTooltips(false)}
          >
            Close
          </Button>
          <Button
            color="primary"
            type="button"
            onClick={() => setModalTooltips(false)}
          >
            Save changes
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Example;`;
const codeOptionalSizes = `import React from "react";
// reactstrap components
import { Button, Modal } from "reactstrap";
// core components

function Example(){
  const [modalLarge, setModalLarge] = React.useState(false);
  const [modalSmall, setModalSmall] = React.useState(false);
  return (
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setModalLarge(true)}
      >
        Large modal
      </Button>
      <Button
        color="primary"
        type="button"
        onClick={() => setModalSmall(true)}
      >
        Small modal
      </Button>
      <Modal
        isOpen={modalLarge}
        className="modal-lg"
        modalClassName="bd-example-modal-lg"
        toggle={() => setModalLarge(false)}
      >
        <div className="modal-header">
          <h4 className="modal-title" id="myLargeModalLabel">
            Large modal
          </h4>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalLarge(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">...</div>
      </Modal>
      <Modal
        isOpen={modalSmall}
        className="modal-sm"
        modalClassName="bd-example-modal-sm"
        toggle={() => setModalSmall(false)}
      >
        <div className="modal-header">
          <h4 className="modal-title" id="mySmallModalLabel">
            Small modal
          </h4>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalSmall(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">...</div>
      </Modal>
    </>
  );
}

export default Example;`;

function Modals() {
  const [modalLive, setModalLive] = React.useState(false);
  const [modalTooltips, setModalTooltips] = React.useState(false);
  const [modalLarge, setModalLarge] = React.useState(false);
  const [modalSmall, setModalSmall] = React.useState(false);
  return (
    <>
      <h1 className="bd-title" id="content">
        Modal
      </h1>
      <p className="bd-lead">
        Use Bootstrap's JavaScript modal plugin to add dialogs to your site for
        lightboxes, user notifications, or completely custom content.
      </p>
      <h2 id="examples">Examples</h2>
      <h3 id="modal-components">Modal components</h3>
      <p>
        Below is a <em>static</em>
        modal example (meaning its{" "}
        <code className="highlighter-rouge">position</code>
        and <code className="highlighter-rouge">display</code>
        have been overridden). Included are the modal header, modal body
        (required for <code className="highlighter-rouge">padding</code>
        ), and modal footer (optional). We ask that you include modal headers
        with dismiss actions whenever possible, or provide another explicit
        dismiss action.
      </p>
      <div className="bd-example bd-example-modal">
        <div className="modal" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
                <button type="button" className="btn btn-secondary">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeModalComponents}
      </SyntaxHighlighter>
      <h3 id="live-demo">Live demo</h3>
      <p>
        Toggle a working modal demo by clicking the button below. It will slide
        down and fade in from the top of the page.
      </p>
      <div className="bd-example">
        <Button
          color="primary"
          type="button"
          onClick={() => setModalLive(true)}
        >
          Launch demo modal
        </Button>
        <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLiveLabel">
              Modal title
            </h5>
            <button
              aria-label="Close"
              className="close"
              type="button"
              onClick={() => setModalLive(false)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Woohoo, you're reading this text in a modal!</p>
          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              type="button"
              onClick={() => setModalLive(false)}
            >
              Close
            </Button>
            <Button
              color="primary"
              type="button"
              onClick={() => setModalLive(false)}
            >
              Save changes
            </Button>
          </div>
        </Modal>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeLiveDemo}
      </SyntaxHighlighter>
      <h3 id="tooltips-and-popovers">Tooltips and popovers</h3>
      <p>
        <a href="/docs/1.0/components/tooltips/">Tooltips</a>
        and <a href="/docs/1.0/components/popovers/">popovers</a>
        can be placed within modals as needed. When modals are closed, any
        tooltips and popovers within are also automatically dismissed.
      </p>
      <div className="bd-example">
        <Button
          color="primary"
          type="button"
          onClick={() => setModalTooltips(true)}
        >
          Launch demo modal
        </Button>
        <Modal isOpen={modalTooltips} toggle={() => setModalTooltips(false)}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalPopoversLabel">
              Modal title
            </h5>
            <button
              aria-label="Close"
              className="close"
              type="button"
              onClick={() => setModalTooltips(false)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <h5>Popover in a modal</h5>
            <p>
              This{" "}
              <Button
                className="popover-test"
                color="secondary"
                href="#pablo"
                onClick={e => e.preventDefault()}
                role="button"
                id="popover-test"
              >
                button
              </Button>
              <UncontrolledPopover target="popover-test">
                <PopoverHeader>Popover title</PopoverHeader>
                <PopoverBody>Popover body content is set here.</PopoverBody>
              </UncontrolledPopover>
              triggers a popover on click.
            </p>
            <hr></hr>
            <h5>Tooltips in a modal</h5>
            <p>
              <a
                className="tooltip-test"
                href="#pablo"
                onClick={e => e.preventDefault()}
                id="tooltip-test1"
              >
                This link
              </a>
              <UncontrolledTooltip target="tooltip-test1">
                Tooltip
              </UncontrolledTooltip>
              and{" "}
              <a
                className="tooltip-test"
                href="#pablo"
                onClick={e => e.preventDefault()}
                id="tooltip-test2"
              >
                that link
              </a>
              <UncontrolledTooltip target="tooltip-test2">
                Tooltip
              </UncontrolledTooltip>
              have tooltips on hover.
            </p>
          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              type="button"
              onClick={() => setModalTooltips(false)}
            >
              Close
            </Button>
            <Button
              color="primary"
              type="button"
              onClick={() => setModalTooltips(false)}
            >
              Save changes
            </Button>
          </div>
        </Modal>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeTooltipsAndPopovers}
      </SyntaxHighlighter>
      <h3 id="embedding-youtube-videos">Embedding YouTube videos</h3>
      <p>
        Embedding YouTube videos in modals requires additional JavaScript not in
        Bootstrap to automatically stop playback and more.{" "}
        <a href="https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal">
          See this helpful Stack Overflow post
        </a>
        for more information.
      </p>
      <h2 id="optional-sizes">Optional sizes</h2>
      <p>
        Modals have two optional sizes, available via modifier classes to be
        placed on a <code className="highlighter-rouge">.modal-dialog</code>.
        These sizes kick in at certain breakpoints to avoid horizontal
        scrollbars on narrower viewports.
      </p>
      <div className="bd-example">
        <Button
          color="primary"
          type="button"
          onClick={() => setModalLarge(true)}
        >
          Large modal
        </Button>
        <Button
          color="primary"
          type="button"
          onClick={() => setModalSmall(true)}
        >
          Small modal
        </Button>
        <Modal
          isOpen={modalLarge}
          className="modal-lg"
          modalClassName="bd-example-modal-lg"
          toggle={() => setModalLarge(false)}
        >
          <div className="modal-header">
            <h4 className="modal-title" id="myLargeModalLabel">
              Large modal
            </h4>
            <button
              aria-label="Close"
              className="close"
              type="button"
              onClick={() => setModalLarge(false)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">...</div>
        </Modal>
        <Modal
          isOpen={modalSmall}
          className="modal-sm"
          modalClassName="bd-example-modal-sm"
          toggle={() => setModalSmall(false)}
        >
          <div className="modal-header">
            <h4 className="modal-title" id="mySmallModalLabel">
              Small modal
            </h4>
            <button
              aria-label="Close"
              className="close"
              type="button"
              onClick={() => setModalSmall(false)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">...</div>
        </Modal>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeOptionalSizes}
      </SyntaxHighlighter>
      <h2>Props</h2>
      <p>
        Please refer to{" "}
        <a
          href="https://reactstrap.github.io/components/modals/?ref=creativetim"
          target="_blank"
        >
          reactstrap modals documentation
        </a>
        .
      </p>
    </>
  );
}

export default Modals;
