import React from "react";

// reactstrap components
import { Button, UncontrolledTooltip } from "reactstrap";

function Tooltips() {
  return (
    <>
      <h1 className="bd-title" id="content">
        Tooltips
      </h1>
      <p className="bd-lead">
        Documentation and examples for adding custom Bootstrap tooltips with CSS
        and JavaScript using CSS3 for animations and data-attributes for local
        title storage.
      </p>
      <h2 id="examples">Examples</h2>
      <p>Hover over the links below to see tooltips:</p>
      <div className="bd-example tooltip-demo">
        <p className="muted">
          Tight pants next level keffiyeh{" "}
          <a
            href="#pablo"
            id="tooltip552294621"
            onClick={e => e.preventDefault()}
          >
            you probably
          </a>
          <UncontrolledTooltip delay={0} target="tooltip552294621">
            Default tooltip
          </UncontrolledTooltip>
          haven't heard of them. Photo booth beard raw denim letterpress vegan
          messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie
          sustainable quinoa 8-bit american apparel{" "}
          <a
            href="#pablo"
            id="tooltip514960528"
            onClick={e => e.preventDefault()}
          >
            have a
          </a>
          <UncontrolledTooltip delay={0} target="tooltip514960528">
            Another tooltip
          </UncontrolledTooltip>
          terry richardson vinyl chambray. Beard stumptown, cardigans banh mi
          lomo thundercats. Tofu biodiesel williamsburg marfa, four loko
          mcsweeney's cleanse vegan chambray. A really ironic artisan{" "}
          <a
            href="#pablo"
            id="tooltip615286285"
            onClick={e => e.preventDefault()}
          >
            whatever keytar
          </a>
          <UncontrolledTooltip delay={0} target="tooltip615286285">
            Another one here too
          </UncontrolledTooltip>
          , scenester farm-to-table banksy Austin{" "}
          <a
            href="#pablo"
            id="tooltip139401597"
            onClick={e => e.preventDefault()}
          >
            twitter handle
          </a>
          <UncontrolledTooltip delay={0} target="tooltip139401597">
            The last tip!
          </UncontrolledTooltip>
          freegan cred raw denim single-origin coffee viral.
        </p>
      </div>
      <h3 id="static-demo">Static demo</h3>
      <p>Four options are available: top, right, bottom, and left aligned.</p>
      <div className="bd-example bd-example-tooltip-static">
        <div
          className="tooltip bs-tooltip-top bs-tooltip-top-docs"
          role="tooltip"
        >
          <div className="arrow"></div>
          <div className="tooltip-inner">Tooltip on the top</div>
        </div>
        <div
          className="tooltip bs-tooltip-right bs-tooltip-right-docs"
          role="tooltip"
        >
          <div className="arrow"></div>
          <div className="tooltip-inner">Tooltip on the right</div>
        </div>
        <div
          className="tooltip bs-tooltip-bottom bs-tooltip-bottom-docs"
          role="tooltip"
        >
          <div className="arrow"></div>
          <div className="tooltip-inner">Tooltip on the bottom</div>
        </div>
        <div
          className="tooltip bs-tooltip-left bs-tooltip-left-docs"
          role="tooltip"
        >
          <div className="arrow"></div>
          <div className="tooltip-inner">Tooltip on the left</div>
        </div>
      </div>
      <h3 id="interactive-demo">Interactive demo</h3>
      <p>Hover over the buttons below to see their tooltips.</p>
      <div className="bd-example tooltip-demo">
        <div className="bd-example-tooltips">
          <Button
            color="secondary"
            data-placement="top"
            id="tooltip377217578"
            type="button"
          >
            Tooltip on top
          </Button>
          <UncontrolledTooltip
            delay={0}
            placement="top"
            target="tooltip377217578"
          >
            Tooltip on top
          </UncontrolledTooltip>
          <Button
            color="secondary"
            data-placement="right"
            id="tooltip336081099"
            type="button"
          >
            Tooltip on right
          </Button>
          <UncontrolledTooltip
            delay={0}
            placement="right"
            target="tooltip336081099"
          >
            Tooltip on right
          </UncontrolledTooltip>
          <Button
            color="secondary"
            data-placement="bottom"
            id="tooltip855652090"
            type="button"
          >
            Tooltip on bottom
          </Button>
          <UncontrolledTooltip
            delay={0}
            placement="bottom"
            target="tooltip855652090"
          >
            Tooltip on bottom
          </UncontrolledTooltip>
          <Button
            color="secondary"
            data-placement="left"
            id="tooltip316527796"
            type="button"
          >
            Tooltip on left
          </Button>
          <UncontrolledTooltip
            delay={0}
            placement="left"
            target="tooltip316527796"
          >
            Tooltip on left
          </UncontrolledTooltip>
          <Button
            color="secondary"
            data-html={true}
            id="tooltip248014427"
            type="button"
          >
            Tooltip with HTML
          </Button>
          <UncontrolledTooltip delay={0} target="tooltip248014427">
            <em>Tooltip</em> <u>with</u> <b>HTML</b>
          </UncontrolledTooltip>
        </div>
      </div>
      <p>And with custom HTML added:</p>
      <h2 id="usage">Usage</h2>
      <p>
        The tooltip plugin generates content and markup on demand, and by
        default places tooltips after their trigger element.
      </p>
      <p>Trigger the tooltip via JavaScript:</p>
      <h3 id="markup">Markup</h3>
      <p>
        The required markup for a tooltip is only a{" "}
        <code className="highlighter-rouge">data</code>
        attribute and <code className="highlighter-rouge">title</code>
        on the HTML element you wish to have a tooltip. The generated markup of
        a tooltip is rather simple, though it does require a position (by
        default, set to <code className="highlighter-rouge">top</code>
        by the plugin).
      </p>
      <div className="bd-callout bd-callout-warning">
        <h4 id="making-tooltips-work-for-keyboard-and-assistive-technology-users">
          Making tooltips work for keyboard and assistive technology users
        </h4>
        <p>
          You should only add tooltips to HTML elements that are traditionally
          keyboard-focusable and interactive (such as links or form controls).
          Although arbitrary HTML elements (such as{" "}
          <code className="highlighter-rouge">{`<span>`}</code>
          s) can be made focusable by adding the{" "}
          <code className="highlighter-rouge">tabindex="0"</code>
          attribute, this will add potentially annoying and confusing tab stops
          on non-interactive elements for keyboard users. In addition, most
          assistive technologies currently do not announce the tooltip in this
          situation.
        </p>
      </div>
      <div className="bd-callout bd-callout-info">
        <h4 id="data-attributes-for-individual-tooltips">
          Data attributes for individual tooltips
        </h4>
        <p>
          Options for individual tooltips can alternatively be specified through
          the use of data attributes, as explained above.
        </p>
      </div>
      <p>
        If you want to see more examples and properties please check the
        official{" "}
        <a href="http://getbootstrap.com/docs/4.0/components/tooltips/">
          Bootstrap Documentation
        </a>
      </p>
    </>
  );
}

export default Tooltips;
