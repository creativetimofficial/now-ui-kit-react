import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
// import {
// } from "reactstrap";

const files = `paper-kit-react-master
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── assets
    │   ├── css
    │   │   ├── bootstrap.min.css
    │   │   └── bootstrap.min.css.map
    │   ├── demo
    │   │   └── demo.css
    │   ├── fonts
    │   ├── img
    │   │   ├── examples
    │   │   ├── faces
    │   │   ├── flags
    │   └── scss
    │       ├── paper-kit
    │       │   ├── cards
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── react
    │       │   ├── paper-kit
    │       │   ├── plugins
    │       │   └── react-differences.scss
    │       └── paper-kit.scss
    ├── components
    │   ├── Footers
    │   │   └── DemoFooter.js
    │   ├── Headers
    │   │   ├── IndexHeader.js
    │   │   ├── LandingPageHeader.js
    │   │   └── ProfilePageHeader.js
    │   └── Navbars
    │       ├── ExamplesNavbar.js
    │       └── IndexNavbar.js
    └── views
        ├── Index.js
        ├── NucleoIcons.js
        ├── examples
        │   ├── LandingPage.js
        │   ├── ProfilePage.js
        │   └── RegisterPage.js
        └── index-sections
            ├── SectionButtons.js
            ├── SectionCarousel.js
            ├── SectionDark.js
            ├── SectionDownload.js
            ├── SectionExamples.js
            ├── SectionJavaScript.js
            ├── SectionLogin.js
            ├── SectionNavbars.js
            ├── SectionNavigation.js
            ├── SectionNotifications.js
            ├── SectionNucleoIcons.js
            ├── SectionProgress.js
            └── SectionTypography.js`;

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
