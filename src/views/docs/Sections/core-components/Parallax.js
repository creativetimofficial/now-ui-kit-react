import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

// reactstrap components
// import {
// } from "reactstrap";

const codeParallax = `import React from "react";
... other code
function ParallaxComponent() {
  let parallaxComponent = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        parallaxComponent.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg6.jpg") + ")"
          }}
          ref={parallaxComponent}
        ></div>
        <div className="content-center">
          ... other code
        </div>
      </div>
    </>
  );
}

export default ParallaxComponent;
`;

class Parallax extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Parallax
        </h1>
        <p className="bd-lead" />
        <p>
          The parallax scrolling effect can be activated using the following
          code:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeParallax}
        </SyntaxHighlighter>
        <p>You can check it out in these components:</p>
        <ul>
          <li>
            <code className="highlighter-rouge">
              src/components/Headers/IndexHeader.js
            </code>
          </li>
          <li>
            <code className="highlighter-rouge">
              src/components/Headers/LandingPageHeader.js
            </code>
          </li>
          <li>
            <code className="highlighter-rouge">
              src/components/Headers/ProfilePageHeader.js
            </code>
          </li>
        </ul>
      </>
    );
  }
}

export default Parallax;
