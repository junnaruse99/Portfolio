import React, { useReducer, FC } from 'react';
import ProjectContext from './ProjectContext';
import { Project, defaultProject } from './ProjectModel';
import { Error } from '../Models';
import ProjectReducer from './ProjectReducer';
import { GET_PROJECTS, PROJECT_ERROR } from '../../types';
let projectData : Project[] = require('../../data/projects.json');


const ProjectState: FC = props => {
  
  const [ state, dispatch ] = useReducer(ProjectReducer, defaultProject);

  const getProjects = async () => {
    try {
      dispatch({
        type: GET_PROJECTS,
        payload: projectData
      })

    } catch (error) {
      const alert: Error = {
        msg: 'There was an error getting the data',
        class: 'alert-error'
      }

      dispatch({
        type: PROJECT_ERROR,
        payload: alert
      })

    }
  }

  return (
    <ProjectContext.Provider
    value={{
        projects: state.projects,
        message: state.message,
        getProjects,
    }}>
        {props.children}
    </ProjectContext.Provider>
  )
}

export default ProjectState;

