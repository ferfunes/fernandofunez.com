import React from "react";

export const Footer = () => (
  <footer className="container-fluid footer mt-0  p-0  text-center   ">
    <div className="footer-cont2 row justify-content-center m-0 p-0">
      <div className="foo col-md-5 text-center text-secondary ">
        <a
          href="https://github.com/ferfunes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon fab fa-github-square mr-3" />
        </a>
        <a
          href="https://www.linkedin.com/in/fernando-funez-b98597125/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon fab fa-linkedin mr-3" />
        </a>
        <a
          href="https://www.instagram.com/djfumes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="icon fab fa-instagram" />
        </a>
        <div className="footer-copyright mt-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> fernandofunez.com</a>
        </div>
      </div>
    </div>
  </footer>
);
