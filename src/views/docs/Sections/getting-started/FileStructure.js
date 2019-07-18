import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
// import {
// } from "reactstrap";

const files = `now-ui-kit-react
.
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   │   ├── flags
    │   │   └── nucleo-logo.svg
    │   └── scss
    │       ├── now-ui-kit
    │       │   ├── cards
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── react
    │       │   ├── now-ui-kit
    │       │   ├── plugins
    │       │   └── react-differences.scss
    │       └── now-ui-kit.scss
    ├── components
    │   ├── Footers
    │   │   ├── DarkFooter.js
    │   │   ├── DefaultFooter.js
    │   │   └── TransparentFooter.js
    │   ├── Headers
    │   │   ├── IndexHeader.js
    │   │   ├── LandingPageHeader.js
    │   │   └── ProfilePageHeader.js
    │   └── Navbars
    │       ├── ExamplesNavbar.js
    │       └── IndexNavbar.js
    ├── index.js
    └── views
        ├── Index.js
        ├── NucleoIcons.js
        ├── examples
        │   ├── LandingPage.js
        │   ├── LoginPage.js
        │   └── ProfilePage.js
        └── index-sections
            ├── BasicElements.js
            ├── Carousel.js
            ├── CompleteExamples.js
            ├── Download.js
            ├── Examples.js
            ├── Images.js
            ├── Javascript.js
            ├── Navbars.js
            ├── Notifications.js
            ├── NucleoIcons.js
            ├── Pagination.js
            ├── SignUp.js
            ├── Tabs.js
            └── Typography.js`;

class FileStructure extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          File Structure
        </h1>
        <p className="bd-lead">
          Now UI Kit React is a freeby Bootstrap 4, React, React Hooks,
          Creat-React-App and Reactstrap UI Kit.
        </p>
        <h2 id="now-ui-kit-react-structure">Now UI Kit React Structure</h2>
        <p>
          Once you have downloaded the archive and opened it, you will find the
          following structure:
        </p>
        <SyntaxHighlighter language="bash" style={prism}>
          {files}
        </SyntaxHighlighter>
        <h2 id="restyled-components">Restyled Components</h2>
        <p>
          Here is the list of Bootstrap 4 components that we restyled in Now UI
          Kit React:
        </p>
        <ul>
          <li>Buttons</li>
          <li>Inputs</li>
          <li>Textarea</li>
          <li>Menu</li>
          <li>Dropdown</li>
          <li>Progress Bars</li>
          <li>Navigation Menu</li>
          <li>Pagination</li>
          <li>Labels</li>
          <li>Notifications</li>
          <li>Typography</li>
          <li>Images</li>
          <li>Tooltips</li>
          <li>Popovers</li>
          <li>Modal</li>
          <li>Carousel</li>
        </ul>
        <h2 id="new-components">New Components</h2>
        <p>
          Besides giving the existing Bootstrap elements a new look, we added
          new ones, so that the interface and consistent and homogenous.
        </p>
        <p>Going through them, we added:</p>
        <ul>
          <li>Checkboxes</li>
          <li>Radio Buttons</li>
          <li>Sliders</li>
          <li>Toggle Buttons</li>
          <li>Cards with Tabs</li>
          <li>Datepicker</li>
          <li>Nucleo Icons</li>
        </ul>
      </>
    );
  }
}

export default FileStructure;
