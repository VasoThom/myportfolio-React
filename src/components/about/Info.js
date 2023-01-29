import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-award about__icon"></i>
        <h3 className="about__title">Erfahrung</h3>
        <p className="about__subtitle">Beginner</p>
      </div>
      <div className="about__box">
        <i class="uil uil-briefcase about__icon"></i>
        <h3 className="about__title">Zertifikate</h3>
        <p className="about__subtitle">-Computer Science & Telecommunication</p>

        <p className="about__subtitle">-FullStack WebDeveloper</p>
      </div>
    </div>
  );
};

export default Info;
