import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <div class="jumbotron jumbotron-fluid bg-image">
      <div
        class="dsgn d-flex flex-column justify-content-center align-items-center mask"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <img
          class="img-fluid raza-logo"
          alt="avatar2"
          src={require("../img/raza2.png")}
        />
        <h1
          class="display-1 text-uppercase fw-bold text-center"
          style={{
            fontFamily: "Space Mono",
            letterSpacing: "4px",
            zIndex: "1",
          }}
        >
          3D Character
          <br />
          artist
        </h1>

        <a href="/#header" aria-current="page">
          <button type="button" class="btn btn-custom btn-light btn-rounded">
            Explore
          </button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
