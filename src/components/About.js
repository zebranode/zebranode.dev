import React from "react";
//icons
import { Html5, Css3, Jquery, NodeDotJs, Bootstrap, Sass, ReactJs, Heroku, Netlify, Javascript, Mongodb, Mysql, Webpack, Wordpress, Squarespace, Git, Github, Linkedin } 
from '@icons-pack/react-simple-icons';

const iconSize = 30;

function About(props) {
  return (
    // <!--/ About Start /-->
    <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="box-shadow-full">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="about-me pt-1 pt-md-0">
                                    <div className="title-box-2">
                                        <h5 className="title-left">
                                            About
                                        </h5>
                                    </div>
                                    <h5>Full Stack Developer</h5>
                                    <div className="about-links">
                                        <a href="https://github.com/zebranode"><Github color="#181717" size={iconSize} />Github</a>
                                        <a href="https://www.linkedin.com/in/btmoore/"><Linkedin color="#0077B5" size={iconSize} />Linkedin</a>
                                    </div>
                                    <div className="about-skills">
                                        <h5>Skills</h5>
                                        <div className="front-end">
                                            <a href="https://developer.mozilla.org/en-US/docs/Web/javascript"><Javascript color="#F7DF1E" size={iconSize} />Javascript</a>
                                            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><Html5 color="#E34F26" size={iconSize} />HTML</a>
                                            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><Css3 color="#1572B6" size={iconSize} />CSS</a>
                                        </div>
                                        <div className="frameworks">
                                            <a href="https://reactjs.org/"><ReactJs color="#61DAFB" size={iconSize} />React.js</a>
                                            <a href="https://jquery.com/"><Jquery color="#0769AD" size={iconSize} />jQuery</a>
                                            <a href="https://getbootstrap.com/"><Bootstrap color="#563D7C" size={iconSize} />Bootstrap</a>  
                                            <a href="https://sass-lang.com/"><Sass color="#CC6699" size={iconSize} />Sass</a>  
                                        </div>
                                        <div className="back-end">
                                            <a href="https://nodejs.org/"><NodeDotJs color="#339933" size={iconSize} />Node.js</a>
                                            <a href="https://www.mongodb.com/"><Mongodb color="#47A248" size={iconSize} />MongoDB</a>
                                            <a href="https://www.mysql.com/"><Mysql color="#4479A1" size={iconSize} />MySQL</a>
                                            <a href="https://webpack.js.org/"><Webpack color="#8DD6F9" size={iconSize} />Webpack</a>
                                            <a href="https://git-scm.com/"><Git color="#F05032" size={iconSize} />Git</a>
                                        </div>
                                        <div className="deployment">
                                            <a href="https://www.netlify.com/"><Netlify color="#00C7B7" size={iconSize} />Netlify</a>
                                            <a href="https://www.heroku.com/"><Heroku color="#430098" size={iconSize} />Heroku</a>
                                            <a href="https://www.wordpress.org/"><Wordpress color="#21759B" size={iconSize} />Wordpress</a>
                                            <a href="https://www.squarespace.com/"><Squarespace color="#000000" size={iconSize} />Squarespace</a>
                                        </div>
                                    </div>                           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    // <!--/ About End /-->
  );
}

export default About;
