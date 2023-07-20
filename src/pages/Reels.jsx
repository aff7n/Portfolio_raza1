import React from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";

const Reels = (props) => {
  return (
    <div className="collection">
      {/* <img className="bg-img" src={require("../img/bumbly.jpeg")} alt="" /> */}
      <Nav />
      <Landing />
      {/* <div class="jumbotron jumbotron-fluid bg-image">
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
        </div>
      </div> */}
      <div className="reels">
        <div className="reels__column">
          <a href="#" target="_blank" className="reels__link">
            <figure className="reels__thumb">
              <img
                src={require("../img/Showreel_2.png")}
                alt="Portrait by Jessica Felicio"
                className="reels__image"
              />
              <figcaption className="reels__caption">The Crypt</figcaption>
            </figure>
          </a>
          <a href="#" target="_blank" className="reels__link">
            <figure className="reels__thumb">
              <img
                src={require("../img/Showreel_2.png")}
                alt="Portrait by Oladimeji Odunsi"
                className="reels__image"
              />
              <figcaption className="reels__caption">
                Portrait by Oladimeji Odunsi
              </figcaption>
            </figure>
          </a>
          <a href="#" target="_blank" className="reels__link">
            <figure className="reels__thumb">
              <img
                src={require("../img/Showreel_2.png")}
                alt="Portrait by Alex Perez"
                className="reels__image"
              />
              <figcaption className="reels__caption">
                Portrait by Alex Perez
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reels;
