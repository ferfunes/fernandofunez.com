import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="">
      <h1>hello from Contact</h1>
      <Link to="/">
        <button type="button" class="btn btn-secondary">
          Home
        </button>
      </Link>
    </div>
  );
};
