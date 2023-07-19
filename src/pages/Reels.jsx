import React from "react";
import Nav from "../components/Nav";

const Reels = (props) => {
  return (
    <div className="collection">
      <img className="bg-img" src={require("../img/bumbly.jpeg")} alt="" />
      <Nav />
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
