import { toast } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { auth } from "../../../../config/config";

function Signin() {
  // const loginWG = () => {
  //   auth.signInWithPopup(provider).catch((e) => alert(e.message));
  // };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setEmail("");
          setPassword("");
          setSuccessMsg("Signin success");
          setTimeout(() => {
            setSuccessMsg("");
          }, 3000);
        })
        .catch((e) => {
          setErrorMsg("Wrong password or email");
          setTimeout(() => {
            setErrorMsg("");
          }, 3000);
        });
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };

  return (
    <Form onSubmit={handleLogin}>
      {successMsg && <div className="bg-success text-white">{successMsg}</div>}
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

      <Button variant="success" type="submit" onClick={handleLogin}>
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

      {errorMsg && <div className="bg-danger text-white">{errorMsg}</div>}
    </Form>
  );
}

export default Signin;
