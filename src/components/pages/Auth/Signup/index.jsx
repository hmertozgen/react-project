import { collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { auth, fs } from "../../../../config/firebase";
// import { useHistory } from "react-router-dom";

export const Signup = () => {
  // const history = useHistory();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    // console.log(fullname, email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        // console.log(credentials);
        collection(
          fs,
          "users",
          credentials.user.uid
            .set({
              FullName: fullname,
              Email: email,
              Password: password,
              RePassword: repassword,
              Address: adress,
              Phone: phone,
            })
            .then(() => {
              setSuccessMsg("Signup Succesfull.");
              setFullname("");
              setEmail("");
              setPassword("");
              setAdress("");
              setPhone("");
              setErrorMsg("");
              setTimeout(() => {
                setSuccessMsg("");
              }, 3000);
            })
        );
        // fs.collection("users")
        //   .doc(credentials.user.uid)
        //   .set({
        //     FullName: fullname,
        //     Email: email,
        //     Password: password,
        //     RePassword: repassword,
        //     Address: adress,
        //     Phone: phone,
        //   })
        // .then(() => {
        //   setSuccessMsg("Signup Succesfull.");
        //   setFullname("");
        //   setEmail("");
        //   setPassword("");
        //   setAdress("");
        //   setPhone("");
        //   setErrorMsg("");
        //   setTimeout(() => {
        //     setSuccessMsg("");
        //   }, 3000);
        // })
        // .catch((error) => {
        //   setErrorMsg(error.message);
        // });
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  return (
    <>
      {successMsg ? (
        <>
          <div className="success-msg">{successMsg}</div>
        </>
      ) : (
        ""
      )}
      <br />
      <br />

      <Form onSubmit={handleSignup}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Name *"
            required
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
          ></Form.Control>
        </Form.Group>
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

        <Form.Group>
          <Form.Control
            type="password"
            placeholder="re-password *"
            required
            onChange={(e) => setRePassword(e.target.value)}
            value={repassword}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Adress "
            rows={3}
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Phone *"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="success" type="submit">
          Add New User
        </Button>
      </Form>
      {errorMsg && (
        <>
          <div className="error-msg">{errorMsg}</div>
        </>
      )}
      <br></br>
    </>
  );
};

export default Signup;
