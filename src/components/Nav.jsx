import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Nav = (props) => {
  return (
    // Navbar new

    <nav
      className="navbar navbar-expand-md navbar-dark d-lg-block"
      style={{ zIndex: 2000 }}
    >
      <div className="container">
        <div className="container-fluid">
          {/* <div className="navbar-brand nav-name"> */}
          <Link to={"/"} className="navbar-brand nav-name">
            <h2 className="name">
              Mohammed
              <br />
              <span style={{ fontWeight: "600" }}> Raza Hasan</span>
            </h2>
          </Link>
          {/* </div> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button> */}
          <div className="right-list" id="navbarCollapse">
            <ul className="navbar-nav list-inline">
              <li className="nav-item active">
                <a className="nav-link hover" aria-current="page" href="/">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link hover" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/rxz.art/"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    // Navbar old
    // <nav class="navbar navbar-expand-sm fixed-top bg-light shadow p-3 mb-5">
    //   <div class="container">
    //     <div className="nav-cont">
    //       {/* <img
    //         src={require("./rayyan.jpg")}
    //         class="logo rounded-circle shadow-4-strong"
    //         alt="rayyan"
    //       /> */}
    //       <div className="navbar-brand">
    //         <a class="navbar-name" href="#">
    //           Mohammmed Raza Hasan
    //         </a>
    //         <p className="navbar-dsgn">3D Character Artist</p>
    //       </div>
    //     </div>

    //     {/* <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbar1"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button> */}
    //     <div class="collapse navbar-collapse" id="navbar1">
    //       <ul class="navbar-nav">
    //         <li class="nav-item active">
    //           <a class="nav-link" href="#">
    //             Work
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             About
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

/* <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      {/* <div className="">
        <div className="navbar-header">
          <a href="#page-top" className="navbar-brand page-scroll">
            Mohd Rayyan
          </a>
        </div>
      </div> 
      <div className="" id="">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#work" className="page-scroll">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="page-scroll">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav> */

export default Nav;
