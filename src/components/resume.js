import React from "react";
import { Link } from "react-router-dom";

export const Resume = () => {
  return (
    <div className="">
      <h1>hello from Resume</h1>
      <Link to="/">
        <button type="button" class="btn btn-secondary">
          Home
        </button>
      </Link>
    </div>
  );
};
