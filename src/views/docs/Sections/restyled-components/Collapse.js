/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

import {
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  CardHeader,
  Collapse
} from "reactstrap";

const codeExample = `import React from "react";

import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

class Collapses extends React.Component {
  render() {
    return (
      <>
        <Button color="primary" href="#collapseExample" id="linkToggler">
          Link
        </Button>
        <Button color="primary" id="buttonToggler">
          Button
        </Button>
        <UncontrolledCollapse toggler="#linkToggler,#buttonToggler">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              magni, voluptas debitis similique porro a molestias consequuntur
              earum odio officiis natus, amet hic, iste sed dignissimos esse
              fuga! Minus, alias.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </>
    );
  }
}

export default Collapses;
`;

const codeAccordionExample = `import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
} from "reactstrap";

function Collapses() {
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  return (
    <>
      <div id="acordeon">
        <div aria-multiselectable={true} id="accordion" role="tablist">
          <Card className="no-transition">
            <CardHeader className="card-collapse" id="headingOne" role="tab">
              <h5 className="mb-0 panel-title">
                <a
                  aria-expanded={collapses.includes(1)}
                  className="collapsed"
                  data-parent="#accordion"
                  href="#pablo"
                  id="collapseOne"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(1);
                  }}
                >
                  Default Collapsible Item 1{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(1)}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                beer farm-to-table, raw denim aesthetic synth nesciunt you
                probably haven't heard of them accusamus labore sustainable
                VHS.
              </CardBody>
            </Collapse>
            <CardHeader className="card-collapse" id="headingTwo" role="tab">
              <h5 className="mb-0 panel-title">
                <a
                  aria-controls="collapseTwo"
                  aria-expanded={collapses.includes(2)}
                  className="collapsed"
                  data-parent="#accordion"
                  href="#pablo"
                  id="collapseTwo"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(2);
                  }}
                >
                  Default Collapsible Item 2{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(2)}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                beer farm-to-table, raw denim aesthetic synth nesciunt you
                probably haven't heard of them accusamus labore sustainable
                VHS.
              </CardBody>
            </Collapse>
            <CardHeader
              className="card-collapse"
              id="headingThree"
              role="tab"
            >
              <h5 className="mb-0 panel-title">
                <a
                  aria-controls="collapseThree"
                  aria-expanded={collapses.includes(3)}
                  className="collapsed"
                  data-parent="#accordion"
                  href="#pablo"
                  id="collapseThree"
                  onClick={e => {
                    e.preventDefault();
                    changeCollapse(3);
                  }}
                >
                  Default Collapsible Item 3{" "}
                  <i className="nc-icon nc-minimal-down" />
                </a>
              </h5>
            </CardHeader>
            <Collapse isOpen={collapses.includes(3)}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                aliqua put a bird on it squid single-origin coffee nulla
                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                beer farm-to-table, raw denim aesthetic synth nesciunt you
                probably haven't heard of them accusamus labore sustainable
                VHS.
              </CardBody>
            </Collapse>
          </Card>
        </div>
        {/* end acordeon */}
      </div>
    </>
  );
}

export default Collapses;
`;

const codeCustomMarkup = `import React from "react";
// reactstrap components
import { UncontrolledCollapse } from "reactstrap";
// core components

function Example(){
  return (
    <>
      <div className="item">
        <a
          href="#pablo"
          id="exampleAccordion1"
          onClick={e => e.preventDefault()}
        >
          Toggle item
        </a>
        <UncontrolledCollapse
          role="tabpanel"
          toggler="#exampleAccordion1"
          defaultOpen
        >
          <p className=" mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pretium lorem non vestibulum scelerisque. Proin a vestibulum sem,
            eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare.
          </p>
        </UncontrolledCollapse>
      </div>
      <div className="item">
        <a
          href="#pablo"
          id="exampleAccordion2"
          onClick={e => e.preventDefault()}
        >
          Toggle item 2
        </a>
        <UncontrolledCollapse role="tabpanel" toggler="#exampleAccordion2">
          <p className=" mb-3">
            Donec at ipsum dignissim, rutrum turpis scelerisque, tristique
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </UncontrolledCollapse>
      </div>
    </>
  );
}

export default Example;`;

function Collapses() {
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  return (
    <>
      <h1 className="bd-title" id="content">
        Collapse
      </h1>
      <h2>Example</h2>
      <div className="bd-example">
        <Button color="primary" href="#collapseExample" id="linkToggler">
          Link
        </Button>
        <Button color="primary" id="buttonToggler">
          Button
        </Button>
        <UncontrolledCollapse toggler="#linkToggler,#buttonToggler">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              magni, voluptas debitis similique porro a molestias consequuntur
              earum odio officiis natus, amet hic, iste sed dignissimos esse
              fuga! Minus, alias.
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeExample}
      </SyntaxHighlighter>
      <h2>Accordion example</h2>
      <p>
        Using the <Link to="/documentation/cards">card</Link> component, you can
        extend the default collapse behavior to create an accordion.
      </p>
      <div className="bd-example">
        <div id="acordeon">
          <div aria-multiselectable={true} id="accordion" role="tablist">
            <Card className="no-transition">
              <CardHeader className="card-collapse" id="headingOne" role="tab">
                <h5 className="mb-0 panel-title">
                  <a
                    aria-expanded={collapses.includes(1)}
                    className="collapsed"
                    data-parent="#accordion"
                    href="#pablo"
                    id="collapseOne"
                    onClick={e => {
                      e.preventDefault();
                      changeCollapse(1);
                    }}
                  >
                    Default Collapsible Item 1{" "}
                    <i className="nc-icon nc-minimal-down" />
                  </a>
                </h5>
              </CardHeader>
              <Collapse isOpen={collapses.includes(1)}>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </CardBody>
              </Collapse>
              <CardHeader className="card-collapse" id="headingTwo" role="tab">
                <h5 className="mb-0 panel-title">
                  <a
                    aria-controls="collapseTwo"
                    aria-expanded={collapses.includes(2)}
                    className="collapsed"
                    data-parent="#accordion"
                    href="#pablo"
                    id="collapseTwo"
                    onClick={e => {
                      e.preventDefault();
                      changeCollapse(2);
                    }}
                  >
                    Default Collapsible Item 2{" "}
                    <i className="nc-icon nc-minimal-down" />
                  </a>
                </h5>
              </CardHeader>
              <Collapse isOpen={collapses.includes(2)}>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </CardBody>
              </Collapse>
              <CardHeader
                className="card-collapse"
                id="headingThree"
                role="tab"
              >
                <h5 className="mb-0 panel-title">
                  <a
                    aria-controls="collapseThree"
                    aria-expanded={collapses.includes(3)}
                    className="collapsed"
                    data-parent="#accordion"
                    href="#pablo"
                    id="collapseThree"
                    onClick={e => {
                      e.preventDefault();
                      changeCollapse(3);
                    }}
                  >
                    Default Collapsible Item 3{" "}
                    <i className="nc-icon nc-minimal-down" />
                  </a>
                </h5>
              </CardHeader>
              <Collapse isOpen={collapses.includes(3)}>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </CardBody>
              </Collapse>
            </Card>
          </div>
          {/* end acordeon */}
        </div>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeAccordionExample}
      </SyntaxHighlighter>
      <p>You can also create accordions with custom markup.</p>
      <div className="bd-example">
        <div className="item">
          <a
            href="#pablo"
            id="exampleAccordion1"
            onClick={e => e.preventDefault()}
          >
            Toggle item
          </a>
          <UncontrolledCollapse
            role="tabpanel"
            toggler="#exampleAccordion1"
            defaultOpen
          >
            <p className=" mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pretium lorem non vestibulum scelerisque. Proin a vestibulum sem,
              eget tristique massa. Aliquam lacinia rhoncus nibh quis ornare.
            </p>
          </UncontrolledCollapse>
        </div>
        <div className="item">
          <a
            href="#pablo"
            id="exampleAccordion2"
            onClick={e => e.preventDefault()}
          >
            Toggle item 2
          </a>
          <UncontrolledCollapse role="tabpanel" toggler="#exampleAccordion2">
            <p className=" mb-3">
              Donec at ipsum dignissim, rutrum turpis scelerisque, tristique
              lectus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </UncontrolledCollapse>
        </div>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeCustomMarkup}
      </SyntaxHighlighter>
      <h2>Prop</h2>
      <p>
        For props and more info, please read the{" "}
        <a
          href="https://reactstrap.github.io/components/collapse/?ref=creativetim"
          target="_blank"
        >
          official reactstrap documentation
        </a>
        .
      </p>
    </>
  );
}

export default Collapses;
