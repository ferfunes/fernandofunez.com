import React, { Component } from "react";

export const Footer = () => (
  <footer className="container-fluid footer mt-auto  p-0  text-center   ">
    <div className="footer-cont2 row justify-content-center m-0 p-0">
      <div className="col-md-5 text-center text-secondary">
        <a href="#" target="_blank">
          <i class="icon fab fa-github-square mr-3" />
        </a>
        <a href="#" target="_blank">
          <i class="icon fab fa-linkedin mr-3" />
        </a>
        <a href="#" target="_blank">
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
