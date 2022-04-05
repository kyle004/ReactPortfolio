import React from 'react'
import { contact, section5Title, social, url, projects } from '../../profile'

const Project = ({id, name, url, skills}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            { skills && <h3>{skills.map(skill => skill)}</h3> }
            
            { social.github && <a title="View Project On Github" rel="noopener noreferrer" target="_blank" href={url}><i className="fab fa-github" id="github1"> GitHub</i></a> }
            {social.heroku && <a title="View Project On Heroku" rel="noopener noreferrer" target={projects.url2} href={url}><i className="icon-heroku" id="heroku"> Heroku</i></a> }
        </div>
    )
}

export default Project
