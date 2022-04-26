import React from "react";
import { Link } from "react-router-dom";
import Clock from "../../Widgets/clock/Clock";
import Todo from "../../Widgets/Todo";
import TodoRoute from "../../Widgets/TodoRoute";
import "./styles.modules.css";

function Home() {
  return (
    <>
      <section className="section">
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
          {/* <div>
            <TodoRoute />
          </div> */}
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
      </section>
    </>
  );
}

export default Home;
