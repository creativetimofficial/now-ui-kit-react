import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader() {
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          data-parallax={true}
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")"
          }}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={require("assets/img/ryan.jpg")}></img>
          </div>
          <h3 className="title">Ryan Scheinder</h3>
          <p className="category">Photographer</p>
          <div className="content">
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>26</h2>
              <p>Comments</p>
            </div>
            <div className="social-description">
              <h2>48</h2>
              <p>Bookmarks</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
