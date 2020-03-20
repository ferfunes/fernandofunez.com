import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./footer.js";
import TypeIt from "typeit-react";
import Fernando_A_Funez_Resume from "../../src/images/Fernando_A_Funez_Resume.jpg";

export const Home = () => {
  return (
    <div ClassName="main-cont container ">
      <div className="row p-0 m-0">
        <div className="text-cont ml-4 mr-4">
          <div className="welcome">
            <h1>
              <TypeIt
                options={{
                  strings: ["Hi There! I'm Fernando Funez"],
                  speed: 200,
                  waitUntilVisible: true,
                  loop: false
                }}
              />
            </h1>
          </div>
          <span className="f-style1">
            Full stack web developer focused on crafting great web experiences.
            <br />
          </span>
          <span className="f-style2">
            My{" "}
            <Link
              to="/Skills"
              className=" skills-word"
              style={{ textDecoration: "none" }}
            >
              SKILLS
            </Link>{" "}
            allow me to create beautifully designed, intuitive, and functional
            websites.{" "}
          </span>
          <span className="f-style3">
            My ability to adapt <br /> to the latest and most in demand
            technologies is reflected on my{" "}
            <Link
              to="Portfolio"
              className="projects-word"
              style={{ textDecoration: "none" }}
            >
              PROJECTS.
            </Link>
          </span>
          <br />
          <span className="f-style5">
            When all of this gets combined, it translates on to a killer
          </span>
          <span className="f-style5">
            <span className="modal-cont ">
              <button
                type="button"
                className="resume-word modal-button btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                RESUME.
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
                        <button
                          type="button"
                          className="resume-text btn btn-secondary"
                        >
                          Download Resume
                        </button>
                      </a>
                      <button
                        type="button"
                        className="resume-text btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <span className="f-style2">
              Btw, did I mentioned that I love photography,
            </span>
          </span>
          <br />
          <spam className="f-style2">
            {" "}
            I am a professional
            <Link
              to="/Dj"
              className=" dj-word"
              style={{ textDecoration: "none" }}
            >
              DJ,
            </Link>{" "}
            and world traveler.{" "}
          </spam>{" "}
          <spam className="f-style10">Now that you know me,</spam>
          <span className="f-style10">
            {" "}
            I would like to know how can I help you!
            <Link
              to="/contact"
              className="contact-word"
              style={{ textDecoration: "none" }}
            >
              GET IN TOUCH.
            </Link>
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
};
