import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Col
} from "reactstrap";

function LoginPage(){
React.useEffect(() => {
  document.body.classList.add("login-page");
  document.body.classList.add("sidebar-collapse");
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  return function cleanup() {
    document.body.classList.remove("login-page");
    document.body.classList.remove("sidebar-collapse");
  };
});
  return (
    <>
      <html lang="en">
<head>
<meta charset="utf-8">
</meta>
<link href="../assets/img/apple-icon.png" rel="apple-touch-icon" sizes="76x76">
</link>
<link href="../assets/img/favicon.png" rel="icon" type="image/png">
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
<link href="../assets/css/bootstrap.min.css" rel="stylesheet">
</link>
<link href="../assets/css/now-ui-kit.css?v=1.3.0" rel="stylesheet">
</link>
<link href="../assets/demo/demo.css" rel="stylesheet">
</link>
</head>
<body className="login-page sidebar-collapse">
<Navbar className="bg-primary fixed-top navbar-transparent" color-on-scroll="400" expand="lg">
<Container>
<UncontrolledDropdown className="button-dropdown">
<DropdownToggle caret color="default" data-toggle="dropdown" href="#pablo" id="navbarDropdown" onClick={e =>
 e.preventDefault()}>
<span className="button-bar">
</span>
<span className="button-bar">
</span>
<span className="button-bar">
</span>
</DropdownToggle>
<DropdownMenu aria-labelledby="navbarDropdown">
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
<DropdownItem divider>
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
Separated link
</DropdownItem>
<DropdownItem divider>
</DropdownItem>
<DropdownItem href="#pablo" onClick={e =>
 e.preventDefault()}>
One more separated link
</DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>
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
<UncontrolledCollapse className="justify-content-end" data-nav-image="../assets/img/blurred-image-1.jpg" id="navigation" navbar toggler="#navigation">
<Nav navbar>
<NavItem>
<NavLink href="../index.html">
Back to Kit
</NavLink>
</NavItem>
<NavItem>
<NavLink href="https://github.com/creativetimofficial/now-ui-kit/issues">
Have an issue?
</NavLink>
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
<div className="page-header clear-filter" filter-color="orange">
<div className="page-header-image" style={{backgroundImage:url(../assets/img/login.jpg)}}>
</div>
<div className="content">
<Container>
<Col className="ml-auto mr-auto" md="4">
<Card className="card-login card-plain">
<Form action="" className="form" method="">
<CardHeader className="text-center">
<div className="logo-container">
<img alt="..." src={require("assets/img/now-logo.png")}>
</img>
</div>
</CardHeader>
<CardBody>
<InputGroup className="no-border input-lg">
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className="now-ui-icons users_circle-08">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="First Name..." type="text">
</Input>
</InputGroup>
<InputGroup className="no-border input-lg">
<InputGroupAddon addonType="prepend">
<InputGroupText>
<i className="now-ui-icons text_caps-small">
</i>
</InputGroupText>
</InputGroupAddon>
<Input placeholder="Last Name..." type="text">
</Input>
</InputGroup>
</CardBody>
<CardFooter className="text-center">
<Button block className="btn-round" color="primary" href="#pablo" onClick={e =>
 e.preventDefault()} size="lg">
Get Started
</Button>
<div className="pull-left">
<h6>
<a className="link" href="#pablo" onClick={e =>
 e.preventDefault()}>
Create Account
</a>
</h6>
</div>
<div className="pull-right">
<h6>
<a className="link" href="#pablo" onClick={e =>
 e.preventDefault()}>
Need Help?
</a>
</h6>
</div>
</CardFooter>
</Form>
</Card>
</Col>
</Container>
</div>
<footer className="footer">
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
<script src="../assets/js/core/jquery.min.js" type="text/javascript">
</script>
<script src="../assets/js/core/popper.min.js" type="text/javascript">
</script>
<script src="../assets/js/core/bootstrap.min.js" type="text/javascript">
</script>
<script src="../assets/js/plugins/bootstrap-switch.js">
</script>
<script src="../assets/js/plugins/nouislider.min.js" type="text/javascript">
</script>
<script src="../assets/js/plugins/bootstrap-datepicker.js" type="text/javascript">
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE">
</script>
<script src="../assets/js/now-ui-kit.js?v=1.3.0" type="text/javascript">
</script>
</body>
</html>

    </>
  );
}

export default LoginPage;