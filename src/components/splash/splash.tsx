import React, { useContext, useEffect } from 'react'
import ToolContext from '../../context/tools/ToolContext';
import ListTools from './listTools';

const Splash = () => {
	const toolContext = useContext(ToolContext);
	const { tools, getTools } = toolContext;

	useEffect(() => {    
		getTools();
	}, []);

	return (
		<div className='container'>
			<div className='row justify-content-center'>
				{tools.length ? (
					tools.map(tool => 
						<ListTools key={tool.id} tool={tool}/>
					)
				) : null}
			</div>
		</div>
	);
}

export default Splash;