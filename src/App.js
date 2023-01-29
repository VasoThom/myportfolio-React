import "./App.css";
import React from "react";
import Header from "./components/header/Header.js";
import Home from "./components/home/Home.js";
import About from "./components/about/About.js";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
