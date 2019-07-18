/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import Switch from "react-bootstrap-switch";
import { Col, CardSubtitle } from "reactstrap";

const codeSwitchExample = `<Switch />{" "}
<Switch defaultValue={false} />`;

class Switches extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          React Bootstrap Switch v15.5.3
        </h1>
        <p className="bd-lead">
          For this component, we've used{" "}
          <a
            href="https://github.com/Julusian/react-bootstrap-switch?ref=creativetim"
            target="_blank"
          >
            react-bootstrap-switch
          </a>
          .
        </p>
        <p>To use it, you'll need the following import:</p>
        <SyntaxHighlighter
          language="jsx"
          style={prism}
        >{`import Switch from 'react-bootstrap-switch';`}</SyntaxHighlighter>
        <h2>Example</h2>
        <div className="bd-example">
          <Switch /> <Switch defaultValue={false} />
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSwitchExample}
        </SyntaxHighlighter>
        <p>
          For props please refer to{" "}
          <a
            href="https://github.com/Julusian/react-bootstrap-switch?ref=creativetim"
            target="_blank"
          >
            official react-bootstrap-switch documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Switches;
