import React from "react";

// reactstrap components
import {
  Progress
} from "reactstrap";

function Progresses() {
  return (
    <>
      <h1 className="bd-title" id="content">
        Progress
      </h1>
      <p className="bd-lead">
        Documentation and examples for using Bootstrap custom progress bars
        featuring support for stacked bars, animated backgrounds, and text
        labels.
      </p>
      <h2 id="backgrounds">Backgrounds</h2>
      <p>
        Use background utility classes to change the appearance of individual
        progress bars.
      </p>
      <div className="bd-example" data-example-id="">
        <div className="progress-container">
          <span className="progress-badge">Default</span>
          <Progress max="100" value="60">
            <span className="progress-value">25%</span>
          </Progress>
        </div>
        <div className="progress-container progress-primary">
          <span className="progress-badge">Primary</span>
          <Progress max="100" value="60">
            <span className="progress-value">60%</span>
          </Progress>
        </div>
        <div className="progress-container progress-danger">
          <span className="progress-badge">Danger</span>
          <Progress max="100" value="60">
            <span className="progress-value">60%</span>
          </Progress>
        </div>
        <div className="progress-container progress-warning">
          <span className="progress-badge">Warning</span>
          <Progress max="100" value="60">
            <span className="progress-value">60%</span>
          </Progress>
        </div>
        <div className="progress-container progress-success">
          <span className="progress-badge">Success</span>
          <Progress max="100" value="60">
            <span className="progress-value">60%</span>
          </Progress>
        </div>
        <div className="progress-container progress-info">
          <span className="progress-badge">Info</span>
          <Progress max="100" value="60">
            <span className="progress-value">60%</span>
          </Progress>
        </div>
      </div>
    </>
  );
}

export default Progresses;
