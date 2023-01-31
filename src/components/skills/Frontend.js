import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">HTML5</div>
          </div>
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">CSS3</div>
          </div>
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">JavaScript</div>
          </div>
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">Node.js</div>
          </div>
        </div>
      </div>

      <h3 className="skills__title">JS Frameworks</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">React</div>
          </div>
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">React Native</div>
          </div>
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">JQuery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
