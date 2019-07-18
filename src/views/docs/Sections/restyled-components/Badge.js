/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Badge } from "reactstrap";

const codeContextual = `import React from "react";

// reactstrap components
import { Badge } from "reactstrap";

// core components

function Example(){
  return (
    <>
      <Badge color="primary">Primary</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="default">Default</Badge>
      <Badge color="neutral">Neutral</Badge>
    </>
  );
}

export default Example;`;

const codeLinks = `import React from "react";

// reactstrap components
import { Badge } from "reactstrap";

// core components

function Example(){
  return (
    <>
      <Badge color="primary" href="#pablo" onClick={e => e.preventDefault()}>
        Primary
      </Badge>
      <Badge color="info" href="#pablo" onClick={e => e.preventDefault()}>
        Info
      </Badge>
      <Badge color="success" href="#pablo" onClick={e => e.preventDefault()}>
        Success
      </Badge>
      <Badge color="danger" href="#pablo" onClick={e => e.preventDefault()}>
        Danger
      </Badge>
      <Badge color="warning" href="#pablo" onClick={e => e.preventDefault()}>
        Warning
      </Badge>
      <Badge
        color="default"
        href="#pablo"
        onClick={e => e.preventDefault()}
      >
        Default
      </Badge>
      <Badge
        color="neutral"
        href="#pablo"
        onClick={e => e.preventDefault()}
      >
        Neutral
      </Badge>
    </>
  );
}

export default Example;`;

function Badges() {
  return (
    <>
      <h1 className="bd-title" id="content">
        Badges
      </h1>
      <p className="bd-lead">
        Documentation and examples for badges, our small count and labeling
        component.
      </p>
      <h2 id="contextual-variations">Contextual variations</h2>
      <p>
        Add any of the below mentioned modifier classes to change the appearance
        of a badge.
      </p>
      <div className="bd-example" data-example-id="">
        <Badge color="primary">Primary</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="default">Default</Badge>
        <Badge color="neutral">Neutral</Badge>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeContextual}
      </SyntaxHighlighter>
      <h2 id="links">Links</h2>
      <p>
        Adding the <code>href</code> prop (without specifying a <code>tag</code>{" "}
        prop) will default the badge to a link.
      </p>
      <div className="bd-example" data-example-id="">
        <Badge color="primary" href="#pablo" onClick={e => e.preventDefault()}>
          Primary
        </Badge>
        <Badge color="info" href="#pablo" onClick={e => e.preventDefault()}>
          Info
        </Badge>
        <Badge color="success" href="#pablo" onClick={e => e.preventDefault()}>
          Success
        </Badge>
        <Badge color="danger" href="#pablo" onClick={e => e.preventDefault()}>
          Danger
        </Badge>
        <Badge color="warning" href="#pablo" onClick={e => e.preventDefault()}>
          Warning
        </Badge>
        <Badge color="default" href="#pablo" onClick={e => e.preventDefault()}>
          Default
        </Badge>
        <Badge color="neutral" href="#pablo" onClick={e => e.preventDefault()}>
          Neutral
        </Badge>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeLinks}
      </SyntaxHighlighter>
      <h3>Props</h3>
      <p>
        Please refer to{" "}
        <a
          href="https://reactstrap.github.io/components/badge/?ref=creativetim"
          target="_blank"
        >
          reactstrap badge documentation
        </a>
        .
      </p>
    </>
  );
}

export default Badges;
