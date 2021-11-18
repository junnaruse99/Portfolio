import { createContext } from 'react';
import { Tools, defaultTools } from './ToolModel';

const ToolContext = createContext<Tools>(defaultTools);

export default ToolContext;
