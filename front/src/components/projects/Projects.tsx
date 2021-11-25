import React, { useContext, useEffect } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import ListProject from './listProject';
import './projects.css';

const Projects = () => {

	const projectContext = useContext(ProjectContext);
	const { projects, message, getProjects } = projectContext;

    useEffect(() => {    
		getProjects();
	}, []);

    return (
        <div className='container vh-100' id='Projects'>
            <h1 className='mb-4 text-center'>My Projects</h1>
            {projects.length ? (
                projects.map(project => 
                    <ListProject project={project} key={project.id}/>
                )
            ) : <h1>Error</h1> 
        }
        </div>
    )
}

export default Projects