import React from "react";
import "./about.css";
import LebensLauf from "../../assets/vasothomopouloucv.pdf";
import Info from "./Info.js";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img
          className="about__img"
          alt=""
          src={require("../../assets/IMG_6931.jpg")}
        />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Hi, ich erstelle Webseite mit UI user interface, bin "Junior" und
            freue mich um Projecte durchuzuführen..
          </p>
          <a download="" href={LebensLauf} className="button button--flex">
            LebensLauf herunterladen &nbsp;
            <i class="uil uil-file-download-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
