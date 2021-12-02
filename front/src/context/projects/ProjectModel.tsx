import { Error } from '../Models';

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
}

export const defaultProject : Projects = {
    projects: [],
    message: null,
    getProjects: () => {}
}