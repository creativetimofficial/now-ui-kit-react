/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const codeOverview = `import React from "react";

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

// core components

function Example() {
  return (
    <>
      <nav aria-label="Page navigation example">
        <Pagination>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              Previous
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              Next
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
}

export default Example`;

const codeDisabled1 = `import React from "react";

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

// core components

function Example() {
  return (
    <>
      <nav aria-label="...">
        <Pagination>
          <PaginationItem className="disabled">
            <PaginationLink
              href="#pablo"
              onClick={e => e.preventDefault()}
              tabindex="-1"
            >
              Previous
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="active">
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              2 <span className="sr-only">(current)</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              Next
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
}

export default Example`;

const codeDisabled2 = `import React from "react";

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

// core components

function Example() {
  return (
    <>
      <nav aria-label="...">
        <Pagination>
          <PaginationItem className="disabled">
            <PaginationLink>Previous</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="active">
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              2 <span className="sr-only">(current)</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              Next
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
}

export default Example`;

const codeAlignment1 = `import React from "react";

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

// core components

function Example() {
  return (
    <>
      <nav aria-label="Page navigation example">
        <Pagination
          className="pagination justify-content-center"
          listclassName="justify-content-center"
        >
          <PaginationItem className="disabled">
            <PaginationLink
              href="#pablo"
              onClick={e => e.preventDefault()}
              tabindex="-1"
            >
              Previous
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              Next
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
}

export default Example`;

const codeAlignment2 = `import React from "react";

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

// core components

function Example() {
  return (
    <>
      <nav aria-label="Page navigation example">
        <Pagination
          className="pagination justify-content-end"
          listclassName="justify-content-end"
        >
          <PaginationItem className="disabled">
            <PaginationLink
              href="#pablo"
              onClick={e => e.preventDefault()}
              tabindex="-1"
            >
              Previous
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
              Next
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
}

export default Example`;

class PaginationDocs extends React.Component {
  render() {
    return (
      <>
        <h1 className="bd-title" id="content">
          Pagination
        </h1>
        <p className="bd-lead">
          Documentation and examples for showing pagination to indicate a series
          of related content exists across multiple pages.
        </p>
        <h2 id="overview">Overview</h2>
        <div className="bd-example" data-example-id="">
          <nav aria-label="Page navigation example">
            <Pagination>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  Previous
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeOverview}
        </SyntaxHighlighter>
        <h2 id="disabled-and-active-states">Disabled and active states</h2>
        <p>
          Pagination links are customizable for different circumstances. Use{" "}
          <code class="highlighter-rouge">disabled</code> for links that appear
          un-clickable and <code class="highlighter-rouge">active</code> to
          indicate the current page.
        </p>
        <div className="bd-example" data-example-id="">
          <nav aria-label="...">
            <Pagination>
              <PaginationItem className="disabled">
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  tabindex="-1"
                >
                  Previous
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2 <span className="sr-only">(current)</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDisabled1}
        </SyntaxHighlighter>
        <p>
          You can optionally swap out active or disabled anchors for{" "}
          <code class="highlighter-rouge">&lt;span&gt;</code>, or omit the
          anchor in the case of the prev/next arrows, to remove click
          functionality and prevent keyboard focus while retaining intended
          styles.
        </p>
        <div className="bd-example" data-example-id="">
          <nav aria-label="...">
            <Pagination>
              <PaginationItem className="disabled">
                <PaginationLink>Previous</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2 <span className="sr-only">(current)</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeDisabled2}
        </SyntaxHighlighter>
        <h2 id="alignment">Alignment</h2>
        <p>
          Change the alignment of pagination components with{" "}
          <code>flexbox utilities</code>.
        </p>
        <div className="bd-example" data-example-id="">
          <nav aria-label="Page navigation example">
            <Pagination
              className="pagination justify-content-center"
              listclassName="justify-content-center"
            >
              <PaginationItem className="disabled">
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  tabindex="-1"
                >
                  Previous
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlignment1}
        </SyntaxHighlighter>
        <div className="bd-example" data-example-id="">
          <nav aria-label="Page navigation example">
            <Pagination
              className="pagination justify-content-end"
              listclassName="justify-content-end"
            >
              <PaginationItem className="disabled">
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  tabindex="-1"
                >
                  Previous
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#pablo" onClick={e => e.preventDefault()}>
                  Next
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeAlignment2}
        </SyntaxHighlighter>
        <h2>Props</h2>
        <p>
          For props please refer to{" "}
          <a
            href="https://reactstrap.github.io/components/pagination/?ref=creativetim"
            target="_blank"
          >
            reactstrap's pagination documentation
          </a>
          .
        </p>
      </>
    );
  }
}

export default PaginationDocs;
