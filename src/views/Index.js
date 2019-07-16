import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Alert,
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader
} from "reactstrap";

function Index(){
React.useEffect(() => {
  document.body.classList.add("index-page");
  document.body.classList.add("sidebar-collapse");
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  return function cleanup() {
    document.body.classList.remove("index-page");
    document.body.classList.remove("sidebar-collapse");
  };
});
  return (
    <>
      <html lang="en">
<head>
<meta charset="utf-8">
</meta>
<link href="./assets/img/apple-icon.png" rel="apple-touch-icon" sizes="76x76">
</link>
<link href="./assets/img/favicon.png" rel="icon" type="image/png">
</link>
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
</meta>
<title>
 Now UI Kit by Creative Tim
</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no" name="viewport">
</meta>
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet">
</link>
<link crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" rel="stylesheet">
</link>
<link href="./assets/css/bootstrap.min.css" rel="stylesheet">
</link>
<link href="./assets/css/now-ui-kit.css?v=1.3.0" rel="stylesheet">
</link>
<link href="./assets/demo/demo.css" rel="stylesheet">
</link>
</head>
<body className="index-page sidebar-collapse">
<Navbar className="bg-primary fixed-top navbar-transparent" color-on-scroll="400" expand="lg">
<Container>
<div className="navbar-translate">
<NavbarBrand data-placement="bottom" href="https://demos.creative-tim.com/now-ui-kit/index.html" rel="noopener noreferrer" target="_blank" title="Designed by Invision. Coded by Creative Tim">
 Now Ui Kit
</NavbarBrand>
<button aria-controls="navigation-index" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler navbar-toggler" data-target="#navigation" data-toggle="collapse" id="navigation" type="button">
<span className="navbar-toggler-bar top-bar">
</span>
<span className="navbar-toggler-bar middle-bar">
</span>
<span className="navbar-toggler-bar bottom-bar">
</span>
</button>
</div>
<UncontrolledCollapse className="justify-content-end" data-nav-image="./assets/img/blurred-image-1.jpg" id="navigation" navbar toggler="#navigation">
<Nav navbar>
<NavItem>
<NavLink href="javascript:void(0)" onClick="scrollToDownload()">
<i className="now-ui-icons arrows-1_cloud-download-93">
</i>
<p>
Download
</p>
</NavLink>
</NavItem>
<UncontrolledDropdown nav>
<DropdownToggle caret color="default" data-toggle="dropdown" href="#pablo" id="navbarDropdownMenuLink1" nav onClick={e =>
 e.preventDefault()}>
<i className="now-ui-icons design_app">
</i>
<p>
Components
</p>
</DropdownToggle>
<DropdownMenu aria-labelledby="navbarDropdownMenuLink1" right>
<DropdownItem href="./index.html">
<i className="now-ui-icons business_chart-pie-36">
</i>
 All components
</DropdownItem>
<DropdownItem href="https://demos.creative-tim.com/now-ui-kit/docs/1.0/getting-started/introduction.html" rel="noopener noreferrer" target="_blank">
<i className="now-ui-icons design_bullet-list-67">
</i>
 Documentation
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
<NavItem>
<Button className="nav-link btn-neutral" color="default" href="https://www.creative-tim.com/product/now-ui-kit-pro" rel="noopener noreferrer" target="_blank">
<i className="now-ui-icons arrows-1_share-66">
</i>
<p>
Upgrade to PRO
</p>
</Button>
</NavItem>
<NavItem>
<NavLink data-placement="bottom" href="https://twitter.com/CreativeTim" rel="noopener noreferrer" target="_blank" title="Follow us on Twitter">
<i className="fab fa-twitter">
</i>
<p className="d-lg-none d-xl-none">
Twitter
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink data-placement="bottom" href="https://www.facebook.com/CreativeTim" rel="noopener noreferrer" target="_blank" title="Like us on Facebook">
<i className="fab fa-facebook-square">
</i>
<p className="d-lg-none d-xl-none">
Facebook
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" rel="noopener noreferrer" target="_blank" title="Follow us on Instagram">
<i className="fab fa-instagram">
</i>
<p className="d-lg-none d-xl-none">
Instagram
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<div className="wrapper">
<div className="page-header clear-filter" filter-color="orange">
<div className="page-header-image" data-parallax={true} style={{backgroundImage:url('./assets/img/header.jpg')",}}>
</div>
<Container>
<div className="content-center brand">
<img alt="..." className="n-logo" src={require("assets/img/now-logo.png")}>
</img>
<h1 className="h1-seo">
Now UI Kit.
</h1>
<h3>
A beautiful Bootstrap 4 UI kit. Yours free.
</h3>
</div>
<h6 className="category category-absolute">
Designed by <a href="http://invisionapp.com/" rel="noopener noreferrer" target="_blank">
<img alt="..." className="invision-logo" src={require("assets/img/invision-white-slim.png")}>
</img>
</a>
. Coded by <a href="https://www.creative-tim.com" rel="noopener noreferrer" target="_blank">
<img alt="..." className="creative-tim-logo" src={require("assets/img/creative-tim-white-slim2.png")}>
</img>
</a>
.
</h6>
</Container>
</div>
<div className="main">
<div className="section section-images">
<Container>
<Row>
<Col md="12">
<div className="hero-images-container">
<img alt="..." src={require("assets/img/hero-image-1.png")}>
</img>
</div>
<div className="hero-images-container-1">
<img alt="..." src={require("assets/img/hero-image-2.png")}>
</img>
</div>
<div className="hero-images-container-2">
<img alt="..." src={require("assets/img/hero-image-3.png")}>
</img>
</div>
</Col>
</Row>
</Container>
</div>
<div className="section section-basic" id="basic-elements">
<Container>
<h3 className="title">
Basic Elements
</h3>
<h4>
Buttons
</h4>
<p className="category">
Pick your style
</p>
<Row>
<Col md="10">
<Button color="primary" type="button">
Default
</Button>
<Button className="btn-round" color="primary" type="button">
Round
</Button>
<Button className="btn-round" color="primary" type="button">
<i className="now-ui-icons ui-2_favourite-28">
</i>
 With Icon
</Button>
<Button className="btn-icon btn-round" color="primary" type="button">
<i className="now-ui-icons ui-2_favourite-28">
</i>
</Button>
<Button className="btn-round" color="primary" outline type="button">
Outline
</Button>
</Col>
</Row>
<p className="category">
Pick your size
</p>
<Row>
<Col md="10">
<Button color="primary" size="sm">
Small
</Button>
<Button color="primary">
Regular
</Button>
<Button color="primary" size="lg">
Large
</Button>
</Col>
</Row>
<p className="category">
Pick your color
</p>
<Row>
<Col md="10">
<Button color="default">
Default
</Button>
<Button color="primary">
Primary
</Button>
<Button color="info">
Info
</Button>
<Button color="success">
Success
</Button>
<Button color="warning">
Warning
</Button>
<Button color="danger">
Danger
</Button>
<Button className="btn-neutral" color="default">
Neutral
</Button>
</Col>
</Row>
<h4>
Links
</h4>
<Row>
<Col md="8">
<Button color="link">
Default
</Button>
<Button className="btn-link" color="primary">
Primary
</Button>
<Button className="btn-link" color="info">
Info
</Button>
<Button className="btn-link" color="success">
Success
</Button>
<Button className="btn-link" color="warning">
Warning
</Button>
<Button className="btn-link" color="danger">
Danger
</Button>
</Col>
</Row>
<div className="space-70">
</div>
<div id="inputs">
<h4>
Inputs
</h4>
<p className="category">
Form Controls
</p>
<Row>
<Col lg="3" sm="6">
<FormGroup>
<Input defaultValue="" placeholder="Regular" type="text">
</Input>
</FormGroup>
</Col>
<Col lg="3" sm="6">
<FormGroup className="has-success">
<Input className="form-control-success" defaultValue="Success" type="text">
</Input>
</FormGroup>
</Col>
<Col lg="3" sm="6">
<FormGroup className="has-danger">
<Input className="form-control-danger" defaultValue="Error Input" type="email">
</Input>
</FormGroup>
</Col>
<Col lg="3" sm="6">
<InputGroup>
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className="fa fa-user-circle">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="Left Font Awesome Icon" type="text">
</Input>
</InputGroup>
</Col>
<Col lg="3" sm="6">
<InputGroup>
<Input placeholder="Right Nucleo Icon" type="text">
</Input>
<InputGroupAddon addonType="append">
<InputGroupText>
<i className="now-ui-icons users_single-02">
</i>
</InputGroupText>
</InputGroupAddon>
</InputGroup>
</Col>
</Row>
</div>
<div className="space-70">
</div>
<Row id="checkRadios">
<Col className="mb-4" lg="3" sm="6">
<p className="category">
Checkboxes
</p>
<FormGroup check>
<Label check>
<Input type="checkbox">
</Input>
<span className="form-check-sign">
</span>
 Unchecked
</Label>
</FormGroup>
<FormGroup check>
<Label check>
<Input defaultChecked type="checkbox">
</Input>
<span className="form-check-sign">
</span>
 Checked
</Label>
</FormGroup>
<FormGroup check disabled>
<Label check>
<Input disabled type="checkbox">
</Input>
<span className="form-check-sign">
</span>
 Disabled Unchecked
</Label>
</FormGroup>
<FormGroup check disabled>
<Label check>
<Input defaultChecked disabled type="checkbox">
</Input>
<span className="form-check-sign">
</span>
 Disabled Checked
</Label>
</FormGroup>
</Col>
<Col className="mb-4" lg="3" sm="6">
<p className="category">
Radios
</p>
<FormGroup check className="form-check-radio">
<Label check>
<Input defaultValue="option1" id="exampleRadios1" name="exampleRadios" type="radio">
</Input>
<span className="form-check-sign">
</span>
 Radio is off
</Label>
</FormGroup>
<FormGroup check className="form-check-radio">
<Label check>
<Input defaultChecked defaultValue="option2" id="exampleRadios1" name="exampleRadios" type="radio">
</Input>
<span className="form-check-sign">
</span>
 Radio is on
</Label>
</FormGroup>
<FormGroup check className="form-check-radio" disabled>
<Label check>
<Input defaultValue="option3" disabled id="exampleRadios2" name="exampleRadios1" type="radio">
</Input>
<span className="form-check-sign">
</span>
 Disabled radio is off
</Label>
</FormGroup>
<FormGroup check className="form-check-radio" disabled>
<Label check>
<Input defaultChecked defaultValue="option4" disabled id="exampleRadios2" name="exampleRadios1" type="radio">
</Input>
<span className="form-check-sign">
</span>
 Disabled radio is on
</Label>
</FormGroup>
</Col>
<Col lg="3" sm="6">
<p className="category">
Toggle Buttons
</p>
<Switch offColor="" offText="" onColor="" onText="">
</Switch>
<br>
</br>
<Switch defaultValue={false} offColor="" onColor="">
</Switch>
</Col>
<Col lg="3" sm="6">
<p className="category">
Sliders
</p>
<div className="slider" id="sliderRegular">
</div>
<br>
</br>
<div className="slider slider-primary" id="sliderDouble">
</div>
</Col>
</Row>
</Container>
</div>
<div className="section section-navbars">
<Container id="menu-dropdown">
<Row>
<Col md="6">
<h4>
Menu
</h4>
<Navbar className="bg-primary" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Menu
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#example-navbar" data-toggle="collapse" id="example-navbar" type="button">
<span className="navbar-toggler-bar bar1">
</span>
<span className="navbar-toggler-bar bar2">
</span>
<span className="navbar-toggler-bar bar3">
</span>
</button>
<UncontrolledCollapse data-nav-image="assets/img/blurred-image-1.jpg" id="example-navbar" navbar toggler="#example-navbar">
<Nav navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<p>
Link
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<p>
Link
</p>
</NavLink>
</NavItem>
<UncontrolledDropdown nav>
<DropdownToggle aria-expanded={false} aria-haspopup={true} caret color="default" data-toggle="dropdown" href="http://example.com" id="navbarDropdownMenuLink" nav>
<p>
 Dropdown
</p>
</DropdownToggle>
<DropdownMenu aria-labelledby="navbarDropdownMenuLink">
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Action
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Another action
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Something else here
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
</Col>
<Col md="6">
<h4>
Menu with Icons
</h4>
<Navbar className="bg-info" expand="lg">
<Container>
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Icons
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#example-navbar-icons" data-toggle="collapse" id="example-navbar-icons" type="button">
<span className="navbar-toggler-bar bar1">
</span>
<span className="navbar-toggler-bar bar2">
</span>
<span className="navbar-toggler-bar bar3">
</span>
</button>
<UncontrolledCollapse id="example-navbar-icons" navbar toggler="#example-navbar-icons">
<Nav className="ml-auto" navbar>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i aria-hidden={true} className="now-ui-icons ui-1_send">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i aria-hidden={true} className="now-ui-icons users_single-02">
</i>
</NavLink>
</NavItem>
<UncontrolledDropdown nav>
<DropdownToggle caret color="default" data-toggle="dropdown" href="#pablo" id="navbarDropdownMenuLink" nav onClick={e =>
 e.preventDefault()}>
<i aria-hidden={true} className="now-ui-icons ui-1_settings-gear-63">
</i>
</DropdownToggle>
<DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
<DropdownItem header>
Dropdown header
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Action
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Another action
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Something else here
</DropdownItem>
<div className="divider">
</div>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Separated link
</DropdownItem>
<div className="divider">
</div>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
One more separated link
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
</Col>
</Row>
<h4>
Navigation
</h4>
</Container>
<div id="navbar">
<div className="navigation-example" style={{backgroundImage:url('assets/img/bg7.jpg')}}>
<Navbar className="bg-primary" expand="lg">
<Container>
<div className="navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Primary color
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#example-navbar-primary" data-toggle="collapse" id="example-navbar-primary" type="button">
<span className="navbar-toggler-bar bar1">
</span>
<span className="navbar-toggler-bar bar2">
</span>
<span className="navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-primary" navbar toggler="#example-navbar-primary">
<Nav className="ml-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="now-ui-icons objects_globe">
</i>
<p>
Discover
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="now-ui-icons users_circle-08">
</i>
<p>
Profile
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="now-ui-icons ui-1_settings-gear-63">
</i>
<p>
Settings
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="bg-info" expand="lg">
<Container>
<div className="navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Info Color
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#example-navbar-info" data-toggle="collapse" id="example-navbar-info" type="button">
<span className="navbar-toggler-bar bar1">
</span>
<span className="navbar-toggler-bar bar2">
</span>
<span className="navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-info" navbar toggler="#example-navbar-info">
<Nav className="ml-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<p>
Discover
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<p>
Profile
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<p>
Settings
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="bg-success" expand="lg">
<Container>
<div className="navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Success Color
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#example-navbar-success" data-toggle="collapse" id="example-navbar-success" type="button">
<span className="navbar-toggler-bar bar1">
</span>
<span className="navbar-toggler-bar bar2">
</span>
<span className="navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-success" navbar toggler="#example-navbar-success">
<Nav className="ml-auto" navbar>
<NavItem className="active">
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="now-ui-icons objects_globe">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="now-ui-icons users_circle-08">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="now-ui-icons ui-1_settings-gear-63">
</i>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="bg-warning" expand="lg">
<Container>
<div className="navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Warning Color
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#example-navbar-warning" data-toggle="collapse" id="example-navbar-warning" type="button">
<span className="navbar-toggler-bar bar1">
</span>
<span className="navbar-toggler-bar bar2">
</span>
<span className="navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-warning" navbar toggler="#example-navbar-warning">
<Nav className="ml-auto" navbar>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-facebook-square">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-twitter">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-google-plus">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-instagram">
</i>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="bg-danger" expand="lg">
<Container>
<div className="navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Danger Color
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#example-navbar-danger" data-toggle="collapse" id="example-navbar-danger" type="button">
<span className="navbar-toggler-bar bar1">
</span>
<span className="navbar-toggler-bar bar2">
</span>
<span className="navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-danger" navbar toggler="#example-navbar-danger">
<Nav className="ml-auto" navbar>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-facebook-square">
</i>
<p>
Share
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-twitter">
</i>
<p>
Tweet
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-pinterest">
</i>
<p>
Pin
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
<Navbar className="navbar-transparent" expand="lg">
<Container>
<div className="navbar-translate">
<NavbarBrand href="#pablo" onClick={e =>
 e.preventDefault()}>
Transparent
</NavbarBrand>
<button aria-controls="navbarSupportedContent" aria-expanded={false} aria-label="Toggle navigation" className="navbar-toggler" data-target="#example-navbar-transparent" data-toggle="collapse" id="example-navbar-transparent" type="button">
<span className="navbar-toggler-bar bar1">
</span>
<span className="navbar-toggler-bar bar2">
</span>
<span className="navbar-toggler-bar bar3">
</span>
</button>
</div>
<UncontrolledCollapse id="example-navbar-transparent" navbar toggler="#example-navbar-transparent">
<Nav className="ml-auto" navbar>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-facebook-square">
</i>
<p>
Facebook
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-twitter">
</i>
<p>
Twitter
</p>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-instagram">
</i>
<p>
Instagram
</p>
</NavLink>
</NavItem>
</Nav>
</UncontrolledCollapse>
</Container>
</Navbar>
</div>
</div>
</div>
<div className="section section-tabs">
<Container>
<Row>
<Col className="ml-auto mr-auto" md="10" xl="6">
<p className="category">
Tabs with Icons on Card
</p>
<Card>
<CardHeader>
<Nav className="justify-content-center" role="tablist" tabs>
<NavItem>
<NavLink className="active" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className="now-ui-icons objects_umbrella-13">
</i>
 Home
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className="now-ui-icons shopping_cart-simple">
</i>
 Profile
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className="now-ui-icons shopping_shop">
</i>
 Messages
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
<i className="now-ui-icons ui-2_settings-90">
</i>
 Settings
</NavLink>
</NavItem>
</Nav>
</CardHeader>
<CardBody>
<TabContent className="text-center">
<TabPane className="active" id="home" role="tabpanel">
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
</Col>
<Col className="ml-auto mr-auto" md="10" xl="6">
<p className="category">
Tabs with Background on Card
</p>
<Card>
<CardHeader>
<Nav className="nav-tabs-neutral justify-content-center" data-background-color="orange" role="tablist" tabs>
<NavItem>
<NavLink className="active" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
Home
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
Profile
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
Messages
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tab">
Settings
</NavLink>
</NavItem>
</Nav>
</CardHeader>
<CardBody>
<TabContent className="text-center">
<TabPane className="active" id="home1" role="tabpanel">
<p>
I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
</p>
</TabPane>
<TabPane id="profile1" role="tabpanel">
<p>
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
</p>
</TabPane>
<TabPane id="messages1" role="tabpanel">
<p>
I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
</p>
</TabPane>
<TabPane id="settings1" role="tabpanel">
<p>
 "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
</p>
</TabPane>
</TabContent>
</CardBody>
</Card>
</Col>
</Row>
</Container>
</div>
<div className="section section-pagination">
<Container>
<Row>
<Col md="6">
<h4>
Progress Bars
</h4>
<div className="progress-container">
<span className="progress-badge">
Default
</span>
<Progress max="100" value="60">
<span className="progress-value">
25%
</span>
</Progress>
</div>
<div className="progress-container progress-primary">
<span className="progress-badge">
Primary
</span>
<Progress max="100" value="60">
<span className="progress-value">
60%
</span>
</Progress>
</div>
<br>
</br>
<h4>
Navigation Pills
</h4>
<Nav className="nav-pills-primary nav-pills-just-icons" pills role="tablist">
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tablist">
<i className="far fa-gem">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink className="active" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tablist">
<i className="fa fa-thermometer-full">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tablist">
<i className="fa fa-suitcase">
</i>
</NavLink>
</NavItem>
<NavItem>
<NavLink className="disabled" data-toggle="tab" href="#pablo" onClick={e =>
 e.preventDefault()} role="tablist">
<i className="fa fa-exclamation">
</i>
</NavLink>
</NavItem>
</Nav>
</Col>
<Col sm="6">
<h4>
Pagination
</h4>
<Pagination className="pagination pagination-primary" listclassName="pagination-primary">
<PaginationItem className="active">
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
1
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
2
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
3
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
4
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
5
</PaginationLink>
</PaginationItem>
</Pagination>
<Pagination>
<PaginationItem>
<PaginationLink aria-label="Previous" href="#pablo" onClick={e =>
 e.preventDefault()}>
<span aria-hidden={true}>
<i aria-hidden={true} className="fa fa-angle-double-left">
</i>
</span>
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
1
</PaginationLink>
</PaginationItem>
<PaginationItem className="active">
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
2
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink href="#pablo" onClick={e =>
 e.preventDefault()}>
3
</PaginationLink>
</PaginationItem>
<PaginationItem>
<PaginationLink aria-label="Next" href="#pablo" onClick={e =>
 e.preventDefault()}>
<span aria-hidden={true}>
<i aria-hidden={true} className="fa fa-angle-double-right">
</i>
</span>
</PaginationLink>
</PaginationItem>
</Pagination>
<br>
</br>
<h4>
Labels
</h4>
<Badge className="badge-default">
Default
</Badge>
<Badge color="primary">
Primary
</Badge>
<Badge color="success">
Success
</Badge>
<Badge color="info">
Info
</Badge>
<Badge color="warning">
Warning
</Badge>
<Badge color="danger">
Danger
</Badge>
<Badge className="badge-neutral">
Neutral
</Badge>
</Col>
</Row>
<br>
</br>
<div className="space">
</div>
<h4>
Notifications
</h4>
</Container>
</div>
<div className="section section-notifications">
<Alert color="success">
<Container>
<div className="alert-icon">
<i className="now-ui-icons ui-2_like">
</i>
</div>
<strong>
Well done!
</strong>
 You successfully read this important alert message.
</Container>
</Alert>
<Alert color="info">
<Container>
<div className="alert-icon">
<i className="now-ui-icons travel_info">
</i>
</div>
<strong>
Heads up!
</strong>
 This alert needs your attention, but it's not super important.
</Container>
</Alert>
<Alert color="warning">
<Container>
<div className="alert-icon">
<i className="now-ui-icons ui-1_bell-53">
</i>
</div>
<strong>
Warning!
</strong>
 Better check yourself, you're not looking too good.
</Container>
</Alert>
<Alert color="danger">
<Container>
<div className="alert-icon">
<i className="now-ui-icons objects_support-17">
</i>
</div>
<strong>
Oh snap!
</strong>
 Change a few things up and try submitting again.
</Container>
</Alert>
</div>
<div className="section">
<Container>
<h3 className="title">
Typography
</h3>
<div id="typography">
<Row>
<Col md="12">
<div className="typography-line">
<h1>
<span>
Header 1
</span>
The Life of Now UI Kit
</h1>
</div>
<div className="typography-line">
<h2>
<span>
Header 2
</span>
The Life of Now UI Kit
</h2>
</div>
<div className="typography-line">
<h3>
<span>
Header 3
</span>
The Life of Now UI Kit
</h3>
</div>
<div className="typography-line">
<h4>
<span>
Header 4
</span>
The Life of Now UI Kit
</h4>
</div>
<div className="typography-line">
<h5>
<span>
Header 5
</span>
The Life of Now UI Kit
</h5>
</div>
<div className="typography-line">
<h6>
<span>
Header 6
</span>
The Life of Now UI Kit
</h6>
</div>
<div className="typography-line">
<p>
<span>
Paragraph
</span>
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
</p>
</div>
<div className="typography-line">
<span>
Quote
</span>
<blockquote>
<p className="blockquote blockquote-primary">
 "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at." <br>
</br>
<br>
</br>
<small>
 - Noaa
</small>
</p>
</blockquote>
</div>
<div className="typography-line">
<span>
Muted Text
</span>
<p className="text-muted">
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
</p>
</div>
<div className="typography-line">
<span>
Primary Text
</span>
<p className="text-primary">
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
</p>
</div>
<div className="typography-line">
<span>
Info Text
</span>
<p className="text-info">
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
</p>
</div>
<div className="typography-line">
<span>
Success Text
</span>
<p className="text-success">
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
</p>
</div>
<div className="typography-line">
<span>
Warning Text
</span>
<p className="text-warning">
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
</p>
</div>
<div className="typography-line">
<span>
Danger Text
</span>
<p className="text-danger">
 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
</p>
</div>
<div className="typography-line">
<h2>
<span>
Small Tag
</span>
 Header with small subtitle <br>
</br>
<small>
Use "small" tag for the headers
</small>
</h2>
</div>
</Col>
</Row>
</div>
<div className="space-50">
</div>
<div id="images">
<h4>
Images
</h4>
<Row>
<Col sm="2">
<p className="category">
Image
</p>
<img alt="..." className="rounded" src={require("assets/img/julie.jpg")}>
</img>
</Col>
<Col sm="2">
<p className="category">
Circle Image
</p>
<img alt="..." className="rounded-circle" src={require("assets/img/julie.jpg")}>
</img>
</Col>
<Col sm="2">
<p className="category">
Raised
</p>
<img alt="..." className="rounded img-raised" src={require("assets/img/julie.jpg")}>
</img>
</Col>
<Col sm="2">
<p className="category">
Circle Raised
</p>
<img alt="..." className="rounded-circle img-raised" src={require("assets/img/julie.jpg")}>
</img>
</Col>
</Row>
</div>
</Container>
</div>
<div className="section section-javascript" id="javascriptComponents">
<Container>
<h3 className="title">
Javascript components
</h3>
<Row id="modals">
<Col md="6">
<h4>
Modal
</h4>
<Button color="primary" data-target="#myModal" data-toggle="modal">
 Launch Modal
</Button>
<Button color="warning" data-target="#myModal1" data-toggle="modal">
 Launch Modal Mini
</Button>
</Col>
<Col md="6">
<h4>
Popovers
</h4>
<Button color="default" data-color="primary" data-container="body" data-content="Here will be some very useful information about his popover." data-placement="left" id="tooltip175489643" type="button">
 On left
</Button>
<UncontrolledPopover placement="left" target="tooltip175489643">
<PopoverHeader>
Popover On Left
</PopoverHeader>
<PopoverBody>
Here will be some very useful information about his popover.
</PopoverBody>
</UncontrolledPopover>
<Button color="default" data-container="body" data-content="Here will be some very useful information about his popover." data-placement="top" id="tooltip768569110" type="button">
 On top
</Button>
<UncontrolledPopover placement="top" target="tooltip768569110">
<PopoverHeader>
Popover on Top
</PopoverHeader>
<PopoverBody>
Here will be some very useful information about his popover.
</PopoverBody>
</UncontrolledPopover>
<Button color="default" data-container="body" data-content="Here will be some very useful information about his popover.<br>
 Here will be some very useful information about his popover." data-placement="right" id="tooltip966745638" type="button">
 On right
</Button>
<UncontrolledPopover placement="right" target="tooltip966745638">
<PopoverHeader>
Popover on Right
</PopoverHeader>
<PopoverBody>
Here will be some very useful information about his popover.<br> Here will be some very useful information about his popover.
</PopoverBody>
</UncontrolledPopover>
<Button color="default" data-container="body" data-content="Here will be some very useful information about his popover." data-placement="bottom" id="tooltip822900491" type="button">
 On bottom
</Button>
<UncontrolledPopover placement="bottom" target="tooltip822900491">
<PopoverHeader>
Popover on Bottom
</PopoverHeader>
<PopoverBody>
Here will be some very useful information about his popover.
</PopoverBody>
</UncontrolledPopover>
</Col>
<br>
</br>
<br>
</br>
<Col md="6">
<h4>
Datepicker
</h4>
<Row>
<Col md="6">
<div className="datepicker-container">
<FormGroup>
<Input className="date-picker" data-datepicker-color="primary" defaultValue="10/05/2016" type="text">
</Input>
</FormGroup>
</div>
</Col>
</Row>
</Col>
<Col md="6">
<h4>
Tooltips
</h4>
<Button className="btn-tooltip" color="default" data-animation={true} data-container="body" data-delay="100" data-placement="left" id="tooltip116884155" type="button">
On left
</Button>
<UncontrolledTooltip delay={0} placement="left" target="tooltip116884155">
Tooltip on left
</UncontrolledTooltip>
<Button className="btn-tooltip" color="default" data-animation={true} data-container="body" data-placement="top" id="tooltip502327420" type="button">
On top
</Button>
<UncontrolledTooltip delay={0} placement="top" target="tooltip502327420">
Tooltip on top
</UncontrolledTooltip>
<Button className="btn-tooltip" color="default" data-animation={true} data-container="body" data-placement="bottom" id="tooltip243887155" type="button">
On bottom
</Button>
<UncontrolledTooltip delay={0} placement="bottom" target="tooltip243887155">
Tooltip on bottom
</UncontrolledTooltip>
<Button className="btn-tooltip" color="default" data-animation={true} data-container="body" data-placement="right" id="tooltip542703310" type="button">
On right
</Button>
<UncontrolledTooltip delay={0} placement="right" target="tooltip542703310">
Tooltip on right
</UncontrolledTooltip>
<div className="clearfix">
</div>
<br>
</br>
<br>
</br>
</Col>
</Row>
</Container>
</div>
<div className="section" id="carousel">
<Container>
<div className="title">
<h4>
Carousel
</h4>
</div>
<Row className="justify-content-center">
<Col lg="8" md="12">
<div className="carousel slide" data-ride="carousel" id="carouselExampleIndicators">
<ol className="carousel-indicators">
<li className="active" data-slide-to="0" data-target="#carouselExampleIndicators">
</li>
<li data-slide-to="1" data-target="#carouselExampleIndicators">
</li>
<li data-slide-to="2" data-target="#carouselExampleIndicators">
</li>
</ol>
<div className="carousel-inner" role="listbox">
<div className="carousel-item active">
<img alt="..." className="d-block" src={require("assets/img/bg1.jpg")}>
</img>
<div className="carousel-caption d-none d-md-block">
<h5>
Nature, United States
</h5>
</div>
</div>
<div className="carousel-item">
<img alt="..." className="d-block" src={require("assets/img/bg3.jpg")}>
</img>
<div className="carousel-caption d-none d-md-block">
<h5>
Somewhere Beyond, United States
</h5>
</div>
</div>
<div className="carousel-item">
<img alt="..." className="d-block" src={require("assets/img/bg4.jpg")}>
</img>
<div className="carousel-caption d-none d-md-block">
<h5>
Yellowstone National Park, United States
</h5>
</div>
</div>
</div>
<a className="carousel-control-prev" data-slide="prev" href="#pablo" onClick={e =>
 e.preventDefault()} role="button">
<i className="now-ui-icons arrows-1_minimal-left">
</i>
</a>
<a className="carousel-control-next" data-slide="next" href="#pablo" onClick={e =>
 e.preventDefault()} role="button">
<i className="now-ui-icons arrows-1_minimal-right">
</i>
</a>
</div>
</Col>
</Row>
</Container>
</div>
<div className="section section-nucleo-icons">
<Container>
<Row>
<Col lg="6" md="12">
<h2 className="title">
Nucleo Icons
</h2>
<h5 className="description">
 Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.
</h5>
<Button className="btn-round" color="primary" href="nucleo-icons.html" rel="noopener noreferrer" size="lg" target="_blank">
View Demo Icons
</Button>
<Button className="btn-round" color="primary" href="https://nucleoapp.com/?ref=1712" outline rel="noopener noreferrer" size="lg" target="_blank">
View All Icons
</Button>
</Col>
<Col lg="6" md="12">
<div className="icons-container">
<i className="now-ui-icons ui-1_send">
</i>
<i className="now-ui-icons ui-2_like">
</i>
<i className="now-ui-icons transportation_air-baloon">
</i>
<i className="now-ui-icons text_bold">
</i>
<i className="now-ui-icons tech_headphones">
</i>
<i className="now-ui-icons emoticons_satisfied">
</i>
<i className="now-ui-icons shopping_cart-simple">
</i>
<i className="now-ui-icons objects_spaceship">
</i>
<i className="now-ui-icons media-2_note-03">
</i>
<i className="now-ui-icons ui-2_favourite-28">
</i>
<i className="now-ui-icons design_palette">
</i>
<i className="now-ui-icons clothes_tie-bow">
</i>
<i className="now-ui-icons location_pin">
</i>
<i className="now-ui-icons objects_key-25">
</i>
<i className="now-ui-icons travel_istanbul">
</i>
</div>
</Col>
</Row>
</Container>
</div>
<div className="section">
<Container className="text-center">
<Row className="justify-content-md-center">
<Col lg="8" md="12">
<h2 className="title">
Completed with examples
</h2>
<h5 className="description">
The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.
</h5>
</Col>
</Row>
</Container>
</div>
<div className="section section-signup" style={{backgroundImage: "url('assets/img/bg11.jpg')", background-size: "cover", background-position: "top center", min-height: "700px",}}>
<Container>
<Row>
<Card className="card-signup" data-background-color="orange">
<Form action="" className="form" method="">
<CardHeader className="text-center">
<CardTitle className="title-up" tag="h3">
Sign Up
</CardTitle>
<div className="social-line">
<Button className="btn-neutral btn-icon btn-round" color="facebook" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-facebook-square">
</i>
</Button>
<Button className="btn-neutral btn-icon btn-round" color="twitter" href="#pablo" onClick={e =>
 e.preventDefault()} size="lg">
<i className="fab fa-twitter">
</i>
</Button>
<Button className="btn-neutral btn-icon btn-round" color="google" href="#pablo" onClick={e =>
 e.preventDefault()}>
<i className="fab fa-google-plus">
</i>
</Button>
</div>
</CardHeader>
<CardBody>
<InputGroup className="no-border">
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className="now-ui-icons users_circle-08">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="First Name..." type="text">
</Input>
</InputGroup>
<InputGroup className="no-border">
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className="now-ui-icons text_caps-small">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="Last Name..." type="text">
</Input>
</InputGroup>
<InputGroup className="no-border">
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className="now-ui-icons ui-1_email-85">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="Email..." type="text">
</Input>
</InputGroup>
</CardBody>
<CardFooter className="text-center">
<Button className="btn-neutral btn-round" color="default" href="#pablo" onClick={e =>
 e.preventDefault()} size="lg">
Get Started
</Button>
</CardFooter>
</Form>
</Card>
</Row>
<div className="col text-center">
<Button className="btn-round btn-white" color="default" href="examples/login-page.html" outline rel="noopener noreferrer" size="lg" target="_blank">
View Login Page
</Button>
</div>
</Container>
</div>
<div className="section section-examples" data-background-color="black">
<div className="space-50">
</div>
<Container className="text-center">
<Row>
<div className="col">
<a href="examples/landing-page.html" rel="noopener noreferrer" target="_blank">
<img alt="..." className="img-raised" src={require("assets/img/landing.jpg")}>
</img>
</a>
<Button className="btn-round" color="default" href="examples/landing-page.html" outline>
View Landing Page
</Button>
</div>
<div className="col">
<a href="examples/profile-page.html" rel="noopener noreferrer" target="_blank">
<img alt="..." className="img-raised" src={require("assets/img/profile.jpg")}>
</img>
</a>
<Button className="btn-round" color="default" href="examples/profile-page.html" outline>
View Profile Page
</Button>
</div>
</Row>
</Container>
</div>
<div className="section section-download" data-background-color="black" id="#download-section">
<Container>
<Row className="justify-content-md-center">
<Col className="text-center" lg="8" md="12">
<h3 className="title">
Do you love this Bootstrap 4 UI Kit?
</h3>
<h5 className="description">
Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!
</h5>
</Col>
<Col className="text-center" lg="8" md="12">
<Button className="btn-round" color="primary" href="https://www.creative-tim.com/product/now-ui-kit" role="button" size="lg">
 Download HTML
</Button>
<Button className="btn-round" color="primary" href="https://www.invisionapp.com/now" outline rel="noopener noreferrer" role="button" size="lg" target="_blank">
 Download PSD/Sketch
</Button>
</Col>
</Row>
<br>
</br>
<br>
</br>
<br>
</br>
<Row className="text-center mt-5">
<Col className="ml-auto mr-auto" md="8">
<h2>
Want more?
</h2>
<h5 className="description">
We've just launched <a href="http://demos.creative-tim.com/now-ui-kit-pro/presentation.html" rel="noopener noreferrer" target="_blank">
Now UI Kit PRO
</a>
. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 UI Kit.
</h5>
</Col>
<Col md="12">
<Button className="btn-neutral btn-round" color="default" href="http://demos.creative-tim.com/now-ui-kit-pro/presentation.html" rel="noopener noreferrer" size="lg" target="_blank">
<i className="now-ui-icons arrows-1_share-66">
</i>
 Upgrade to PRO
</Button>
</Col>
</Row>
<br>
</br>
<br>
</br>
<Row className="justify-content-md-center sharing-area text-center">
<Col className="text-center" lg="8" md="12">
<h3>
Thank you for supporting us!
</h3>
</Col>
<Col className="text-center" lg="8" md="12">
<Button className="btn-neutral btn-icon btn-round" color="twitter" href="https://www.twitter.com/creativetim" id="tooltip86114138" size="lg" target="_blank">
<i className="fab fa-twitter">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip86114138">
Follow us
</UncontrolledTooltip>
<Button className="btn-neutral btn-icon btn-round" color="facebook" href="https://www.facebook.com/creativetim" id="tooltip735272548" size="lg" target="_blank">
<i className="fab fa-facebook-square">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip735272548">
Like us
</UncontrolledTooltip>
<Button className="btn-neutral btn-icon btn-round" color="linkedin" href="https://www.linkedin.com/company-beta/9430489/" id="tooltip647117716" size="lg" target="_blank">
<i className="fab fa-linkedin">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip647117716">
Follow us
</UncontrolledTooltip>
<Button className="btn-neutral btn-icon btn-round" color="github" href="https://github.com/creativetimofficial/now-ui-kit" id="tooltip331904895" size="lg" target="_blank">
<i className="fab fa-github">
</i>
</Button>
<UncontrolledTooltip delay={0} target="tooltip331904895">
Star on Github
</UncontrolledTooltip>
</Col>
</Row>
</Container>
</div>
</div>
<Modal>
<div className="modal-header justify-content-center">
<button aria-hidden={true} className="close" data-dismiss="modal" type="button">
<i className="now-ui-icons ui-1_simple-remove">
</i>
</button>
<h4 className="title title-up">
Modal title
</h4>
</div>
<div className="modal-body">
<p>
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
</p>
</div>
<div className="modal-footer">
<Button color="default" type="button">
Nice Button
</Button>
<Button color="danger" data-dismiss="modal" type="button">
Close
</Button>
</div>
</Modal>
<Modal modalclassName="modal-mini modal-primary">
<div className="modal-header justify-content-center">
<div className="modal-profile">
<i className="now-ui-icons users_circle-08">
</i>
</div>
</div>
<div className="modal-body">
<p>
Always have an access to your profile
</p>
</div>
<div className="modal-footer">
<Button className="btn-neutral" color="link" type="button">
Back
</Button>
<Button className="btn-neutral" color="link" data-dismiss="modal" type="button">
Close
</Button>
</div>
</Modal>
<footer className="footer" data-background-color="black">
<Container>
<nav>
<ul>
<li>
<a href="https://www.creative-tim.com">
 Creative Tim
</a>
</li>
<li>
<a href="http://presentation.creative-tim.com">
 About Us
</a>
</li>
<li>
<a href="http://blog.creative-tim.com">
 Blog
</a>
</li>
</ul>
</nav>
<div className="copyright" id="copyright">
 © <script>
 document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
</script>
, Designed by <a href="https://www.invisionapp.com" rel="noopener noreferrer" target="_blank">
Invision
</a>
. Coded by <a href="https://www.creative-tim.com" rel="noopener noreferrer" target="_blank">
Creative Tim
</a>
.
</div>
</Container>
</footer>
</div>
<script src="./assets/js/core/jquery.min.js" type="text/javascript">
</script>
<script src="./assets/js/core/popper.min.js" type="text/javascript">
</script>
<script src="./assets/js/core/bootstrap.min.js" type="text/javascript">
</script>
<script src="./assets/js/plugins/bootstrap-switch.js">
</script>
<script src="./assets/js/plugins/nouislider.min.js" type="text/javascript">
</script>
<script src="./assets/js/plugins/bootstrap-datepicker.js" type="text/javascript">
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE">
</script>
<script src="./assets/js/now-ui-kit.js?v=1.3.0" type="text/javascript">
</script>
<script>
 $(document).ready(function() { // the body of this function is in assets/js/now-ui-kit.js nowuiKit.initSliders(); }); function scrollToDownload() { if ($('.section-download').length != 0) { $("html, body").animate({ scrollTop: $('.section-download').offset().top }, 1000); } }
</script>
</body>
</html>

    </>
  );
}

export default Index;
