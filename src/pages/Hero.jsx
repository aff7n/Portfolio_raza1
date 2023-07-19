import React from "react";
import Nav from "../components/Nav";
// import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <>
      <Nav />
      <header id="header">
        <div className="hero">
          <div className="overlay">
            <div className="siblings">
              <div class="radio-btns" role="radiogroup">
                <Link to={"/Flat"} style={{ textDecoration: "none" }}>
                  <figure
                    class="radio-btns__btn"
                    role="radio"
                    aria-checked="false"
                    tabindex="-1"
                    aria-label="Select image one"
                  >
                    <img src={require("../img/pain.jpeg")} alt="art" />
                    <figcaption className="hoverable">2D Art</figcaption>
                  </figure>
                </Link>

                <figure
                  class="radio-btns__btn"
                  role="radio"
                  aria-checked="false"
                  tabindex="-1"
                  aria-label="Select image two"
                >
                  <img src={require("../img/Grizi.jpeg")} alt="films" />
                  <figcaption className="hoverable">3D Art</figcaption>
                </figure>

                <Link to={"/Reels"} style={{ textDecoration: "none" }}>
                  <figure
                    class="radio-btns__btn"
                    role="radio"
                    aria-checked="false"
                    tabindex="-1"
                    aria-label="Select image three"
                  >
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cdn-36_img-3.jpg"
                      alt="demo reels"
                    />
                    <figcaption className="hoverable">Demo reels</figcaption>
                  </figure>
                </Link>

                <figure
                  class="radio-btns__btn"
                  role="radio"
                  aria-checked="false"
                  tabindex="-1"
                  aria-label="Select image three"
                >
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cdn-36_img-3.jpg"
                    alt="demo reels"
                  />
                  <figcaption className="hoverable">Films</figcaption>
                </figure>
              </div>
            </div>
            {/* <div className="">
            <div className="intro-text">
              <h1>
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>

              <div class="button btn button-2">Explore</div>
            </div>
          </div> */}
          </div>
        </div>
      </header>
      {/* <Footer /> */}
    </>
  );
};

export default Hero;
