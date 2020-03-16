import React from "react";
import { Link } from "react-router-dom";
import myResume from "../../src/images/myResume.png";
import { Footer } from "../components/footer.js";

export const Resume = () => {
  return (
    <div className="container text-center">
      <h1>hello from Resume</h1>
      <div className="modal-cont mb-3">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Resume
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Resume
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {" "}
                <img className="modal-image" src={myResume} />{" "}
              </div>
              <div className="modal-footer">
                <a href={myResume} download="MyResume" download>
                  <button type="button" className="btn btn-secondary">
                    Download Resume
                  </button>
                </a>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <button type="button" className="btn btn-secondary">
          Home
        </button>
      </Link>
      <Footer />
    </div>
  );
};
