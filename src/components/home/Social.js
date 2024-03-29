import React from "react";
import Xing from "../../assets/xing-122.svg";

export default function Social() {
  return (
    <div className="home__social">
      <a
        href="https://github.com/VasoThom"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/vaso-thomopoulou-6820a21b9/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://www.xing.com/profile/Vasiliki_Thomopoulou2/cv"
        className="home__social-icon"
        target="_blank"
      >
        <img className="xing__logo" src={Xing} alt="" />
      </a>
    </div>
  );
}
