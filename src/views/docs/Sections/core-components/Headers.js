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
        </li>
        <li>
          <code className="highlighter-rouge">
            src/components/Headers/LandingPageHeader.js
          </code>
        </li>
        <li>
          <code className="highlighter-rouge">
            src/components/Headers/ProfilePageHeader.js
          </code>
        </li>
      </ul>
      <p>
        These are the upper parts of the{" "}
        <Link to="/index" target="_blank">
          index
        </Link>
        ,{" "}
        <Link to="/landing-page" target="_blank">
          landing
        </Link>{" "}
        and{" "}
        <Link to="/profile-page" target="_blank">
          profile
        </Link>{" "}
        pages.
      </p>
      <p>
        They come with a title and a subtitle, over an image that fits the
        entire screen.
      </p>
    </>
  );
}

export default Headers;
