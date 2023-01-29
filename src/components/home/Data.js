import React from "react";

export default function Data() {
  return (
    <div>
      <h1 className="home__title">
        Vasiliki Thomopoulou
        <img src={require("../../assets/IMG.png")} />
      </h1>
      <h3 className="home_subtitle">Web Developer</h3>
      <p className="home_description">
        Ich bin Fullstack Web Developer ..........
      </p>
      <a href="#contact" className="button button--flex">
        Kontakt
      </a>
    </div>
  );
}
