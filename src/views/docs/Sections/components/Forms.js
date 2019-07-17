import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

function Forms(){
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
Forms - Now UI Kit by Creative Tim
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
<li className=" active bd-sidenav-active">
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
<li>
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
Overview
</a>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Form controls
</a>
<ul>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Sizing
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Readonly
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Readonly plain text
</a>
</li>
</ul>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Examples
</a>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Checkboxes and radios
</a>
<ul>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Default (stacked)
</a>
</li>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Inline
</a>
</li>
</ul>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Layout
</a>
<ul>
<li className=" toc-entry toc-h3">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Form grid
</a>
<ul>
<li className=" toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Form row
</a>
</li>
</ul>
</li>
</ul>
</li>
<li className=" toc-entry toc-h2">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Disabled forms
</a>
<ul>
<ul>
<li className=" toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Caveat with anchors
</a>
</li>
<li className=" toc-entry toc-h4">
<a href="#pablo" onClick={e =>
 e.preventDefault()}>
Cross-browser compatibility
</a>
</li>
</ul>
</ul>
</li>
</ul>
</Col>
<Col className=" py-md-3 pl-md-5 bd-content" md="9" role="main" xl="8" xs="12">
<h1 className=" bd-title" id="content">
Forms
</h1>
<p className=" bd-lead">
Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
</p>
<h2 id="overview">
Overview
</h2>
<p>
Bootstrap’s form controls expand on <a href="#pablo" onClick={e =>
 e.preventDefault()}>
our Rebooted form styles
</a>
 with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.
</p>
<p>
Be sure to use an appropriate <code className=" highlighter-rouge">
type
</code>
 attribute on all inputs (e.g., <code className=" highlighter-rouge">
email
</code>
 for email address or <code className=" highlighter-rouge">
number
</code>
 for numerical information) to take advantage of newer input controls like email verification, number selection, and more.
</p>
<p>
Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.
</p>
<div className=" bd-example" data-example-id="">
<Form>
<FormGroup>
<label htmlFor="exampleInputEmail1">
Email address
</label>
<Input aria-describedby="emailHelp" id="exampleInputEmail1" placeholder="Enter email" type="email">
</Input>
<FormText className=" text-muted" color="default" id="emailHelp">
We'll never share your email with anyone else.
</FormText>
</FormGroup>
<FormGroup>
<label htmlFor="exampleInputPassword1">
Password
</label>
<Input id="exampleInputPassword1" placeholder="Password" type="password">
</Input>
</FormGroup>
<FormGroup check>
<Label check>
<Input type="checkbox">
</Input>
<span className=" form-check-sign">
</span>
 Check me out 
</Label>
</FormGroup>
<Button color="primary" type="submit">
Submit
</Button>
</Form>
</div>
<h2 id="form-controls">
Form controls
</h2>
<p>
Textual form controls—like <code className=" highlighter-rouge">
<input>
</code>
s, <code className=" highlighter-rouge">
<select>
</code>
s, and <code className=" highlighter-rouge">
<textarea>
</code>
s—are styled with the <code className=" highlighter-rouge">
.form-control
</code>
 class. Included are styles for general appearance, focus state, sizing, and more.
</p>
<p>
Be sure to explore our <a href="#pablo" onClick={e =>
 e.preventDefault()}>
custom forms
</a>
 to further style <code className=" highlighter-rouge">
<select>
</code>
s.
</p>
<div className=" bd-example" data-example-id="">
<Form>
<FormGroup>
<label htmlFor="exampleFormControlInput1">
Email address
</label>
<Input id="exampleFormControlInput1" placeholder="name@example.com" type="email">
</Input>
</FormGroup>
<FormGroup>
<label htmlFor="exampleFormControlSelect1">
Example select
</label>
<Input id="exampleFormControlSelect1" type="select">
<option>
1
</option>
<option>
2
</option>
<option>
3
</option>
<option>
4
</option>
<option>
5
</option>
</Input>
</FormGroup>
<FormGroup>
<label htmlFor="exampleFormControlSelect2">
Example multiple select
</label>
<Input id="exampleFormControlSelect2" multiple="" type="select">
<option>
1
</option>
<option>
2
</option>
<option>
3
</option>
<option>
4
</option>
<option>
5
</option>
</Input>
</FormGroup>
<FormGroup>
<label htmlFor="exampleFormControlTextarea1">
Example textarea
</label>
<Input id="exampleFormControlTextarea1" rows="3">
</Input>
</FormGroup>
</Form>
</div>
<h3 id="sizing">
Sizing
</h3>
<p>
Set heights using classes like <code className=" highlighter-rouge">
.form-control-lg
</code>
 and <code className=" highlighter-rouge">
.form-control-sm
</code>
.
</p>
<div className=" bd-example" data-example-id="">
<Input className=" form-control-lg" placeholder=".form-control-lg" type="text">
</Input>
<Input placeholder="Default input" type="text">
</Input>
<Input className=" form-control-sm" placeholder=".form-control-sm" type="text">
</Input>
</div>
<div className=" bd-example" data-example-id="">
<Input className=" form-control-lg" type="select">
<option>
Large select
</option>
</Input>
<Input type="select">
<option>
Default select
</option>
</Input>
<Input className=" form-control-sm" type="select">
<option>
Small select
</option>
</Input>
</div>
<h3 id="readonly">
Readonly
</h3>
<p>
Add the <code className=" highlighter-rouge">
readonly
</code>
 boolean attribute on an input to prevent modification of the input’s value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.
</p>
<div className=" bd-example" data-example-id="">
<Input placeholder="Readonly input here…" readonly="" type="text">
</Input>
</div>
<h3 id="readonly-plain-text">
Readonly plain text
</h3>
<p>
If you want to have <code className=" highlighter-rouge">
<input readonly>
</code>
 elements in your form styled as plain text, use the <code className=" highlighter-rouge">
.form-control-plaintext
</code>
 class to remove the default form field styling and preserve the correct margin and padding.
</p>
<div className=" bd-example" data-example-id="">
<Form>
<FormGroup className=" row">
<Label htmlFor="staticEmail" sm="2">
Email
</Label>
<Col sm="10">
<input className=" form-control-plaintext" defaultValue="email@example.com" id="staticEmail" readonly="" type="text">
</input>
</Col>
</FormGroup>
<FormGroup className=" row">
<Label htmlFor="inputPassword" sm="2">
Password
</Label>
<Col sm="10">
<Input id="inputPassword" placeholder="Password" type="password">
</Input>
</Col>
</FormGroup>
</Form>
</div>
<div className=" bd-example" data-example-id="">
<Form className=" form-inline">
<FormGroup>
<label className=" sr-only" htmlFor="staticEmail2">
Email
</label>
<input className=" form-control-plaintext" defaultValue="email@example.com" id="staticEmail2" readonly="" type="text">
</input>
</FormGroup>
<FormGroup className=" mx-sm-3">
<label className=" sr-only" htmlFor="inputPassword2">
Password
</label>
<Input id="inputPassword2" placeholder="Password" type="password">
</Input>
</FormGroup>
<Button color="primary" type="submit">
Confirm identity
</Button>
</Form>
</div>
<h2 id="examples">
Examples
</h2>
<div className=" bd-example" data-example-id="">
<FormGroup className=" has-success">
<Input className=" form-control-success" defaultValue="Success" type="text">
</Input>
</FormGroup>
</div>
<div className=" bd-example" data-example-id="">
<FormGroup className=" has-danger">
<Input className=" form-control-danger" defaultValue="Error Input" type="email">
</Input>
</FormGroup>
</div>
<div className=" bd-example" data-example-id="">
<InputGroup>
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className=" fa fa-user-circle">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="Left Font Awesome Icon" type="text">
</Input>
</InputGroup>
</div>
<div className=" bd-example" data-example-id="">
<InputGroup>
<Input placeholder="Right Nucleo Icon" type="text">
</Input>
<InputGroupAddon addonType="append">
<InputGroupText>
<i className=" now-ui-icons users_single-02">
</i>
</InputGroupText>
</InputGroupAddon>
</InputGroup>
</div>
<h2 id="checkboxes-and-radios">
Checkboxes and radios
</h2>
<p>
Default checkboxes and radios are improved upon with the help of <code className=" highlighter-rouge">
.form-check
</code>
, <strong>
a single class for both input types that improves the layout and behavior of their HTML elements
</strong>
. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.
</p>
<p>
Disabled checkboxes and radios are supported, but to provide a <code className=" highlighter-rouge">
not-allowed
</code>
 cursor on hover of the parent <code className=" highlighter-rouge">
<label>
</code>
, you’ll need to add the <code className=" highlighter-rouge">
.disabled
</code>
 class to the parent <code className=" highlighter-rouge">
.form-check
</code>
. The disabled class will also lighten the text color to help indicate the input’s state.
</p>
<h3 id="default-stacked">
Default (stacked)
</h3>
<p>
By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with <code className=" highlighter-rouge">
.form-check
</code>
.
</p>
<div className=" bd-example" data-example-id="">
<FormGroup check>
<Label check>
<Input defaultValue="" type="checkbox">
</Input>
 Option one is this and that—be sure to include why it's great <span className=" form-check-sign">
<span className=" check">
</span>
</span>
</Label>
</FormGroup>
<FormGroup check disabled>
<Label check>
<Input defaultValue="" disabled type="checkbox">
</Input>
 Option two is disabled <span className=" form-check-sign">
<span className=" check">
</span>
</span>
</Label>
</FormGroup>
</div>
<div className=" bd-example" data-example-id="">
<FormGroup check className=" form-check-radio">
<Label check>
<Input defaultValue="option1" id="exampleRadios1" name="exampleRadios" type="radio">
</Input>
<span className=" form-check-sign">
</span>
 Radio is off 
</Label>
</FormGroup>
<FormGroup check className=" form-check-radio">
<Label check>
<Input defaultChecked defaultValue="option2" id="exampleRadios2" name="exampleRadios" type="radio">
</Input>
<span className=" form-check-sign">
</span>
 Radio is on 
</Label>
</FormGroup>
<FormGroup check className=" form-check-radio" disabled>
<Label check>
<Input defaultValue="option1" disabled id="exampleRadios1" name="exampleRadios1" type="radio">
</Input>
<span className=" form-check-sign">
</span>
 Disabled radio is off 
</Label>
</FormGroup>
</div>
<h3 id="inline">
Inline
</h3>
<p>
Group checkboxes or radios on the same horizontal row by adding <code className=" highlighter-rouge">
.form-check-inline
</code>
 to any <code className=" highlighter-rouge">
.form-check
</code>
.
</p>
<div className=" bd-example" data-example-id="">
<FormGroup check inline>
<Label check>
<Input defaultValue="option1" id="inlineCheckbox1" type="checkbox">
</Input>
 1 <span className=" form-check-sign">
<span className=" check">
</span>
</span>
</Label>
</FormGroup>
<FormGroup check inline>
<Label check>
<Input defaultValue="option2" id="inlineCheckbox2" type="checkbox">
</Input>
 2 <span className=" form-check-sign">
<span className=" check">
</span>
</span>
</Label>
</FormGroup>
<FormGroup check disabled inline>
<Label check>
<Input defaultValue="option3" disabled id="inlineCheckbox3" type="checkbox">
</Input>
 3 <span className=" form-check-sign">
<span className=" check">
</span>
</span>
</Label>
</FormGroup>
</div>
<div className=" bd-example" data-example-id="">
<FormGroup check className=" form-check-radio" inline>
<Label check>
<Input defaultValue="option1" id="inlineRadio1" name="inlineRadioOptions" type="radio">
</Input>
 1 <span className=" form-check-sign">
</span>
</Label>
</FormGroup>
<FormGroup check className=" form-check-radio" inline>
<Label check>
<Input defaultValue="option2" id="inlineRadio2" name="inlineRadioOptions" type="radio">
</Input>
 2 <span className=" form-check-sign">
</span>
</Label>
</FormGroup>
<FormGroup check className=" form-check-radio" disabled inline>
<Label check>
<Input defaultValue="option3" disabled id="inlineRadio3" name="inlineRadioOptions" type="radio">
</Input>
 3 <span className=" form-check-sign">
</span>
</Label>
</FormGroup>
</div>
<h2 id="layout">
Layout
</h2>
<p>
Since Bootstrap applies <code className=" highlighter-rouge">
display: block
</code>
 and <code className=" highlighter-rouge">
width: 100%
</code>
 to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.
</p>
<h3 id="form-grid">
Form grid
</h3>
<p>
More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.
</p>
<div className=" bd-example" data-example-id="">
<Form>
<Row>
<div className=" col">
<Input placeholder="First name" type="text">
</Input>
</div>
<div className=" col">
<Input placeholder="Last name" type="text">
</Input>
</div>
</Row>
</Form>
</div>
<h4 id="form-row">
Form row
</h4>
<p>
You may also swap <code className=" highlighter-rouge">
.row
</code>
 for <code className=" highlighter-rouge">
.form-row
</code>
, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.
</p>
<div className=" bd-example" data-example-id="">
<Form>
<div className=" form-row">
<div className=" col">
<Input placeholder="First name" type="text">
</Input>
</div>
<div className=" col">
<Input placeholder="Last name" type="text">
</Input>
</div>
</div>
</Form>
</div>
<p>
More complex layouts can also be created with the grid system.
</p>
<div className=" bd-example" data-example-id="">
<Form>
<div className=" form-row">
<FormGroup className=" col-md-6">
<label htmlFor="inputEmail4">
Email
</label>
<Input id="inputEmail4" placeholder="Email" type="email">
</Input>
</FormGroup>
<FormGroup className=" col-md-6">
<label htmlFor="inputPassword4">
Password
</label>
<Input id="inputPassword4" placeholder="Password" type="password">
</Input>
</FormGroup>
</div>
<FormGroup>
<label htmlFor="inputAddress">
Address
</label>
<Input id="inputAddress" placeholder="1234 Main St" type="text">
</Input>
</FormGroup>
<FormGroup>
<label htmlFor="inputAddress2">
Address 2
</label>
<Input id="inputAddress2" placeholder="Apartment, studio, or floor" type="text">
</Input>
</FormGroup>
<div className=" form-row">
<FormGroup className=" col-md-6">
<label htmlFor="inputCity">
City
</label>
<Input id="inputCity" type="text">
</Input>
</FormGroup>
<FormGroup className=" col-md-4">
<label htmlFor="inputState">
State
</label>
<Input id="inputState" type="select">
<option selected="">
Choose...
</option>
<option>
...
</option>
</Input>
</FormGroup>
<FormGroup className=" col-md-2">
<label htmlFor="inputZip">
Zip
</label>
<Input id="inputZip" type="text">
</Input>
</FormGroup>
</div>
<FormGroup>
<FormGroup check>
<Label check>
<Input type="checkbox">
</Input>
 Check me out <span className=" form-check-sign">
<span className=" check">
</span>
</span>
</Label>
</FormGroup>
</FormGroup>
<Button color="primary" type="submit">
Sign in
</Button>
</Form>
</div>
<h2 id="disabled-forms">
Disabled forms
</h2>
<p>
Add the <code className=" highlighter-rouge">
disabled
</code>
 boolean attribute on an input to prevent user interactions and make it appear lighter.
</p>
<p>
Add the <code className=" highlighter-rouge">
disabled
</code>
 attribute to a <code className=" highlighter-rouge">
<fieldset>
</code>
 to disable all the controls within.
</p>
<div className=" bd-example" data-example-id="">
<Form>
<fieldset disabled>
<FormGroup>
<label htmlFor="disabledTextInput">
Disabled input
</label>
<Input id="disabledTextInput" placeholder="Disabled input" type="text">
</Input>
</FormGroup>
<FormGroup>
<label htmlFor="disabledSelect">
Disabled select menu
</label>
<Input id="disabledSelect" type="select">
<option>
Disabled select
</option>
</Input>
</FormGroup>
<FormGroup check>
<Label check>
<Input type="checkbox">
</Input>
 Can't check this <span className=" form-check-sign">
<span className=" check">
</span>
</span>
</Label>
</FormGroup>
<Button color="primary" type="submit">
Submit
</Button>
</fieldset>
</Form>
</div>
<div className=" bd-callout bd-callout-warning">
<h4 id="caveat-with-anchors">
Caveat with anchors
</h4>
<p>
By default, browsers will treat all native form controls (<code className=" highlighter-rouge">
<input>
</code>
, <code className=" highlighter-rouge">
<select>
</code>
 and <code className=" highlighter-rouge">
<button>
</code>
 elements) inside a <code className=" highlighter-rouge">
<fieldset disabled>
</code>
 as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes <code className=" highlighter-rouge">
<a ... className="btn btn-*">
</code>
 elements, these will only be given a style of <code className=" highlighter-rouge">
pointer-events: none
</code>
. As noted in the section about <a href="#pablo" onClick={e =>
 e.preventDefault()}>
disabled state for buttons
</a>
 (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn’t fully supported in Opera 18 and below, or in Internet Explorer 10, and won’t prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.
</p>
</div>
<div className=" bd-callout bd-callout-danger">
<h4 id="cross-browser-compatibility">
Cross-browser compatibility
</h4>
<p>
While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don’t fully support the <code className=" highlighter-rouge">
disabled
</code>
 attribute on a <code className=" highlighter-rouge">
<fieldset>
</code>
. Use custom JavaScript to disable the fieldset in these browsers.
</p>
</div>
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

export default Forms;