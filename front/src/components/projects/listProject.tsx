import React from 'react'
import { Project } from '../../context/projects/ProjectModel'
import { eventTrack } from '../analytics/utils';

const ListProject = ({project}:{project:Project}) => {
    return(
        <div className='row'>
            <div className="card col-12">
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    {project.img? <img className='proj-img' src={project.img} /> : null} 
                </div>
                <div className='proj-data'>
                    <div className='hide-data'>
                        <div className='row'>
                            <p className="card-text">{project.description}</p>
                        </div>
                        <div className='row'>
                            <a onClick={eventTrack.bind(this, project.name, 'click', 'front')} href={project.front_url} 
                                className="btn btn-primary col-4" target="_blank">Front</a>
                            <a onClick={eventTrack.bind(this, project.name, 'click', 'back')} href={project.back_url} 
                                className="btn btn-primary col-4" target="_blank">Back</a>
                            <a onClick={eventTrack.bind(this, project.name, 'click', 'demo')} href={project.demo_url} 
                                className="btn btn-primary col-4" target="_blank">Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default ListProject