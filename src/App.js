//react
import React from "react";
//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
//css
import './App.scss';
//portfolio project data
import professionalProjects from "./data/professional/professionalProjects.js"
import academicProjects from "./data/academic/academicProjects.js"

//app
function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Portfolio 
        projects={professionalProjects} 
        title="Portfolio" 
        sectionId="professional" 
      />
      <Portfolio 
        projects={academicProjects} 
        title="Academic" 
        sectionId="academic" 
        subtitle="Completed at UCLA Extension's Full Stack Bootcamp"
      /> 
      <Contact />
    </div>
  );
}

export default App;
