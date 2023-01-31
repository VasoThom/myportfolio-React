import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [toggle, setToggle] = useState(0);
  const toggleButton = (button) => {
    setToggle(button);
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projekte</h2>
      <span className="section__subtitle">Meine kleine Projecte</span>

      <div className="projects__container container grid">
        <div className="projects__content">
          <h3 className="projects__title">Chronometer</h3>
          <span className="projects__button" onClick={() => toggleButton(1)}>
            Mehr anschauen...<i class="uil uil-arrow-right"></i>
          </span>

          <div
            className={
              toggle === 1 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                class="uil uil-x projects__modal-close"
                onClick={() => toggleButton(0)}
              ></i>

              <h3 className="projects__modal-title">Chronometer</h3>
              <div className="projects__modal-description">
                <a href="https://22-10-20-chronometer-vaso-thom.vercel.app/">
                  Live Demo
                </a>
                <p>Code</p>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <h3 className="projects__title">To do App</h3>
          <span className="projects__button" onClick={() => toggleButton(2)}>
            Mehr anschauen...<i class="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggle === 2 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                class="uil uil-x projects__modal-close"
                onClick={() => toggleButton(0)}
              ></i>

              <h3 className="projects__modal-title">To do App</h3>
              <div className="projects__modal-description">
                <a href="https://todo-vaso.vercel.app/">Live Demo</a>
                <a href=""> Code</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <h3 className="projects__title">Wetter App</h3>
          <span className="projects__button" onClick={() => toggleButton(3)}>
            Mehr anschauen...<i class="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggle === 3 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                class="uil uil-x projects__modal-close"
                onClick={() => toggleButton(0)}
              ></i>

              <h3 className="projects__modal-title">Wetter App</h3>
              <div className="projects__modal-description">
                <a href="https://myproject-three-pied.vercel.app/">Live Demo</a>
                <a href=""> Code</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <h3 className="projects__title">Calculator</h3>
          <span className="projects__button" onClick={() => toggleButton(4)}>
            Mehr anschauen...<i class="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggle === 4 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                class="uil uil-x projects__modal-close"
                onClick={() => toggleButton(0)}
              ></i>

              <h3 className="projects__modal-title">Calculator</h3>
              <div className="projects__modal-description">
                <a href="https://22-10-27-calculator-vaso-thom.vercel.app/">
                  Live Demo
                </a>
                <a href=""> Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
