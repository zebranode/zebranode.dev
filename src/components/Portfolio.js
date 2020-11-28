import React from "react";
import Project from "./Project.js";

function Portfolio({projects, sectionId, title, subtitle}) {
  return (
    <section id={sectionId} className="portfolio-mf sect-pt4 route">
      <div className="container">
        {/* portfolio header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">{title}</h3>
              <h5 className="title-a">{subtitle}</h5>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        {/* portfolio projects */}
        <div className="row">
          {projects.map((project, index) => (
            <Project project={project} key={index} sectionId={sectionId}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
