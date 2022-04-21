import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

function Signup() {
  return (
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Signup</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Name *"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email *"
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control
                as="textarea"
                placeholder="Adress "
                rows={3}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Phone *"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="success" type="submit">
              Add New User
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

export default Signup;
