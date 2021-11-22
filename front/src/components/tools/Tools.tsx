import React, { useContext, useEffect } from 'react'
import ToolContext from '../../context/tools/ToolContext';
import ListTools from './listTools';

const Tools = () => {
	const toolContext = useContext(ToolContext);
	const { tools, message, getTools } = toolContext;

	useEffect(() => {    
		getTools();
	}, []);

	return (
		<div className='container' id='Abilities'>
			{message ? <div>{message}</div> : 
				<div className='row justify-content-center'>
				{tools.length ? (
					tools.map(tool => 
						<ListTools key={tool.id} tool={tool}/>
					)
				) : null}
				</div>
			}
		</div>
	);
}

export default Tools;