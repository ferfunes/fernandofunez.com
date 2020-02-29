import React from "react";

export const Footer = () => {
  return (
    <footer className="page-footer font-small cyan darken-3 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className=" flex-center">
              <a
                className="tw-ic"
                href="https://github.com/ferfunes"
                target="_blank"
              >
                <i className="icon fab fa-github fa-lg white-text mr-md-5 mr-3 ">
                  {" "}
                </i>
              </a>

              <a
                className="li-ic"
                href="https://www.linkedin.com/in/fernando-funezdev/"
                target="_blank"
              >
                <i className="icon fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 ">
                  {" "}
                </i>
              </a>

              <a
                className="ins-ic"
                href="https://www.instagram.com/djfumes/"
                target="_blank"
              >
                <i className="icon fab fa-instagram fa-lg white-text mr-md-5 mr-3 ">
                  {" "}
                </i>
              </a>
            </div>
            <div className="footer-copyright mr-5 ">
              © 2020 Copyright:
              <a href="https://mdbootstrap.com/"> fernandofunez.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
