import React from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";

const Reels = (props) => {
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
            Demo Reels / Show Reels
          </h1>
        </div>
      </div>
      <div className="reels">
        <div className="reels__column">
          <a
            href="https://drive.google.com/file/d/19ZWV8bKlZ0QgZgvDcoHha4h4YUjgYcei/view?usp=drivesdk"
            target="_blank"
            className="reels__link"
          >
            <figure className="reels__thumb">
              <img
                src={require("../img/TheCrypt.jpg")}
                alt=""
                className="reels__image"
              />
              <figcaption className="reels__caption">
                The Crypt
                <br />
                Showreel
              </figcaption>
            </figure>
          </a>
          {/* Not for any use rn */}
          <a
            href="https://drive.google.com/file/d/1xAznt_Nk-6KRXS8gKii1quz2lSkQmAt9/view?usp=sharing"
            target="_blank"
            className="reels__link"
          >
            <figure className="reels__thumb">
              <img
                src={require("../img/S.png")}
                alt=""
                className="reels__image"
              />
              <figcaption className="reels__caption">Showreel mix</figcaption>
            </figure>
          </a>
        </div>
        {/* <a href="#" target="_blank" className="reels__linkOdd reels__link">
          <figure className="reels__thumb">
            <img
              src={require("../img/TheCrypt.jpg")}
              alt="Portrait by Alex Perez"
              className="reels__image"
            />
            <figcaption className="reels__caption">
              Portrait by Alex Perez
            </figcaption>
          </figure>
        </a> */}
      </div>
    </div>
  );
};

export default Reels;
