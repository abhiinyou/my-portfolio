import React from "react";
import "./App.scss";

import { Navbar } from "./Components";
import Header from "./Container/Header/Header";
import Skills from "./Container/Skills/Skills";
import Projects from "./Container/Works/Projects";
import Contact from "./Container/Contact/Contact";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
