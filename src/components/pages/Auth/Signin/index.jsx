import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Signin() {
  // const loginWG = () => {
  //   auth.signInWithPopup(provider).catch((e) => alert(e.message));
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <Form onSubmit={handleLogin}>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="password"
          placeholder="password *"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="success" type="submit">
        Login
      </Button>

      <Button
        className="ms-2"
        variant="primary"
        // type="submit"
        // onClick={loginWG}
      >
        Login With Google
      </Button>
    </Form>
  );
}

export default Signin;
