import { createContext } from 'react';
import { Tools, defaultTool } from './ToolModel';

const ToolContext = createContext<Tools>(defaultTool);

export default ToolContext;
