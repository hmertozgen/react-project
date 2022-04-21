import React from "react";
import { Form, Button } from "react-bootstrap";

function Signin() {
  return (
    <Form>
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

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="success" type="submit">
        Login
      </Button>

      <Button variant="success" type="submit">
        Login With Google
      </Button>
    </Form>
  );
}

export default Signin;
