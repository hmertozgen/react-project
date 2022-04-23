import React from "react";
import Todo from "../../Widgets/Todo";
import styles from "./styles.modules.css";

function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Todo />
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
