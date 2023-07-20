import React from "react";
import Nav from "../components/Nav";

const Flat = (props) => {
  return (
    <div className="collection">
      {/* <img className="bg-img" src={require("../img/bumbly.jpeg")} alt="" /> */}
      <Nav />
      <div className="gallery">
        <div className="gallery__column">
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/geezer.jpeg")}
                alt="Portrait by Jessica Felicio"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Jessica Felicio
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/Grizi.jpeg")}
                alt="Portrait by Oladimeji Odunsi"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Oladimeji Odunsi
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/pain.jpeg")}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Alex Perez
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/Tiggi.jpg")}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Alex Perez
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/babba.jpeg")}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Alex Perez
              </figcaption> */}
            </figure>
          </a>
        </div>
        <div className="gallery__column">
          <a
            href="https://unsplash.com/@hikiapp"
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/doggo.jpeg")}
                alt="Portrait by Hikiapp"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Hikiapp
              </figcaption> */}
            </figure>
          </a>
          <a
            href="https://unsplash.com/@von_co"
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/logan.jpeg")}
                alt="Portrait by Ivana Cajina"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Ivana Cajina
              </figcaption> */}
            </figure>
          </a>
          <a
            href="https://unsplash.com/@j_erhunse"
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/meow.png")}
                alt="Portrait by Jeffery Erhunse"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Jeffery Erhunse
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/shak.jpeg")}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Alex Perez
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/han.jpeg")}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Alex Perez
              </figcaption> */}
            </figure>
          </a>
        </div>
        <div className="gallery__column">
          <a
            href="https://unsplash.com/@marilezhava"
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/PRIME.png")}
                alt="Portrait by Mari Lezhava"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Mari Lezhava
              </figcaption> */}
            </figure>
          </a>
          <a
            href="https://unsplash.com/@ethanhaddox"
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/general.png")}
                alt="Portrait by Ethan Haddox"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Ethan Haddox
              </figcaption> */}
            </figure>
          </a>
          <a
            href="https://unsplash.com/@mr_geshani"
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/haha.png")}
                alt="Portrait by Amir Geshani"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Amir Geshani
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/capitan.jpeg")}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Alex Perez
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/raju.jpeg")}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Alex Perez
              </figcaption> */}
            </figure>
          </a>
        </div>
        <div className="gallery__column">
          <a
            href="https://unsplash.com/@nixcreative"
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/cheers.png")}
                alt="Portrait by Tyler Nix"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Tyler Nix
              </figcaption> */}
            </figure>
          </a>
          <a
            href="https://unsplash.com/@majestical_jasmin"
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/captainYoda.png")}
                alt="Portrait by Jasmin Chew"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Jasmin Chew
              </figcaption> */}
            </figure>
          </a>
          <a
            href="https://unsplash.com/@dimadallacqua"
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/D.png")}
                alt="Portrait by Dima DallAcqua"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Dima DallAcqua
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/shockwave.png")}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Alex Perez
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/babyShark.jpeg")}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Alex Perez
              </figcaption> */}
            </figure>
          </a>
          <a href="#" target="_blank" className="gallery__link">
            <figure className="gallery__thumb">
              <img
                src={require("../img/Sup.jpeg")}
                alt="Portrait by Alex Perez"
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                Portrait by Alex Perez
              </figcaption> */}
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Flat;
