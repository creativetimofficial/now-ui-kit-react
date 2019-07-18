import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

// reactstrap components
// import {
// } from "reactstrap";

const codeParallax = `import React from "react";
// reactstrap components
// core components
function LandingPageHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
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
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/daniel-olahh.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        ... other code
      </div>
    </>
  );
}
export default LandingPageHeader;
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
