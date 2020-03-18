import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer.js";
import { Progress } from "antd";
import HTML from "../images/technologies logos/HTML.jpg";
import CSS from "../images/technologies logos/CSS.jpg";
import JS from "../images/technologies logos/JS.jpg";
import Reactjs_logo from "../images/technologies logos/Reactjs_logo.jpg";
import Boot from "../images/technologies logos/Boot.jpg";
import WP from "../images/technologies logos/WP.jpg";
import GiitHub from "../images/technologies logos/GiitHub.jpg";
import Git from "../images/technologies logos/Git.jpg";
import Py from "../images/technologies logos/Py.jpg";
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
              src={HTML}
              className="skill-card-img1 card-img-top img-fluid "
              alt="html logo"
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#808080",
                  "100%": "#808080"
                }}
                percent={85}
                width={40}
              />
            </div>
          </div>

          <div className="skill-card2 card ml-3  col-sm-2 col-lg-2">
            <img
              src={CSS}
              className="skill-card-img2 card-img-top img-fluid "
              alt="css logo"
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#808080",
                  "100%": "#808080"
                }}
                percent={70}
                width={40}
              />
            </div>
          </div>
          <div className="skill-card3 card ml-3  col-sm-2 col-lg-2">
            <img
              src={JS}
              className="skill-card-img3 card-img-top img-fluid "
              alt="JavaScript logo"
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#808080",
                  "100%": "#808080"
                }}
                percent={55}
                width={40}
              />
            </div>
          </div>
          <div className="skill-card1 card  col-sm-2 col-lg-2">
            <img
              src={Reactjs_logo}
              className="skill-card-img4 card-img-top img-fluid "
              alt="Reactjs Logo"
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#808080",
                  "100%": "#808080"
                }}
                percent={53}
                width={40}
              />
            </div>
          </div>

          <div className="skill-card2 card ml-3  col-sm-2 col-lg-2">
            <img
              src={Boot}
              className="skill-card-img5 card-img-top img-fluid "
              alt="Bootstrap Logo"
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#808080",
                  "100%": "#808080"
                }}
                percent={84}
                width={40}
              />
            </div>
          </div>
          <div className="skill-card3 card ml-3  col-sm-2 col-lg-2">
            <img
              src={WP}
              className="skill-card-img6 card-img-top img-fluid "
              alt="Wordpress logo"
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#808080",
                  "100%": "#808080"
                }}
                percent={58}
                width={40}
              />
            </div>
          </div>
          <div className="skill-card1 card  col-sm-2 col-lg-2">
            <img
              src={GiitHub}
              className="skill-card-img7 card-img-top img-fluid "
              alt="GitHub logo"
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#808080",
                  "100%": "#808080"
                }}
                percent={75}
                width={40}
              />
            </div>
          </div>

          <div className="skill-card2 card ml-3  col-sm-2 col-lg-2">
            <img
              src={Git}
              className="skill-card-img8 card-img-top img-fluid "
              alt="Git logo"
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#808080",
                  "100%": "#808080"
                }}
                percent={70}
                width={40}
              />
            </div>
          </div>
          <div className="skill-card3 card ml-3  col-sm-2 col-lg-2">
            <img
              src={Py}
              className="skill-card-img9 card-img-top img-fluid "
              alt="Python logo"
            />
            <div className="card-body text-center">
              <Progress
                className="progbar1"
                type="circle"
                strokeColor={{
                  "0%": "#808080",
                  "100%": "#808080"
                }}
                percent={47}
                width={40}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
