import "./App.css";
import React from "react";
import Header from "./components/header/Header.js";
import Home from "./components/home/Home.js";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
