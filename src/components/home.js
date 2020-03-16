import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./footer.js";
import TypeIt from "typeit-react";

export const Home = () => {
  return (
    <div ClassName="main-cont container-fluid ">
      <div className="row ">
        <div className="text-cont ">
          <div className="welcome">
            <TypeIt
              options={{
                strings: ["WELCOME TO MY SITE..."],
                speed: 200,
                waitUntilVisible: true,
                loop: true
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
              PORTFOLIO
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
            <Link
              to="/resume"
              className="resume-word"
              style={{ textDecoration: "none" }}
            >
              RESUME
            </Link>{" "}
            elit. Maecenas ut
          </span>
          <br />
          <spam className="f-style7">
            <Link
              to="/contact"
              className="contact-word"
              style={{ textDecoration: "none" }}
            >
              CONTACT
            </Link>{" "}
            ipsum dolor sit amet, consectetur
          </spam>{" "}
          <spam className="f-style8">adipiscing elit. Maecenas ut</spam>
        </div>
        <Footer />
      </div>
    </div>
  );
};
