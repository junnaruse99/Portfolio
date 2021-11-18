import React from 'react'
import { Project } from '../../context/projects/ProjectModel'

const ListProject = ({project}:{project:Project}) => {
    return(
        <div className='row'>
            <div className="card col-12">
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className='row'>
                        <a href={project.front_url} className="btn btn-primary col-4" target="_blank">Front</a>
                        <a href={project.back_url} className="btn btn-primary col-4" target="_blank">Back</a>
                        <a href={project.demo_url} className="btn btn-primary col-4" target="_blank">Demo</a>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default ListProject