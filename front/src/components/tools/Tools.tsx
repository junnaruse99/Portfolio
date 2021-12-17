import React, { useContext, useEffect } from 'react'
import ToolContext from '../../context/tools/ToolContext';
import ListTools from './listTools';
import './tools.css';

const Tools = () => {
	const toolContext = useContext(ToolContext);
	const { tools, message, getTools } = toolContext;

	useEffect(() => {    
		getTools();
	}, []);

	return (
		<div className='bg-white'>
			<div className='container' id='Tools'>
				<h1 className='mb-5 text-center'>Known Tools</h1>
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
		</div>
	);
}

export default Tools;