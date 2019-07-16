import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function Notifications() {
  return (
    <>
      <div className="section section-notifications">
        <Alert color="success">
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-2_like"></i>
            </div>
            <strong>Well done!</strong>
            You successfully read this important alert message.
          </Container>
        </Alert>
        <Alert color="info">
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons travel_info"></i>
            </div>
            <strong>Heads up!</strong>
            This alert needs your attention, but it's not super important.
          </Container>
        </Alert>
        <Alert color="warning">
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-1_bell-53"></i>
            </div>
            <strong>Warning!</strong>
            Better check yourself, you're not looking too good.
          </Container>
        </Alert>
        <Alert color="danger">
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons objects_support-17"></i>
            </div>
            <strong>Oh snap!</strong>
            Change a few things up and try submitting again.
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default Notifications;
