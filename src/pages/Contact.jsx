import React from "react";
import Nav from "../components/Nav";

const Contact = (props) => {
  return (
    <>
      <Nav />
      <div class="container-contact">
        <div class="contact-box">
          {/* <div class="left">
            <img src={require("../img/raza.jpeg")} />
            <p className="lead">
              Specializing in 3D Character Art, I combine technical prowess with
              creative imagination to create detailed and captivating
              characters. Proficient in sculpting, texturing, and rigging. Adept
              at creating captivating and diverse characters for films and
              animation. My portfolio showcases a diverse range of meticulously
              crafted characters, each telling a unique story.
            </p>
          </div> */}
          <div class="right">
            <h1 className="display-6 mt-0">Tell me about your project</h1>
            <span />
            <div class="contact">
              <div class="form-container">
                <form class="form">
                  <h2 className="display-7">Contact Me</h2>
                  <div class="username">
                    <input type="text" placeholder="Enter your Name" />
                  </div>
                  <div class="useremail">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="usermessage">
                    <textarea
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  <div class="usersubmit">
                    <input type="submit" value="Contact Us" />
                  </div>
                </form>
              </div>
              <div class="address">
                {/* <div class="social">
                  <span>
                    <a href="#">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </span>
                  <span>
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="jumbotron jumbotron-fluid bg-image">
        <div
          class="contact d-flex justify-content-center align-items-center mask"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="left-col">
            <img
              class="img-fluid contact-logo"
              alt="avatar2"
              src={require("../img/raza2.png")}
            />
            <p className="text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Voluptatibus tenetur cupiditate quibusdam totam repellendus id,{" "}
              <br />
              laborum suscipit reprehenderit voluptates. Odio sit ullam
              reiciendis!
            </p>
          </div>
          <div className="right-col">
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
        </div>
      </div> */}
    </>
  );
};

export default Contact;
