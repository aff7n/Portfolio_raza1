import React from "react";
import Nav from "../components/Nav";

const Art = (props) => {
  return (
    <>
      <div className="gallery-body">
        <img className="bg-img" src={require("../img/bumbly.jpeg")} alt="" />
        <Nav />
        <article className="flow">
          {/* <h1>Our Team</h1>
          <p>
            Hover or focus over each card to see the person’s job title slide in
            and the colour treatment change.
          </p> */}
          <div className="team">
            <ul className="auto-grid" role="list">
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Geezer</h2>
                  <p>Founder</p>
                  <img alt="" src={require("../img/geezer.jpeg")} />
                </a>
              </li>
              <li>
                <a href="#" target='_blank"' className="profile">
                  <h2 className="profile__name">Tigasaures</h2>
                  <p>Creative Director</p>
                  <img alt="" src={require("../img/Tiggi.jpg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Grizi</h2>
                  <p>Technical Lead</p>
                  <img alt="" src={require("../img/Grizi.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Nicholas Cage</h2>
                  <p>Designer</p>
                  <img alt="" src={require("../img/Sup.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Haan Bhai Haan</h2>
                  <p>Developer</p>
                  <img alt="" src={require("../img/han.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/pain.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/babba.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/babyShark.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/capitan.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/doggo.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/logan.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/raju.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/shak.jpeg")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/meow.png")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/PRIME.png")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/general.png")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/cheers.png")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/haha.png")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/shockwave.png")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/captainYoda.png")} />
                </a>
              </li>
              <li>
                <a
                  href="https://swop.link/cool"
                  target='_blank"'
                  className="profile"
                >
                  <h2 className="profile__name">Chad</h2>
                  <p>Intern</p>
                  <img alt="" src={require("../img/D.png")} />
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
};

export default Art;
