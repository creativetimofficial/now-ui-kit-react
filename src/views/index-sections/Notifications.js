import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function Notifications() {
  const [alert1, setAlert1] = React.useState(true);
  const [alert2, setAlert2] = React.useState(true);
  const [alert3, setAlert3] = React.useState(true);
  const [alert4, setAlert4] = React.useState(true);
  return (
    <>
      <div className="section section-notifications">
        <Alert color="success" isOpen={alert1}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-2_like"></i>
            </div>
            <strong>Well done!</strong> You successfully read this important
            alert message.
            <button
              type="button"
              className="close"
              onClick={() => setAlert1(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
        <Alert color="info" isOpen={alert2}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons travel_info"></i>
            </div>
            <strong>Heads up!</strong> This alert needs your attention, but it's
            not super important.
            <button
              type="button"
              className="close"
              onClick={() => setAlert2(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
        <Alert color="warning" isOpen={alert3}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-1_bell-53"></i>
            </div>
            <strong>Warning!</strong> Better check yourself, you're not looking
            too good.
            <button
              type="button"
              className="close"
              onClick={() => setAlert3(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
        <Alert color="danger" isOpen={alert4}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons objects_support-17"></i>
            </div>
            <strong>Oh snap!</strong> Change a few things up and try submitting
            again.
            <button
              type="button"
              className="close"
              onClick={() => setAlert4(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default Notifications;
