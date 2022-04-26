import React from "react";
import { Link } from "react-router-dom";
import Clock from "../../Widgets/clock/Clock";
import Todo from "../../Widgets/Todo";
import TodoRoute from "../../Widgets/TodoRoute";
import "./styles.modules.css";

function Home() {
  const handleNews = (e) => {
    if (e.target.value == "") {
      {
        <p>Boş kalmaz</p>;
      }
    } else {
      alert("Thanks for Subscribe");
    }
  };
  return (
    <>
      <section className="hero">
        <h4 className="smaller">Trade-in-offer</h4>
        <h2 className="normal">Super value deals</h2>
        <h1 className="big">On all products</h1>
        <p className="p">Save more with coupons & up to 70% offf!</p>
        <button className="btn btn-success">
          <Link to="/products">Shop Now</Link>
        </button>
        {/* <Clock className="clock" /> */}
      </section>
      <section className="feature section-p1 ">
        <div className="fe-box">
          <img src={require("./img/features/f1.png")} alt="fe-ship" />
          <h6 className="small">Free Shipping</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f2.png")} alt="fe-ship" />
          <h6 className="small">Online Order</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f3.png")} alt="fe-ship" />
          <h6 className="small">Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f4.png")} alt="fe-ship" />
          <h6 className="small">Promotions</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f5.png")} alt="fe-ship" />
          <h6 className="small">Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src={require("./img/features/f6.png")} alt="fe-ship" />
          <h6 className="small">24/7 Support</h6>
        </div>
      </section>

      <section className="newsletter section-p1 section-m1">
        <div className="newstext">
          <h4 className="smaller">Sign Up For Newsletters</h4>
          <p className="p">
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="mail" placeholder="Your email address" />
          <button
            className="btn btn-success"
            onClick={() => alert("Thanks for subscribe")}
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* <section className="section">
        <header>
          <div className="row">
            <div className="col-md-8 col-sm-6 fragment">
              <Link to="/products">Go To Products</Link>
            </div>
          </div>
        </header>

        <div className="container ">
          <div className="row mb-5">
            <div className="col-md-6 col-sm-6">
              <Todo />
            </div>
            <div className="col-md-6 col-sm-6 ">
              <Clock />
            </div>
          </div>
          
        </div>
        <div>
          <div className="container form ">
            <div className="row ">
              <div className="col-md-8 offset-2 ">
                <form className="mt-3 p-3 border bg-secondary">
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="col-6 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-6 mt-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-12 mt-3">
                      <textarea
                        className="form-control"
                        rows="6"
                        cols="100%"
                        placeholder="text"
                      ></textarea>
                      <button className="btn btn-primary">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Home;
