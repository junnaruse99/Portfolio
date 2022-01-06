import { Error } from '../Models';
import { Tool } from '../tools/ToolModel';
export interface Projects {
    projects: Project[];
    message: Error | null; 
    getProjects: () => void;
}

export interface Project {
    id: number;
    name: string;
    back_url: string;
    front_url: string;
    demo_url: string;
    description: string;
    img: string;
    tools: Tool[];
}

export interface ProjectTools {
    id: number,
    project_id: number,
    tool_id: number
  }
  
export const defaultProject : Projects = {
    projects: [],
    message: null,
    getProjects: () => {}
}