import React from 'react';
import { Tool } from '../../context/tools/ToolModel';
import './projects.css';

const ListTools = ({tool}:{tool:Tool}) => {
    return(
        <a className='w-auto text-decoration-none text-white badge-tools' href={tool.url} target="_blank">{tool.name}</a>
    )
}

export default ListTools;