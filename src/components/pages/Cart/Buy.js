import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Buy() {
  const [cardNumber, setCardNumber] = useState("");
  const [fullname, setFullname] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const buyProcess = (e) => {
    e.preventDefault();
    if (cardNumber.length < 16) {
      setErrorMsg("Card Number can not be under 16 characters");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    } else if (fullname === "") {
      setErrorMsg("Name can not be empty");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    } else if (adress === "") {
      setErrorMsg("Address can not be empty");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    } else if (phone === "") {
      setErrorMsg("Number can not be empty");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    } else {
      setSuccessMsg("Buying Process Successfully");
      setTimeout(() => {
        setErrorMsg("");
        setFullname("");
        setCardNumber("");
        setSuccessMsg("");
        setAdress("");
        setPhone("");
      }, 3000);
    }
  };
  return (
    <>
      {successMsg && (
        <>
          <div className="success-msg bg-success text-white">{successMsg}</div>
        </>
      )}
      <br />
      <br />

      <Form onSubmit={buyProcess}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Card Number *"
            required
            onChange={(e) => setCardNumber(e.target.value)}
            value={cardNumber}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Name on the card *"
            required
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
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

        <Button variant="success" type="submit">
          Buy
        </Button>
      </Form>
      <br />
      {errorMsg && (
        <>
          <div className="error-msg bg-danger text-white">{errorMsg}</div>
        </>
      )}
      <br></br>
    </>
  );
}

export default Buy;
