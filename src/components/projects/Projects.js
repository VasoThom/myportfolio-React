import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [toggle, setToggle] = useState(0);
  const toggleButton = (button) => {
    setToggle(button);
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Meine kleine Projekte</span>

      <div className="projects__container container grid">
        <div className="projects__content">
          <h3 className="projects__title">Event Project - Veranstaltungen</h3>
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

              <h3 className="projects__modal-title">
                Event Project - Veranstaltungen
              </h3>
              <div className="projects__modal-description">
                <a href="https://event.ella-rotari.com/">Live Demo</a>
                <a href="https://github.com/eventTeamPlayersManegement/event_Management_final_Project">
                  {" "}
                  Code
                </a>
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
                <a href="https://weather-app-five-pi-19.vercel.app/">
                  Live Demo
                </a>
                <a href="https://github.com/VasoThom/weather-app"> Code</a>
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
                <a href="https://github.com/VasoThom/calculator"> Code</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <h3 className="projects__title">Food Order App</h3>
          <span className="projects__button" onClick={() => toggleButton(5)}>
            Mehr anschauen...<i class="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggle === 5 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                class="uil uil-x projects__modal-close"
                onClick={() => toggleButton(0)}
              ></i>

              <h3 className="projects__modal-title">Food Order App</h3>
              <div className="projects__modal-description">
                <a href="https://food-order-app-sage.vercel.app/">Live Demo</a>
                <a href="https://github.com/VasoThom/Food-Order-App"> Code</a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <h3 className="projects__title">Table Client</h3>
          <span className="projects__button" onClick={() => toggleButton(6)}>
            Mehr anschauen...<i class="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggle === 6 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                class="uil uil-x projects__modal-close"
                onClick={() => toggleButton(0)}
              ></i>

              <h3 className="projects__modal-title">Table Client</h3>
              <div className="projects__modal-description">
                <a href="https://table-client-project.vercel.app/">Live Demo</a>
                <a href="https://github.com/VasoThom/Table-client"> Code</a>
              </div>
            </div>
          </div>
        </div>

        <div className="projects__content">
          <h3 className="projects__title">CAR SPIEL</h3>
          <span className="projects__button" onClick={() => toggleButton(7)}>
            Mehr anschauen...<i class="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggle === 7 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                class="uil uil-x projects__modal-close"
                onClick={() => toggleButton(0)}
              ></i>

              <h3 className="projects__modal-title">CAR SPIEL</h3>
              <div className="projects__modal-description">
                <a href="https://car-rose-nine.vercel.app/">Live Demo</a>
                <a href="https://github.com/VasoThom/Car"> Code</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <h3 className="projects__title">Chronometer</h3>
          <span className="projects__button" onClick={() => toggleButton(8)}>
            Mehr anschauen...<i class="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggle === 8 ? "projects__modal active-modal" : "projects__modal"
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
                <a href=""> Code</a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <h3 className="projects__title">Kitchen Stories</h3>
          <span className="projects__button" onClick={() => toggleButton(9)}>
            Mehr anschauen...<i class="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggle === 9 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                class="uil uil-x projects__modal-close"
                onClick={() => toggleButton(0)}
              ></i>

              <h3 className="projects__modal-title">Kitchen Stories</h3>
              <div className="projects__modal-description">
                <a href="https://kitchenstories.vercel.app/">Live Demo</a>
                <a href="https://github.com/VasoThom/reducer-kitchenStories">
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects__content">
          <h3 className="projects__title">Todo Fullstack</h3>
          <span className="projects__button" onClick={() => toggleButton(10)}>
            Mehr anschauen...<i class="uil uil-arrow-right"></i>
          </span>
          <div
            className={
              toggle === 10 ? "projects__modal active-modal" : "projects__modal"
            }
          >
            <div className="projects__modal-content">
              <i
                class="uil uil-x projects__modal-close"
                onClick={() => toggleButton(0)}
              ></i>

              <h3 className="projects__modal-title">Todo Fullstack</h3>
              <div className="projects__modal-description">
                <a href="https://todo-mern-2023.onrender.com/">Live Demo</a>
                <a href="https://github.com/VasoThom/TODO-MERN"> Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
