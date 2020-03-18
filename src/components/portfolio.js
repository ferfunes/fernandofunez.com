import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer.js";
import wanderTrackerLogo from "../images/wanderTrackerLogo.png";
import luminaLogo from "../images/luminaLogo.jpg";
import email_template from "../images/email_template.png";

export const Portfolio = () => {
  return (
    <div className=" portfolio-wrapper">
      <div className="portfolio-title text-center">
        <h1>WORK</h1>
      </div>
      <div className="back-button  text-center ">
        <Link style={{ textDecoration: "none" }} to="/">
          <span className="portfolio-back">
            <i class="fas fa-chevron-left"></i>
          </span>
        </Link>
      </div>
      <div className="portfolio-cont container ">
        <div className="row">
          <div className=" col-sm-12 col-m-6 col-lg-4 mb-2">
            <div className="card card-flip ">
              <div className="card-front d-flex align-items-center">
                <img
                  className="portfolio-image img-fluid "
                  alt="travel app"
                  src={wanderTrackerLogo}
                />
              </div>
              <div className="card-back bg-white">
                <div className="card-body">
                  <h3 className="card-title">Wander Tracker</h3>
                  <p className="card-text">
                    Complete online, mobile-first-minded toolkit for travelers
                    to plan trips, keep itineraries and contacts, save memories,
                    upload important documents, map-track their trips, etc.
                  </p>
                  <a
                    href="https://finalproject-rjxnbzyub.now.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary mr-2 "
                  >
                    Go to Project
                  </a>
                  <a
                    href="https://github.com/ferfunes/Wandertracker_front-end"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary"
                  >
                    Check the Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-m-6 col-lg-4 mb-2">
            <div className="card card-flip ">
              <div className="card-front ">
                <img
                  className="img-fluid"
                  alt="Graphic Designer Portfolio"
                  src={luminaLogo}
                />
              </div>
              <div className="card-back bg-white">
                <div className="card-body">
                  <h3 className="card-title">Lumina Si Umbra</h3>
                  <p className="card-text">
                    Graphic Designer portfolio. Minimalistic and elegant Graphic
                    Designer portfolio, showcasing the designer's work.
                  </p>
                  <a
                    href="https://practical-lumiere-f205fe.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary mr-2"
                  >
                    Go to Project
                  </a>
                  <a
                    href="https://github.com/ferfunes/Graphic-Designer-Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary "
                  >
                    Check the Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-m-6 col-lg-4 mb-2">
            <div className="card card-flip ">
              <div className="card-front ">
                <img
                  className="img-fluid"
                  alt="HTML Email"
                  src={email_template}
                />
              </div>
              <div className="card-back bg-white">
                <div className="card-body">
                  <h3 className="card-title">HTML Email using Tables</h3>
                  <p className="card-text">
                    There are several ways to go about building an email, but
                    the most established approach is with tables.
                  </p>
                  <a
                    href="https://elated-villani-09ad56.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary mr-2"
                  >
                    Go to Project
                  </a>
                  <a
                    href="https://elated-villani-09ad56.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary "
                  >
                    Check the Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-m-6 col-lg-4 mb-2">
            <div className="card card-flip ">
              <div className="card-front d-flex align-items-center">
                <img
                  className="portfolio-image img-fluid"
                  alt="#"
                  src={wanderTrackerLogo}
                />
              </div>
              <div className="card-back bg-white">
                <div className="card-body">
                  <h3 className="card-title">Wander Tracker</h3>
                  <p className="card-text">
                    Complete online, mobile-first-minded toolkit for travelers
                    to plan trips, keep itineraries and contacts, save memories,
                    upload important documents, map-track their trips, etc.
                  </p>
                  <a
                    href="https://finalproject-rjxnbzyub.now.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary mr-2 "
                  >
                    Go to Project
                  </a>
                  <a
                    href="https://github.com/ferfunes/Wandertracker_front-end"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary"
                  >
                    Check the Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-m-6 col-lg-4 mb-2">
            <div className="card card-flip ">
              <div className="card-front ">
                <img className="img-fluid" alt="#" src={luminaLogo} />
              </div>
              <div className="card-back bg-white">
                <div className="card-body">
                  <h3 className="card-title">Lumina Si Umbra</h3>
                  <p className="card-text">
                    Graphic Designer portfolio. Minimalistic and elegant Graphic
                    Designer portfolio, showcasing the designer's work.
                  </p>
                  <a
                    href="https://practical-lumiere-f205fe.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary mr-2"
                  >
                    Go to Project
                  </a>
                  <a
                    href="https://github.com/ferfunes/Graphic-Designer-Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary "
                  >
                    Check the Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-m-6 col-lg-4 mb-2">
            <div className="card card-flip ">
              <div className="card-front ">
                <img className="img-fluid" alt="#" src={email_template} />
              </div>
              <div className="card-back bg-white">
                <div className="card-body">
                  <h3 className="card-title">HTML Email using Tables</h3>
                  <p className="card-text">
                    There are several ways to go about building an email, but
                    the most established approach is with tables.
                  </p>
                  <a
                    href="https://elated-villani-09ad56.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary mr-2"
                  >
                    Go to Project
                  </a>
                  <a
                    href="https://elated-villani-09ad56.netlify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary "
                  >
                    Check the Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-portfolio container-fluid"></div>
      </div>
      <Footer />
    </div>
  );
};
