import React from "react";

// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

function Paginations() {
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
      <h2 id="disabled-and-active-states">Disabled and active states</h2>
      <p>
        Pagination links are customizable for different circumstances. Use{" "}
        <code className="highlighter-rouge">.disabled</code>
        for links that appear un-clickable and{" "}
        <code className="highlighter-rouge">.active</code>
        to indicate the current page.
      </p>
      <p>
        While the <code className="highlighter-rouge">.disabled</code>
        class uses{" "}
        <code className="highlighter-rouge">pointer-events: none</code>
        to <em>try</em>
        to disable the link functionality of{" "}
        <code className="highlighter-rouge">{`<a>`}</code>
        s, that CSS property is not yet standardized and doesn’t account for
        keyboard navigation. As such, you should always add{" "}
        <code className="highlighter-rouge">tabindex="-1"</code>
        on disabled links and use custom JavaScript to fully disable their
        functionality.
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
      <p>
        You can optionally swap out active or disabled anchors for{" "}
        <code className="highlighter-rouge">{`<span>`}</code>, or omit the
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
              <PaginationLink>
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
      <h2 id="alignment">Alignment</h2>
      <p>
        Change the alignment of pagination components with{" "}
        <a href="/docs/1.0/utilities/flex/">flexbox utilities</a>.
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
    </>
  );
}

export default Paginations;
