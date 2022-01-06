import React from 'react'
import { Project } from '../../context/projects/ProjectModel'
import { eventTrack } from '../analytics/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import './projects.css';
import ListTools from './listTools';

const ListProject = ({project}:{project:Project}) => {
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                {project.img? <img className='proj-img' src={project.img} /> : null} 
            </div>
            <div className='proj-data'>
                <div className='hide-data'>
                    <div className='row'>
                        <h1 className='card-tittle'>{project.name}</h1>
                        <hr />
                    </div>
                    <div className='row'>
                        {project.tools ? (project.tools.map(tool => 
                            <ListTools tool={tool} key={tool.id}/>
                        )) : null }
                    </div>
                    <div className='row'>
                        <p className="card-text">{project.description}</p>
                    </div>
                    <div className='row card-links'>
                        <a onClick={eventTrack.bind(this, project.name, 'click', 'front')} href={project.front_url} 
                            className="btn col-4 shadow" target="_blank"><FontAwesomeIcon icon={faGithub} className='d-none d-sm-block'></FontAwesomeIcon>  Front</a>
                        <a onClick={eventTrack.bind(this, project.name, 'click', 'back')} href={project.back_url} 
                            className="btn col-4 shadow" target="_blank"><FontAwesomeIcon icon={faGithub} className='d-none d-sm-block'></FontAwesomeIcon>  Back</a>
                        <a onClick={eventTrack.bind(this, project.name, 'click', 'demo')} href={project.demo_url} 
                            className="btn col-4 shadow" target="_blank"><FontAwesomeIcon icon={faChrome} className='d-none d-sm-block'></FontAwesomeIcon>  Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListProject