import React from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        classname="sign-in-modal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hostainer - Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <h4>Title</h4>
            <p>
              Some quick example text to build on the card title and make up
                the bulk of the card's content. <br />
                Beispiel Anmeldenamen für Studenten: s091234 und das Kennwort.
              <br />
                Beispiel Anmeldenamen für Dozenten: d201234 und das Kennwort.
              </p>

                <Form>
                  {/* POST REQUEST AUTHENTICATION */}
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Anmeldename</Form.Label>
                    <Form.Control type="email" placeholder="Anmeldename" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Passwort</Form.Label>
                    <Form.Control type="password" placeholder="Passwort" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={props.onHide}>
                    Submit
                  </Button>
                </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
}

function LoginModal() {
    const [modalShow, setModalShow] = React.useState(true);

    return (
        <>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </>
    );
 }

export default LoginModal;
