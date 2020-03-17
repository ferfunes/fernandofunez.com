import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer.js";

export const Skills = () => {
  return (
    <div className=" portfolio-wrapper">
      <div className="portfolio-title text-center">
        <h1>SKILLS</h1>
      </div>
      <div className="back-button  text-center ">
        <Link style={{ textDecoration: "none" }} to="/">
          <span className="portfolio-back">
            <i class="fas fa-chevron-left"></i>
          </span>
        </Link>
      </div>

      <Footer />
    </div>
  );
};
