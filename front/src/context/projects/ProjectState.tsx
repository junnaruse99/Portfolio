import React, { useReducer, FC } from 'react';
import ProjectContext from './ProjectContext';
import { Project, ProjectTools, defaultProject } from './ProjectModel';
import { Tool } from '../tools/ToolModel';
import { Error } from '../Models';
import ProjectReducer from './ProjectReducer';
import { GET_PROJECTS, PROJECT_ERROR } from '../../types';
let projectData : Project[] = require('../../data/projects.json');
let projectTools : ProjectTools[] = require('../../data/project_tools.json');
let toolsData : Tool[] = require('../../data/tools.json');

const ProjectState: FC = props => {
  
  const [ state, dispatch ] = useReducer(ProjectReducer, defaultProject);

  const getProjects = async () => {
    try {

      // Need to incorporate projectTools into projectData
      // Create an empty list
      let project_tools : any[] = [];
      // List is going to contain a list of tools, and the index is referencing the id of the project
      projectTools.forEach(tool => {
        // If there is nothing, intialize it as an empty list
        if (!project_tools[tool.project_id]) {
          project_tools[tool.project_id] = [];
        }

        project_tools[tool.project_id].push(toolsData[tool.tool_id - 1]) // 1 indexed
      })

      // Now add the tools to the projectData
      for (let i = 0; i < projectData.length; i++) {
        projectData[i].tools = project_tools[projectData[i].id];
      }
      
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

