import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer.js";
import { Progress } from "antd";

import "react-sweet-progress/lib/style.css";
import "antd/dist/antd.css";

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

      <div className="card-cont container d-flex justify-content-center mb-5">
        <div className="row justify-content-center">
          <div className="skill-card1 card  col-sm-2 col-lg-2">
            <img
              src="https://i.imgur.com/jDkKGuD.png"
              className="skill-card-img1 card-img-top img-fluid "
              alt="..."
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#FF0000",
                  "100%": "#FF0000"
                }}
                percent={70}
                width={50}
              />
            </div>
          </div>

          <div className="skill-card2 card ml-3  col-sm-2 col-lg-2">
            <img
              src="https://i.imgur.com/9tjOfI4.png"
              className="skill-card-img1 card-img-top img-fluid "
              alt="..."
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#FF0000",
                  "100%": "#FF0000"
                }}
                percent={70}
                width={50}
              />
            </div>
          </div>
          <div className="skill-card3 card ml-3  col-sm-2 col-lg-2">
            <img
              src="https://i.imgur.com/qG6T8bP.png"
              className="skill-card-img1 card-img-top img-fluid "
              alt="..."
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#FF0000",
                  "100%": "#FF0000"
                }}
                percent={70}
                width={50}
              />
            </div>
          </div>

          <div className="skill-card4 card ml-3  col-sm-2 col-lg-2">
            <img
              src="https://i.imgur.com/Cdzj37u.png"
              className="skill-card-img1 card-img-top img-fluid "
              alt="..."
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#FF0000",
                  "100%": "#FF0000"
                }}
                percent={70}
                width={50}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
