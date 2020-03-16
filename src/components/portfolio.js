import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer.js";
import wander_tracker_front from "../images/wander_tracker_front.png";

export const Portfolio = () => {
  return (
    <div className="portfolio-cont container mt-5">
      <div className="row">
        <div className="col-sm-4 ">
          <div className="card card-flip ">
            <div className="card-front ">
              <img
                className="img-fluid"
                alt="Responsive image"
                src={wander_tracker_front}
              />
            </div>
            <div className="card-back bg-white">
              <div className="card-body">
                <h3 className="card-title">Back</h3>
                <p className="card-text">
                  Suprise this one has more more more more content on the back!
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div className="card card-flip ">
            <div className="card-front text-white bg-dark">
              <div className="card-body">
                <i className="fa fa-search fa-5x float-right"></i>
                <h3 className="card-title">Front</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div className="card-back bg-white">
              <div className="card-body">
                <h3 className="card-title">Back</h3>
                <p className="card-text">
                  Suprise this one has more more more more content on the back!
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div className="card card-flip ">
            <div className="card-front text-white bg-dark">
              <div className="card-body">
                <i className="fa fa-search fa-5x float-right"></i>
                <h3 className="card-title">Front</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div className="card-back bg-white">
              <div className="card-body">
                <h3 className="card-title">Back</h3>
                <p className="card-text">
                  Suprise this one has more more more more content on the back!
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-4 ">
          <div className="card card-flip ">
            <div className="card-front text-white bg-dark">
              <div className="card-body">
                <i className="fa fa-search fa-5x float-right"></i>
                <h3 className="card-title">Front</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div className="card-back bg-white">
              <div className="card-body">
                <h3 className="card-title">Back</h3>
                <p className="card-text">
                  Suprise this one has more more more more content on the back!
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div className="card card-flip ">
            <div className="card-front text-white bg-dark">
              <div className="card-body">
                <i className="fa fa-search fa-5x float-right"></i>
                <h3 className="card-title">Front</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div className="card-back bg-white">
              <div className="card-body">
                <h3 className="card-title">Back</h3>
                <p className="card-text">
                  Suprise this one has more more more more content on the back!
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 ">
          <div className="card card-flip ">
            <div className="card-front text-white bg-dark">
              <div className="card-body">
                <i className="fa fa-search fa-5x float-right"></i>
                <h3 className="card-title">Front</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div className="card-back bg-white">
              <div className="card-body">
                <h3 className="card-title">Back</h3>
                <p className="card-text">
                  Suprise this one has more more more more content on the back!
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button mt-5">
        <Link to="/">
          <button type="button" class="btn btn-secondary">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};
