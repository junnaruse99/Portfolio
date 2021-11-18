import { createContext } from 'react';
import { Projects, defaultProject } from './ProjectModel';

const ProjectContext = createContext<Projects>(defaultProject);

export default ProjectContext;
