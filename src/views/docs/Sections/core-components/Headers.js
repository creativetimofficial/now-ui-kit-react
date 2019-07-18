import React from "react";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <>
      <h1 class="bd-title" id="content">
        Headers
      </h1>
      <p>
        We have three (3) demo Headers in our product. These can be found
        inside:
      </p>
      <ul>
        <li>
          <code className="highlighter-rouge">
            src/components/Headers/IndexHeader.js
          </code>
          <br />
          Used inside:
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
            src/components/Headers/LandingPageHeader.js
          </code>
          <br />
          Used inside:
          <ul>
            <li>
              <Link to="/landing-page" target="_blank">
                Landing Page
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <code className="highlighter-rouge">
            src/components/Headers/ProfilePageHeader.js
          </code>
          <br />
          Used inside:
          <ul>
            <li>
              <Link to="/profile-page" target="_blank">
                Profile Page
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <p>These are the upper parts of these pages.</p>
      <p>
        They come with a title and a subtitle, over an image that fits the
        entire screen.
      </p>
    </>
  );
}

export default Headers;
