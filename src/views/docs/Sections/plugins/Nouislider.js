/*eslint-disable*/
import React from "react";
import Slider from "nouislider";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeExample = `import React from "react";
import Slider from "nouislider";

function Sliders() {
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [50],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
  });
  return (
    <div>
      <div className="slider" id="sliderRegular" />
      <br />
      <div className="slider slider-primary" id="sliderDouble" />
    </div>
  );
}

export default Sliders;`;

function Sliders() {
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [50],
        connect: [true, false],
        step: 0.5,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 80],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
  });
  return (
    <div>
      <h1 className="bd-title" id="content">
        noUiSlider v14.0.2
      </h1>
      <h2>Example</h2>
      <div className="bd-example">
        <div className="slider" id="sliderRegular" />
        <br />
        <div className="slider slider-primary" id="sliderDouble" />
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <p>
        If you want to add color to your slider you need to add one of the
        following classes on your div <code>"slider slider-$color"</code>, where{" "}
        <code>$color</code> can be one of <code>neutral</code>,{" "}
        <code>primary</code>, <code>info</code>, <code>success</code>,{" "}
        <code>warning</code>, <code>danger</code>.
      </p>
      <h2>Props</h2>
      <p>
        For props please refer to{" "}
        <a
          href="https://refreshless.com/nouislider/?ref=creativetim"
          target="_blank"
        >
          noUiSlider
        </a>
        .
      </p>
    </div>
  );
}

export default Sliders;
