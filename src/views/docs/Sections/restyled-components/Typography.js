/*eslint-disable*/
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeHeadings1 = `<h1>h1. Bootstrap heading</h1>
<h2>h2. Bootstrap heading</h2>
<h3>h3. Bootstrap heading</h3>
<h4>h4. Bootstrap heading</h4>
<h5>h5. Bootstrap heading</h5>
<h6>h6. Bootstrap heading</h6>`;
const codeHeadings2 = `<p className="h1">h1. Bootstrap heading</p>
<p className="h2">h2. Bootstrap heading</p>
<p className="h3">h3. Bootstrap heading</p>
<p className="h4">h4. Bootstrap heading</p>
<p className="h5">h5. Bootstrap heading</p>
<p className="h6">h6. Bootstrap heading</p>`;
const codeCustomizingHeadings = `<span className="h3">
  Fancy display heading{" "}
  <small className="text-muted">With faded secondary text</small>
</span>`;
const codeBlockquotes = `<blockquote className="blockquote">
  <p className="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    posuere erat a ante.
  </p>
</blockquote>`;
const codeNamingASource = `<blockquote className="blockquote">
  <p className="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    posuere erat a ante.
  </p>
  <footer className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>`;
const codeAlignment1 = `<blockquote className="blockquote text-center">
  <p className="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    posuere erat a ante.
  </p>
  <footer className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>`;
const codeAlignment2 = `<blockquote className="blockquote text-right">
  <p className="mb-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
    posuere erat a ante.
  </p>
  <footer className="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>`;

function Typography() {
  return (
    <>
      <h1 className="bd-title" id="content">
        Typography
      </h1>
      <p className="bd-lead">
        Documentation and examples for Bootstrap typography, including global
        settings, headings, body text, lists, and more.
      </p>
      <h2 id="headings">Headings</h2>
      <p>
        All HTML headings, <code className="highlighter-rouge">{`<h1>`}</code>
        through <code className="highlighter-rouge">{`<h6>`}</code>, are
        available.
      </p>
      <table>
        <thead>
          <tr>
            <th>Heading</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <code className="highlighter-rouge">{`<h1></h1>`}</code>
              </p>
            </td>
            <td>
              <span className="h1">h1. Bootstrap heading</span>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code className="highlighter-rouge">{`<h2></h2>`}</code>
              </p>
            </td>
            <td>
              <span className="h2">h2. Bootstrap heading</span>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code className="highlighter-rouge">{`<h3></h3>`}</code>
              </p>
            </td>
            <td>
              <span className="h3">h3. Bootstrap heading</span>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code className="highlighter-rouge">{`<h4></h4>`}</code>
              </p>
            </td>
            <td>
              <span className="h4">h4. Bootstrap heading</span>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code className="highlighter-rouge">{`<h5></h5>`}</code>
              </p>
            </td>
            <td>
              <span className="h5">h5. Bootstrap heading</span>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <code className="highlighter-rouge">{`<h6></h6>`}</code>
              </p>
            </td>
            <td>
              <span className="h6">h6. Bootstrap heading</span>
            </td>
          </tr>
        </tbody>
      </table>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeHeadings1}
      </SyntaxHighlighter>
      <p>
        <code className="highlighter-rouge">.h1</code>
        through <code className="highlighter-rouge">.h6</code>
        classes are also available, for when you want to match the font styling
        of a heading but cannot use the associated HTML element.
      </p>
      <div className="bd-example" data-example-id="">
        <p className="h1">h1. Bootstrap heading</p>
        <p className="h2">h2. Bootstrap heading</p>
        <p className="h3">h3. Bootstrap heading</p>
        <p className="h4">h4. Bootstrap heading</p>
        <p className="h5">h5. Bootstrap heading</p>
        <p className="h6">h6. Bootstrap heading</p>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeHeadings2}
      </SyntaxHighlighter>
      <h3 id="customizing-headings">Customizing headings</h3>
      <p>
        Use the included utility classes to recreate the small secondary heading
        text from Bootstrap 3.
      </p>
      <div className="bd-example">
        <span className="h3">
          Fancy display heading{" "}
          <small className="text-muted">With faded secondary text</small>
        </span>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeCustomizingHeadings}
      </SyntaxHighlighter>
      <h2 id="blockquotes">Blockquotes</h2>
      <p>
        For quoting blocks of content from another source within your document.
        Wrap{" "}
        <code className="highlighter-rouge">
          {`<blockquote className="blockquote">`}
        </code>
        around any <abbr title="HyperText Markup Language">HTML</abbr>
        as the quote.
      </p>
      <div className="bd-example" data-example-id="">
        <blockquote className="blockquote">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
        </blockquote>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeBlockquotes}
      </SyntaxHighlighter>
      <h3 id="naming-a-source">Naming a source</h3>
      <p>
        Add a{" "}
        <code className="highlighter-rouge">
          {`<footer className="blockquote-footer">`}
        </code>
        for identifying the source. Wrap the name of the source work in{" "}
        <code className="highlighter-rouge">{`<cite>`}</code>.
      </p>
      <div className="bd-example" data-example-id="">
        <blockquote className="blockquote">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeNamingASource}
      </SyntaxHighlighter>
      <h3 id="alignment">Alignment</h3>
      <p>
        Use text utilities as needed to change the alignment of your blockquote.
      </p>
      <div className="bd-example" data-example-id="">
        <blockquote className="blockquote text-center">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeAlignment1}
      </SyntaxHighlighter>
      <div className="bd-example" data-example-id="">
        <blockquote className="blockquote text-right">
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
      <SyntaxHighlighter language="jsx" style={prism}>
        {codeAlignment2}
      </SyntaxHighlighter>
      <p>
        If you want to see more examples and properties please check the
        official{" "}
        <a
          href="https://getbootstrap.com/docs/4.0/content/typography/?ref=creativetim"
          target="_blank"
        >
          Bootstrap Documentation
        </a>
      </p>
    </>
  );
}

export default Typography;
