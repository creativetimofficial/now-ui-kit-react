import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

function Navs(){
React.useEffect(() => {
  document.body.classList.add("bd-docs");
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  return function cleanup() {
    document.body.classList.remove("bd-docs");
  };
});
  return (
    <>
      <html lang="en">
<head>
<meta charset="utf-8">
</meta>
<link href="../../../assets/img/apple-icon.png" rel="apple-touch-icon" sizes="76x76">
</link>
<link href="../../../assets/img/favicon.png" rel="icon" type="image/png">
</link>
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
</meta>
<title>
Navs - Now UI Kit by Creative Tim
</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" name="viewport">
</meta>
<link href="https://www.creative-tim.com/product/now-ui-kit" rel="canonical">
</link>
<meta content="creative tim, creativetim, bootstrap 4, bootstrap 4 uit kit, bootstrap 4 kit, now ui, now ui kit, creative tim, html kit, html css template, web template, bootstrap, bootstrap 4, css3 template, frontend, responsive bootstrap template, bootstrap ui kit, responsive ui kit" name="keywords">
</meta>
<meta content="Now UI Kit is a responsive Bootstrap 4 kit provided for free by Invision and Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." name="description">
</meta>
<meta content="Now Ui Kit by Creative Tim" itemprop="name">
</meta>
<meta content="Now UI Kit is a responsive Bootstrap 4 kit provided for free by Invision and Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." itemprop="description">
</meta>
<meta content="https://s3.amazonaws.com/creativetim_bucket/products/56/opt_nudp_thumbnail.jpg" itemprop="image">
</meta>
<meta content="product" name="twitter:card">
</meta>
<meta content="@creativetim" name="twitter:site">
</meta>
<meta content="Now Ui Kit by Creative Tim" name="twitter:title">
</meta>
<meta content="Now UI Kit is a responsive Bootstrap 4 kit provided for free by Invision and Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." name="twitter:description">
</meta>
<meta content="@creativetim" name="twitter:creator">
</meta>
<meta content="https://s3.amazonaws.com/creativetim_bucket/products/56/opt_nudp_thumbnail.jpg" name="twitter:image">
</meta>
<meta content="655968634437471" property="fb:app_id">
</meta>
<meta content="Now Ui Kit by Creative Tim" property="og:title">
</meta>
<meta content="article" property="og:type">
</meta>
<meta content="https://demos.creative-tim.com/now-ui-kit-pro/index.html" property="og:url">
</meta>
<meta content="https://s3.amazonaws.com/creativetim_bucket/products/56/opt_nudp_thumbnail.jpg" property="og:image">
</meta>
<meta content="Now UI Kit is a responsive Bootstrap 4 kit provided for free by Invision and Creative Tim. It is a beautiful cross-platform UI kit featuring over 50 elements and 3 templates." property="og:description">
</meta>
<meta content="Creative Tim" property="og:site_name">
</meta>
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet">
</link>
<link crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" rel="stylesheet">
</link>
<link href="../../../assets/css/bootstrap.min.css" rel="stylesheet">
</link>
<link href="../../../assets/css/now-ui-kit.min.css?v=1.3.0" rel="stylesheet">
</link>
<link href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css" rel="stylesheet">
</link>
<link href="../../../assets/demo/docs.min.css" rel="stylesheet">
</link>
<style>
 .navbar-absolute-logo{ padding-left: 45px; } .navbar-absolute-logo img{ position: absolute; left: 15px; margin-top: -6px; } body{ background: white; }
</style>
<link href="../../../assets/demo/demo.css" rel="stylesheet">
</link>
<script type="text/javascript">
 (function (g) { var s = document.createElement('script'), t = document.getElementsByTagName('script')[0]; s.async = true; s.src = g + '?v=' + (new Date()).getTime(); s.charset = 'UTF-8'; s.setAttribute('crossorigin', '*'); t.parentNode.insertBefore(s, t); })('https://www.canvasflip.com/plugins/vi/vi.min.js');
</script>
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NKDMSK6');
</script>
</head>
<body className=" bd-docs" data-spy="scroll" data-target=".bd-sidenav-active">
<noscript>
<iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" style={{display:none",visibility:hidden}} width="0">
</iframe>
</noscript>
<a className=" sr-only sr-only-focusable" href="#pablo" id="skippy" onClick={e =>
 e.preventDefault()}>
<Container>
<span className=" skiplink-text">
Skip to main content
</span>
</Container>
</a>
<Navbar className=" navbar-expand navbar-dark bg-primary flex-column flex-md-row bd-navbar">
<NavbarBrand className=" mr-0 mr-md-2 navbar-absolute-logo" href="https://www.creative-tim.com/product/now-ui-kit" rel="noopener noreferrer" target="_blank">
 Now UI Kit 
</NavbarBrand>
<Nav className=" flex-row d-none d-md-flex" navbar>
<NavItem>
<NavLink className=" p-2" href="#pablo" onClick={e =>
 e.preventDefault()}>
 1.3.0 
</NavLink>
</NavItem>
<NavItem>
<NavLink aria-label="GitHub" className=" p-2" href="https://github.com/creativetimofficial/now-ui-kit" rel="noopener" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" className=" navbar-nav-svg" focusable={false} viewbox="0 0 512 499.36">
<title>
GitHub
</title>
<path d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z" fill="currentColor" fill-rule="evenodd">
</path>
</svg>
</NavLink>
</NavItem>
<NavItem>
<NavLink aria-label="Twitter" className=" p-2" href="https://twitter.com/CreativeTim" rel="noopener" target="_blank">
<svg xmlns="http://www.w3.org/2000/svg" className=" navbar-nav-svg" focusable={false} viewbox="0 0 512 416.32">
<title>
Twitter
</title>
<path d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92" fill="currentColor">
</path>
</svg>
</NavLink>
</NavItem>
</Nav>
<div className=" navbar-nav-scroll ml-md-auto">
<Nav className=" bd-navbar-nav flex-row" navbar>
<NavItem>
<NavLink className=" active" href="https://github.com/creativetimofficial/now-ui-kit">
<i className=" now-ui-icons objects_diamond">
</i>
 Give us a star
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://demos.creative-tim.com/now-ui-kit/index.html">
<i className=" now-ui-icons tech_tv">
</i>
 Live Preview
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://github.com/creativetimofficial/now-ui-kit/issues" rel="noopener" target="_blank">
<i className=" now-ui-icons ui-2_settings-90">
</i>
 Report Issue
</NavLink>
</NavItem>
</Nav>
</div>
</Navbar>
<Container fluid>
<Row className=" flex-xl-nowrap">
<Col className=" bd-sidebar" md="3" xl="2" xs="12">
<UncontrolledCollapse className=" bd-links" id="bd-docs-nav" toggler="#bd-docs-nav">
<div className=" bd-toc-item active">
<a className=" bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Getting started 
</a>
<Nav className=" bd-sidenav">
<li>
<a href="../../../docs/1.0/getting-started/introduction.html">
 Introduction 
</a>
</li>
<li>
<a href="../../../docs/1.0/getting-started/license.html">
 License 
</a>
</li>
<li>
<a href="../../../docs/1.0/getting-started/build-tools.html">
 Build Tools 
</a>
</li>
<li>
<a href="../../../docs/1.0/getting-started/file-structure.html">
 File Structure 
</a>
</li>
<li>
<a href="../../../docs/1.0/getting-started/visual-inspector.html">
 Visual Inspector 
</a>
</li>
</Nav>
</div>
<div className=" bd-toc-item active">
<a className=" bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Components 
</a>
<Nav className=" bd-sidenav">
<li>
<a href="../../../docs/1.0/components/alerts.html">
 Alerts 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/badge.html">
 Badge 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/breadcrumb.html">
 Breadcrumb 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/buttons.html">
 Buttons 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/card.html">
 Card 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/carousel.html">
 Carousel 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/collapse.html">
 Collapse 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/dropdowns.html">
 Dropdowns 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/forms.html">
 Forms 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/google-maps.html">
 Google Maps 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/modal.html">
 Modal 
</a>
</li>
<li className=" active bd-sidenav-active">
<a href="../../../docs/1.0/components/navs.html">
 Navs 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/nucleo-icons.html">
 Nucleo Icons 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/navbar.html">
 Navbar 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/pagination.html">
 Pagination 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/parallax.html">
 Parallax 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/popovers.html">
 Popovers 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/progress.html">
 Progress 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/tooltips.html">
 Tooltips 
</a>
</li>
<li>
<a href="../../../docs/1.0/components/typography.html">
 Typography 
</a>
</li>
</Nav>
</div>
<div className=" bd-toc-item active">
<a className=" bd-toc-link" href="#pablo" onClick={e =>
 e.preventDefault()}>
 Plugins 
</a>
<Nav className=" bd-sidenav">
<li>
<a href="../../../docs/1.0/plugins/bootstrap-switch.html">
 Bootstrap Switch 
</a>
</li>
<li>
<a href="../../../docs/1.0/plugins/sliders.html">
 Sliders 
</a>
</li>
<li>
<a href="../../../docs/1.0/plugins/datepicker.html">
 DatePicker 
</a>
</li>
</Nav>
</div>
</UncontrolledCollapse>
</Col>
<Col className=" d-none d-xl-block bd-toc" xl="2">
<ul className=" section-nav">
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Base nav
</a>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Available styles
</a>
<ul>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Horizontal alignment
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Vertical
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Tabs
</a>
<ul>
<li className=" toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Tabs on Plain Card
</a>
</li>
<li className=" toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Tabs with Icons on Card
</a>
</li>
</ul>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Using data attributes
</a>
</li>
</ul>
</li>
</ul>
</Col>
<Col className=" py-md-3 pl-md-5 bd-content" md="9" role="main" xl="8" xs="12">
<h1 className=" bd-title" id="content">
Navs
</h1>
<p className=" bd-lead">
Documentation and examples for how to use Bootstrap's included navigation components.
</p>
<h2 id="base-nav">
Base nav
</h2>
<p>
Navigation available in Bootstrap share general markup and styles, from the base <code className=" highlighter-rouge">
.nav
</code>
 class to the active and disabled states. Swap modifier classes to switch between each style.
</p>
<p>
The base <code className=" highlighter-rouge">
.nav
</code>
 component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.
</p>
<div className=" bd-callout bd-callout-info">
<p>
The base <code className=" highlighter-rouge">
.nav
</code>
 component does not include any <code className=" highlighter-rouge">
.active
</code>
 state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.
</p>
</div>
<div className=" bd-example" data-example-id="">
<Nav>
<NavItem>
<NavLink className=" active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className=" disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</div>
<p>
Classes are used throughout, so your markup can be super flexible. Use <code className=" highlighter-rouge">
<ul>
</code>
s like above, or roll your own with say a <code className=" highlighter-rouge">
<nav>
</code>
 element. Because the <code className=" highlighter-rouge">
.nav
</code>
 uses <code className=" highlighter-rouge">
display: flex
</code>
, the nav links behave the same as nav items would, but without the extra markup.
</p>
<div className=" bd-example" data-example-id="">
<Nav tag="nav">
<NavLink className=" active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
<NavLink className=" disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</Nav>
</div>
<h2 id="available-styles">
Available styles
</h2>
<p>
Change the style of <code className=" highlighter-rouge">
.nav
</code>
s component with modifiers and utilities. Mix and match as needed, or build your own.
</p>
<h3 id="horizontal-alignment">
Horizontal alignment
</h3>
<p>
Change the horizontal alignment of your nav with <a href="#pablo" onClick={e =>
 e.preventDefault()}>
flexbox utilities
</a>
. By default, navs are left-aligned, but you can easily change them to center or right aligned.
</p>
<p>
Centered with <code className=" highlighter-rouge">
.justify-content-center
</code>
:
</p>
<div className=" bd-example" data-example-id="">
<Nav className=" justify-content-center">
<NavItem>
<NavLink className=" active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className=" disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</div>
<p>
Right-aligned with <code className=" highlighter-rouge">
.justify-content-end
</code>
:
</p>
<div className=" bd-example" data-example-id="">
<Nav className=" justify-content-end">
<NavItem>
<NavLink className=" active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className=" disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</div>
<h3 id="vertical">
Vertical
</h3>
<p>
Stack your navigation by changing the flex item direction with the <code className=" highlighter-rouge">
.flex-column
</code>
 utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., <code className=" highlighter-rouge">
.flex-sm-column
</code>
).
</p>
<div className=" bd-example" data-example-id="">
<Nav className=" flex-column">
<NavItem>
<NavLink className=" active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
</NavItem>
<NavItem>
<NavLink className=" disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</NavItem>
</Nav>
</div>
<p>
As always, vertical navigation is possible without <code className=" highlighter-rouge">
<ul>
</code>
s, too.
</p>
<div className=" bd-example" data-example-id="">
<Nav className=" flex-column" tag="nav">
<NavLink className=" active" href="#pablo" onClick={e =>
 e.preventDefault()}>
Active
</NavLink>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
Link
</NavLink>
<NavLink className=" disabled" href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled
</NavLink>
</Nav>
</div>
<h3 id="tabs">
Tabs
</h3>
<p>
Takes the basic nav from above and adds the <code className=" highlighter-rouge">
.nav-tabs
</code>
 class to generate a tabbed interface. Use them to create tabbable regions with our <a href="#pablo" onClick={e =>
 e.preventDefault()}>
tab JavaScript plugin
</a>
.
</p>
<h4 id="tabs-on-plain-card">
Tabs on Plain Card
</h4>
<div className=" bd-example" data-example-id="">
<Card className=" card-nav-tabs card-plain">
<CardHeader className=" card-header-danger">
<div className=" nav-tabs-navigation">
<div className=" nav-tabs-wrapper">
<Nav data-tabs="tabs" tabs>
<NavItem>
<NavLink className=" active" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
Home
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
Updates
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()}>
History
</NavLink>
</NavItem>
</Nav>
</div>
</div>
</CardHeader>
<CardBody>
<TabContent className=" text-center">
<TabPane className=" active" id="home">
<p>
I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
</p>
</TabPane>
<TabPane id="updates">
<p>
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. 
</p>
</TabPane>
<TabPane id="history">
<p>
 I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
</p>
</TabPane>
</TabContent>
</CardBody>
</Card>
</div>
<h4 id="tabs-with-icons-on-card">
Tabs with Icons on Card
</h4>
<Card>
<CardHeader>
<Nav className=" justify-content-center" role="tablist" tabs>
<NavItem>
<NavLink className=" active" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className=" now-ui-icons objects_umbrella-13">
</i>
 Home 
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className=" now-ui-icons shopping_cart-simple">
</i>
 Profile 
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className=" now-ui-icons shopping_shop">
</i>
 Messages 
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className=" now-ui-icons ui-2_settings-90">
</i>
 Settings 
</NavLink>
</NavItem>
</Nav>
</CardHeader>
<CardBody>
<TabContent className=" text-center">
<TabPane className=" active" id="home" role="tabpanel">
<p>
I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
</p>
</TabPane>
<TabPane id="profile" role="tabpanel">
<p>
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. 
</p>
</TabPane>
<TabPane id="messages" role="tabpanel">
<p>
I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
</p>
</TabPane>
<TabPane id="settings" role="tabpanel">
<p>
 "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at." 
</p>
</TabPane>
</TabContent>
</CardBody>
</Card>
<h3 id="using-data-attributes">
Using data attributes
</h3>
<p>
You can activate a tab or pill navigation without writing any JavaScript by simply specifying <code className=" highlighter-rouge">
data-toggle="tab"
</code>
 or <code className=" highlighter-rouge">
data-toggle="pill"
</code>
 on an element. Use these data attributes on <code className=" highlighter-rouge">
.nav-tabs
</code>
 or <code className=" highlighter-rouge">
.nav-pills
</code>
.
</p>
<p>
If you want to see more examples and properties please check the official <a href="http://getbootstrap.com/docs/4.0/components/navs/">
Bootstrap Documentation
</a>
</p>
</Col>
</Row>
</Container>
<script src="../../../assets/js/core/jquery.min.js" type="text/javascript">
</script>
<script src="../../../assets/js/core/popper.min.js" type="text/javascript">
</script>
<script src="../../../assets/js/core/bootstrap.min.js" type="text/javascript">
</script>
<script src="../../../assets/js/plugins/bootstrap-switch.js">
</script>
<script src="../../../assets/js/plugins/nouislider.min.js" type="text/javascript">
</script>
<script src="../../../assets/js/plugins/bootstrap-datepicker.js" type="text/javascript">
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Yno10-YTnLjjn_Vtk0V8cdcY5lC4plU">
</script>
<script src="../../../assets/js/now-ui-kit.min.js?v=1.3.0" type="text/javascript">
</script>
<script src="../../../assets/demo/jquery.sharrre.js">
</script>
<script>
 $(document).ready(function(){ // Facebook Pixel Code Don't Delete!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','//connect.facebook.net/en_US/fbevents.js');try{ fbq('init', '111649226022273'); fbq('track', "PageView");}catch(err) { console.log('Facebook Track Error:', err);} });
</script>
<noscript>
<img alt="..." height="1" src={require("https://www.facebook.com/tr?id=111649226022273&amp;ev=PageView&amp;noscript=1")} style={{display:none}} width="1">
</img>
</noscript>
<script src="../../../assets/demo/docs.min.js">
</script>
<script src="../../../assets/demo/vendor/anchor.min.js">
</script>
<script src="../../../assets/demo/vendor/clipboard.min.js">
</script>
<script src="../../../assets/demo/vendor/holder.min.js">
</script>
<script src="../../../assets/demo/src/application.js">
</script>
<script>
 $(document).ready(function(){ });
</script>
<script>
 Holder.addTheme('gray', { bg: '#777', fg: 'rgba(255,255,255,.75)', font: 'Helvetica', fontweight: 'normal' })
</script>
</body>
</html>

    </>
  );
}

export default Navs;