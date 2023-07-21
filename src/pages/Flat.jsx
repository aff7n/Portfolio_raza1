import React from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";

const Flat = (props) => {
  return (
    <div className="collection">
      {/* <img className="bg-img" src={require("../img/bumbly.jpeg")} alt="" /> */}
      <Nav />
      <div className="gallery">
        <div className="gallery__column">
          <a
            href={require("../img/geezer.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/geezer.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/Grizi.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/Grizi.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/pain.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/pain.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/Tiggi.jpg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/Tiggi.jpg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/babba.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/babba.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
        </div>
        <div className="gallery__column">
          <a
            href={require("../img/doggo.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/doggo.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/logan.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/logan.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/meow.png")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/meow.png")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/shak.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/shak.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/han.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/han.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
        </div>
        <div className="gallery__column">
          <a
            href={require("../img/PRIME.png")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/PRIME.png")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/general.png")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/general.png")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/haha.png")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/haha.png")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/capitan.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/capitan.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/raju.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/raju.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
        </div>
        <div className="gallery__column">
          <a
            href={require("../img/cheers.png")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/cheers.png")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/Thor.jpg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/Thor.jpg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/captainYoda.png")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/captainYoda.png")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/D.png")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/D.png")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/shockwave.png")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/shockwave.png")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/babyShark.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/babyShark.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
          <a
            href={require("../img/Sup.jpeg")}
            target="_blank"
            className="gallery__link"
          >
            <figure className="gallery__thumb">
              <img
                src={require("../img/Sup.jpeg")}
                alt=" "
                className="gallery__image"
              />
              {/* <figcaption className="gallery__caption">
                 
              </figcaption> */}
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Flat;
