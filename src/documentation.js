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
import Tutorial from "layouts/Documentation/Sections/Tutorial.jsx";
import RoutingSystem from "layouts/Documentation/Sections/RoutingSystem.jsx";
import Variables from "layouts/Documentation/Sections/Variables.jsx";
import BuildTools from "layouts/Documentation/Sections/BuildTools.jsx";
// components
import Alerts from "layouts/Documentation/Sections/Alerts.jsx";
import Breadcrumb from "layouts/Documentation/Sections/Breadcrumb.jsx";
import Buttons from "layouts/Documentation/Sections/Buttons.jsx";
import Cards from "layouts/Documentation/Sections/Cards.jsx";
import Dropdown from "layouts/Documentation/Sections/Dropdown.jsx";
import Footers from "layouts/Documentation/Sections/Footers.jsx";
import Icons from "layouts/Documentation/Sections/Icons.jsx";
import Navigation from "layouts/Documentation/Sections/Navigation.jsx";
import Navs from "layouts/Documentation/Sections/Navs.jsx";
import Notifications from "layouts/Documentation/Sections/Notifications.jsx";
import Sidebar from "layouts/Documentation/Sections/Sidebar.jsx";
import Tables from "layouts/Documentation/Sections/Tables.jsx";
import Tooltips from "layouts/Documentation/Sections/Tooltips.jsx";
import Typography from "layouts/Documentation/Sections/Typography.jsx";
// plugins
import Charts from "layouts/Documentation/Sections/Charts.jsx";
import GoogleMaps from "layouts/Documentation/Sections/GoogleMaps.jsx";
import PerfectScrollbar from "layouts/Documentation/Sections/PerfectScrollbar.jsx";
import Switch from "layouts/Documentation/Sections/Switch.jsx";

var componentsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        component: Tutorial,
        name: "Tutorial"
      },
      {
        path: "/documentation/routing-system",
        component: RoutingSystem,
        name: "Routing System"
      },
      {
        path: "/documentation/variables",
        component: Variables,
        name: "Variables"
      },
      {
        path: "/documentation/build-tools",
        component: BuildTools,
        name: "Build Tools"
      }
    ]
  },
  {
    name: "Components",
    path: "/documentation/accordion",
    routes: [
      { path: "/documentation/alerts", component: Alerts, name: "Alerts" },
      {
        path: "/documentation/breadcrumb",
        component: Breadcrumb,
        name: "Breadcrumb"
      },
      { path: "/documentation/buttons", component: Buttons, name: "Buttons" },
      { path: "/documentation/cards", component: Cards, name: "Cards" },
      {
        path: "/documentation/dropdown",
        component: Dropdown,
        name: "Dropdown"
      },
      { path: "/documentation/footers", component: Footers, name: "Footers" },
      {
        path: "/documentation/navbars",
        component: Navigation,
        name: "Navbars"
      },
      { path: "/documentation/navs", component: Navs, name: "Navs" },
      { path: "/documentation/icons", component: Icons, name: "Nucleo Icons" },
      { path: "/documentation/sidebar", component: Sidebar, name: "Sidebar" },
      { path: "/documentation/tables", component: Tables, name: "Tables" },
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
      { path: "/documentation/charts", component: Charts, name: "Charts" },
      {
        path: "/documentation/google-maps",
        component: GoogleMaps,
        name: "GoogleMaps"
      },
      {
        path: "/documentation/notifications",
        component: Notifications,
        name: "Notifications"
      },
      {
        path: "/documentation/perfect-scrollbar",
        component: PerfectScrollbar,
        name: "PerfectScrollbar"
      },
      { path: "/documentation/switch", component: Switch, name: "Switch" }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" }
];

export default componentsRoutes;
