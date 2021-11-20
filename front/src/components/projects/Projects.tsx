import React, { useContext, useEffect } from 'react';
import ProjectContext from '../../context/projects/ProjectContext';
import ListProject from './listProject';

const Projects = () => {

	const projectContext = useContext(ProjectContext);
	const { projects, message, getProjects } = projectContext;

    useEffect(() => {    
		getProjects();
	}, []);

    return (
        <div className='container' id='Projects'>
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