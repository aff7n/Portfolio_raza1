import React from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";

const Films = (props) => {
  return (
    <div className="collection">
      {/* <img className="bg-img" src={require("../img/bumbly.jpeg")} alt="" /> */}
      <Nav />
      <div
        class="jumbotron jumbotron-fluid bg-image"
        style={{ background: "none", height: "0" }}
      >
        <div
          class="dsgn d-flex flex-column justify-content-center align-items-center mask"
          /* style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} */
        >
          <h1
            class="display-1 text-uppercase fw-bold text-center"
            style={{
              fontFamily: "Space Mono",
              letterSpacing: "4px",
              zIndex: "1",
            }}
          >
            Films
          </h1>
        </div>
      </div>
      <div className="films">
        <div className="films__column">
          <a
            href="https://youtu.be/kem3E-d1MdY"
            target="_blank"
            className="films__link"
          >
            <figure className="films__thumb">
              <img
                src={require("../img/TheCrypt.jpg")}
                alt=""
                className="films__image"
              />
              <figcaption className="films__caption">The Crypt</figcaption>
            </figure>
          </a>
          <a
            href="https://youtu.be/2YftR27wMVs"
            target="_blank"
            className="films__link"
          >
            <figure className="films__thumb">
              <img
                src={require("../img/RakshakPoster.jpg")}
                alt=""
                className="films__image"
              />
              <figcaption className="films__caption">Rakshak</figcaption>
            </figure>
          </a>
        </div>
        {/* <a href="#" target="_blank" className="films__linkOdd films__link">
          <figure className="films__thumb">
            <img
              src={require("../img/TheCrypt.jpg")}
              alt="Portrait by Alex Perez"
              className="films__image"
            />
            <figcaption className="films__caption">
              Portrait by Alex Perez
            </figcaption>
          </figure>
        </a> */}
      </div>
    </div>
  );
};

export default Films;
