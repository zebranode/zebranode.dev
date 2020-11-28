import React from "react";
import LazyLoad from 'react-lazy-load';
//icons
import { Github as GithubIcon } from '@icons-pack/react-simple-icons';

function Project({project, sectionId}) {
  const {liveURL, githubURL, screenshotURL, title, text} = project;
  return (
    <div className="col-md-4">
    <div className="work-box">
            <div className="work-img">
                <a href={liveURL} target="_blank" rel="noopener noreferrer">
                    <LazyLoad offset={600} >
                        <img src={ require(`../data/${sectionId}/img/${screenshotURL}`) } alt={title} className="img-fluid" />
                    </LazyLoad>
                </a>
            </div>
            <div className="work-content">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="w-title"><a href={liveURL}>{title}</a></h2>
                        <div className="w-more">
                            <span>{text}</span><br />
                            <Github githubURL={githubURL}/>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
  );
}

function Github({githubURL}){
    if (githubURL){
        return(
        <span>
            <a className="repo-link" href={githubURL}>
            <GithubIcon color="#000000" alt='github icon' className="icon"/>
            Github
            </a>
        </span>
        );
    } 
    return(<span></span>);
}

export default Project;
