import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer.js";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export const Skills = () => {
  return (
    <div className=" skills-wrapper ">
      <div className="skills-title text-center">
        <h1>SKILLS</h1>
      </div>

      <div className="back-button  text-center ">
        <Link style={{ textDecoration: "none" }} to="/">
          <span className="skills-back">
            <i class="fas fa-chevron-left"></i>
          </span>
        </Link>
      </div>

      <div className="card-cont container mb-5">
        <div className="skill-card1 card">
          <img
            src="https://i.imgur.com/jDkKGuD.png"
            className="skill-card-img1 card-img-top img-fluid "
            alt="..."
          />
          <div className="card-body text-center">
            <Progress
              type="circle"
              strokeColor={{
                "0%": "#FF0000",
                "100%": "#FF0000"
              }}
              percent={70}
            />
          </div>
        </div>
      </div>

      <div className="card-cont2 container text-center">
        <div className="skill-card1 card">
          <img
            src="https://i.imgur.com/jDkKGuD.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
