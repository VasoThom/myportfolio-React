import React from "react";
import Xing from "../../assets/xing-122.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Vasiliki Thomopoulou</h1>
        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>{" "}
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/vaso-thomopoulou-6820a21b9/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/VasoThom"
            target="_blank"
            className="footer__social-link"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.xing.com/profile/Vasiliki_Thomopoulou2/cv"
            target="_blank"
            className="footer__social-link"
          >
            <img className="footer-logo" src={Xing} alt="" />
          </a>
        </div>
        <span className="footer__copyright">
          {/* &#169; */}©2023 Vasiliki Thomopoulou . All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
