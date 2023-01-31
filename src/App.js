import "./App.css";
import React from "react";
import Header from "./components/header/Header.js";
import Home from "./components/home/Home.js";
import About from "./components/about/About.js";
import Skills from "./components/skills/Skills.js";
import Projects from "./components/projects/Projects.js";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
