import React from "react";
import { Link } from "react-router-dom";

function Footers() {
  return (
    <>
      <h1 class="bd-title" id="content">
        Footers
      </h1>
      <p>We have the following footers:</p>
      <ul>
        <li>
          <code className="highlighter-rouge">
            src/components/Footers/DarkFooter.js
          </code>
          <br />
          It is used inside:
          <ul>
            <li>
              <Link to="/index" target="_blank">
                Index page
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <code className="highlighter-rouge">
            src/components/Footers/DefaultFooter.js
          </code>
          <br />
          It is used inside:
          <ul>
            <li>
              <Link to="/landing-page" target="_blank">
                Landing page
              </Link>
            </li>
            <li>
              <Link to="/profile-page" target="_blank">
                Profile page
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <code className="highlighter-rouge">
            src/components/Footers/TransparentFooter.js
          </code>
          <br />
          It is used inside:
          <ul>
            <li>
              <Link to="/login-page" target="_blank">
                Login page
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <p>This is the demo bottom navigation.</p>
      <p>
        On the left, it has some links that redirect to our platform, and on the
        right, it has a small copyright.
      </p>
      <p>It was designed to be as simple as it may.</p>
      <p>
        Everything in this component is static, so you will need to manually
        change things if you want, so feel free to change this component as you
        wish.
      </p>
    </>
  );
}

export default Footers;
