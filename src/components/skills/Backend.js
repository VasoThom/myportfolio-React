import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name"> MongoDB</div>
            <div className="skills__level"></div>
          </div>
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">MySql(basic)</div>
            <div className="skills__level"></div>
          </div>
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">Node.js</div>
            <div className="skills__level"></div>
          </div>
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">Mongoose</div>
            <div className="skills__level"></div>
          </div>
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">Express</div>
            <div className="skills__level"></div>
          </div>
        </div>
      </div>
      <h3 className="skills__title">Version Control:</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name"> Git</div>
            <div className="skills__level"></div>
          </div>
          <div className="skills__data">
            <i class="uil uil-check-square"></i>
            <div className="skills__name">Github</div>
            <div className="skills__level"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
