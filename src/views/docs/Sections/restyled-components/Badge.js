import React from "react";

// reactstrap components
import { Badge } from "reactstrap";

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
      <h2 id="links">Links</h2>
      <p>
        Using the contextual{" "}
        <code className="highlighter-rouge">.badge-*</code>
        classes on an <code className="highlighter-rouge">{`<a>`}</code>
        element quickly provide <em>actionable</em>
        badges with hover and focus states.
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
      </div>
    </>
  );
}

export default Badges;
