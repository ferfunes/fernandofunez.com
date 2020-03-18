import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./footer.js";
import TypeIt from "typeit-react";
import Fernando_A_Funez_Resume from "../../src/images/Fernando_A_Funez_Resume.jpg";

export const Home = () => {
  return (
    <div ClassName="main-cont container-fluid ">
      <div className="row p-0 m-0">
        <div className="text-cont ">
          <div className="welcome">
            <TypeIt
              options={{
                strings: ["Hi There! I'm Fernando Funez..."],
                speed: 200,
                waitUntilVisible: true,
                loop: false
              }}
            />
          </div>
          <span className="f-style1">Lorem ipsum dolor sit amet</span>,
          <span className="f-style2">
            consectetur adipiscing elit.{" "}
            <Link
              to="/Portfolio"
              className=" portfolio-word"
              style={{ textDecoration: "none" }}
            >
              WORK
            </Link>{" "}
            ut
          </span>
          <br />
          <span className="f-style3">
            Lorem ipsum dolor sit{" "}
            <Link
              to="skills"
              className="skills-word"
              style={{ textDecoration: "none" }}
            >
              SKILLS
            </Link>
            , consectetur adipiscing
          </span>{" "}
          <span className="f-style4">elit. Maecenas ut</span>
          <br />
          <span className="f-style5">Lorem ipsum dolor sit amet</span>
          <span className="f-style6">
            , consectetur{" "}
            <span className="modal-cont ">
              <button
                type="button"
                className="modal-button btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                RESUME
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
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
                      <img
                        className="modal-image"
                        src={Fernando_A_Funez_Resume}
                        alt="#"
                      />{" "}
                    </div>
                    <div className="modal-footer">
                      <a
                        href={Fernando_A_Funez_Resume}
                        download="MyResume"
                        download
                      >
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
            </span>
            elit. Maecenas ut
          </span>
          <br />
          <spam className="f-style7">
            {" "}
            ipsum dolor sit{" "}
            <Link
              to="/Portfolio"
              className=" portfolio-word"
              style={{ textDecoration: "none" }}
            >
              DJ
            </Link>{" "}
            amet, consectetur{" "}
          </spam>{" "}
          <spam className="f-style8">
            adipiscing elit. Maecenas ut how jopo2
          </spam>
          <br />
          <span className="f-style1">Lorem ipsum dolor sit amet</span>,
          <span className="f-style2">
            consectetur adipiscing elit.{" "}
            <Link
              to="/contact"
              className="contact-word"
              style={{ textDecoration: "none" }}
            >
              GET IN TOUCH
            </Link>{" "}
          </span>
          <br />
        </div>
        <Footer />
      </div>
    </div>
  );
};
