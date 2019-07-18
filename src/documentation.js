/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// getting started
import Introduction from "views/docs/Sections/getting-started/Introduction.js";
import License from "views/docs/Sections/getting-started/License.js";
import BuildTools from "views/docs/Sections/getting-started/BuildTools.js";
import FileStructure from "views/docs/Sections/getting-started/FileStructure.js";
// core components
import Footers from "views/docs/Sections/core-components/Footers.js";
import Headers from "views/docs/Sections/core-components/Headers.js";
import Navbars from "views/docs/Sections/core-components/Navbars.js";
import Parallax from "views/docs/Sections/core-components/Parallax.js";
// restyled components
import Alerts from "views/docs/Sections/restyled-components/Alerts.js";
import Badge from "views/docs/Sections/restyled-components/Badge.js";
import Breadcrumb from "views/docs/Sections/restyled-components/Breadcrumb.js";
import Buttons from "views/docs/Sections/restyled-components/Buttons.js";
import Cards from "views/docs/Sections/restyled-components/Cards.js";
import Carousel from "views/docs/Sections/restyled-components/Carousel.js";
import Collapse from "views/docs/Sections/restyled-components/Collapse.js";
import Dropdowns from "views/docs/Sections/restyled-components/Dropdowns.js";
import Forms from "views/docs/Sections/restyled-components/Forms.js";
import Modal from "views/docs/Sections/restyled-components/Modal.js";
import Navbar from "views/docs/Sections/restyled-components/Navbar.js";
import Navs from "views/docs/Sections/restyled-components/Navs.js";
import Pagination from "views/docs/Sections/restyled-components/Pagination.js";
import Popovers from "views/docs/Sections/restyled-components/Popovers.js";
import Progress from "views/docs/Sections/restyled-components/Progress.js";
import Tooltips from "views/docs/Sections/restyled-components/Tooltips.js";
import Typography from "views/docs/Sections/restyled-components/Typography.js";
// plugins
import Nouislider from "views/docs/Sections/plugins/Nouislider.js";
import NucleoIcons from "views/docs/Sections/plugins/NucleoIcons.js";
import ReactBootstrapSwitch from "views/docs/Sections/plugins/ReactBootstrapSwitch.js";
import ReactDatetime from "views/docs/Sections/plugins/ReactDatetime.js";

var componentsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/introduction",
    routes: [
      {
        path: "/documentation/introduction",
        component: Introduction,
        name: "Introduction"
      },
      {
        path: "/documentation/license",
        component: License,
        name: "License"
      },
      {
        path: "/documentation/build-tools",
        component: BuildTools,
        name: "Build Tools"
      },
      {
        path: "/documentation/file-structure",
        component: FileStructure,
        name: "File Structure"
      }
    ]
  },
  {
    name: "Core Components",
    path: "/documentation/footers",
    routes: [
      { path: "/documentation/footers", component: Footers, name: "Footers" },
      { path: "/documentation/headers", component: Headers, name: "Headers" },
      { path: "/documentation/navbars", component: Navbars, name: "Navbars" },
      { path: "/documentation/parallax", component: Parallax, name: "Parallax" }
    ]
  },
  {
    name: "Restyled Components",
    path: "/documentation/accordion",
    routes: [
      { path: "/documentation/alerts", component: Alerts, name: "Alerts" },
      { path: "/documentation/badges", component: Badge, name: "Badge" },
      {
        path: "/documentation/breadcrumb",
        component: Breadcrumb,
        name: "Breadcrumb"
      },
      { path: "/documentation/buttons", component: Buttons, name: "Buttons" },
      { path: "/documentation/cards", component: Cards, name: "Cards" },
      {
        path: "/documentation/carousel",
        component: Carousel,
        name: "Carousel"
      },
      {
        path: "/documentation/collapse",
        component: Collapse,
        name: "Collapse"
      },
      {
        path: "/documentation/dropdowns",
        component: Dropdowns,
        name: "Dropdowns"
      },
      { path: "/documentation/forms", component: Forms, name: "Forms" },
      { path: "/documentation/modal", component: Modal, name: "Modal" },
      {
        path: "/documentation/navbar",
        component: Navbar,
        name: "Navbar"
      },
      { path: "/documentation/navs", component: Navs, name: "Navs" },
      {
        path: "/documentation/pagination",
        component: Pagination,
        name: "Pagination"
      },
      {
        path: "/documentation/popovers",
        component: Popovers,
        name: "Popovers"
      },
      {
        path: "/documentation/progress",
        component: Progress,
        name: "Progress"
      },
      {
        path: "/documentation/tooltips",
        component: Tooltips,
        name: "Tooltips"
      },
      {
        path: "/documentation/typography",
        component: Typography,
        name: "Typography"
      }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      {
        path: "/documentation/nouislider",
        component: Nouislider,
        name: "Nouislider"
      },
      {
        path: "/documentation/nucleo-icons",
        component: NucleoIcons,
        name: "Nucleo Icons"
      },
      {
        path: "/documentation/react-bootstrap-switch",
        component: ReactBootstrapSwitch,
        name: "React Bootstrap Switch"
      },
      {
        path: "/documentation/react-datetime",
        component: ReactDatetime,
        name: "React Datetime"
      }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" }
];

export default componentsRoutes;
