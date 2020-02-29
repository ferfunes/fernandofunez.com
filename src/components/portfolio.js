import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/footer.js";

export const Portfolio = () => {
  return (
    <div className="portfolio-cont container">
      <div className="row">
        <div className="col-sm-4 ">
          <div className="card card-flip h-100">
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
        <div className="col-sm-4">
          <div className="card card-flip h-100">
            <div className="card-front text-white bg-warning">
              <div className="card-body">
                <i className="fa fa-search-plus fa-5x float-right"></i>
                <h3 className="card-title">Front</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
            <div className="card-back bg-dark text-white">
              <div className="card-body">
                <h3 className="card-title">Back #2</h3>
                <p className="card-text">
                  Suprise this one has content on the back!
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card card-flip h-100">
            <div className="card-front text-white bg-primary">
              <div className="card-body">
                <i className="fa fa-arrow-circle-right fa-5x float-right"></i>
                <h3 className="card-title">Front</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content. This one is a little because it has more text!
                </p>
              </div>
            </div>
            <div className="card-back bg-white">
              <div className="card-body text-primary">
                <h3 className="card-title">Wow! #3</h3>
                <p className="card-text">
                  Suprise this one has content on the back!
                </p>
                <a href="#" className="btn btn-outline-primary">
                  Action
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 my-3">
          <div className="card card-flip h-100">
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
        <div className="col-sm-4 my-3 ">
          <div className="card card-flip h-100">
            <div className="card-front text-white bg-danger">
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
        <div className="col-sm-4 my-3 pt-5">
          <div className="card card-flip h-100">
            <div className="card-front text-white bg-success">
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
        <div className="button mt-5">
          <Link to="/">
            <button type="button" class="btn btn-secondary">
              Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
