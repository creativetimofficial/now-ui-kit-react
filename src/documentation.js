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
import Tutorial from "views/docs/Sections/getting-started/Tutorial.jsx";
import RoutingSystem from "views/docs/Sections/getting-started/RoutingSystem.jsx";
import Variables from "views/docs/Sections/getting-started/Variables.jsx";
import BuildTools from "views/docs/Sections/getting-started/BuildTools.jsx";
// core components

// restyled components
import Alerts from "views/docs/Sections/restyled-components/Alerts.jsx";
import Breadcrumb from "views/docs/Sections/restyled-components/Breadcrumb.jsx";
import Buttons from "views/docs/Sections/restyled-components/Buttons.jsx";
import Cards from "views/docs/Sections/restyled-components/Cards.jsx";
import Dropdown from "views/docs/Sections/restyled-components/Dropdown.jsx";
import Footers from "views/docs/Sections/restyled-components/Footers.jsx";
import Icons from "views/docs/Sections/restyled-components/Icons.jsx";
import Navigation from "views/docs/Sections/restyled-components/Navigation.jsx";
import Navs from "views/docs/Sections/restyled-components/Navs.jsx";
import Notifications from "views/docs/Sections/restyled-components/Notifications.jsx";
import Sidebar from "views/docs/Sections/restyled-components/Sidebar.jsx";
import Tables from "views/docs/Sections/restyled-components/Tables.jsx";
import Tooltips from "views/docs/Sections/restyled-components/Tooltips.jsx";
import Typography from "views/docs/Sections/restyled-components/Typography.jsx";
// plugins
import Charts from "views/docs/Sections/plugins/Charts.jsx";
import GoogleMaps from "views/docs/Sections/plugins/GoogleMaps.jsx";
import PerfectScrollbar from "views/docs/Sections/plugins/PerfectScrollbar.jsx";
import Switch from "views/docs/Sections/plugins/Switch.jsx";

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
    name: "Restyled Components",
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
