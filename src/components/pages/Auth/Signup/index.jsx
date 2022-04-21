import React from "react";
import { Form, Button } from "react-bootstrap";

function Signup() {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Name *" required></Form.Control>
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
          type="password"
          placeholder="password *"
          required
        ></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="password"
          placeholder="re-password *"
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
        <Form.Control type="text" placeholder="Phone *" required></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="success" type="submit">
        Add New User
      </Button>
    </Form>
  );
}

export default Signup;
