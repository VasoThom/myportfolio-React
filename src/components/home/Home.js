import React from "react";
import "./home.css";
import Social from "./Social.js";
import Data from "./Data.js";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img">
            {/* <img src={require("../../assets/IMG.png")} /> */}
          </div>
          <Data />
        </div>
      </div>
    </section>
  );
}
