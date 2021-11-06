import React from 'react'
import { Tool } from '../../context/tools/ToolModel'

const ListTools = ({tool}:{tool:Tool}) => {
  return(
  <div className="card col-12 col-md-4 col-lg-3 align-items-stretch">
    <a className='card-tool' href={tool.url} target="_blank">
      <div className='card-img-container row justify-content-center p-3'>
        <img className="card-img card-img-top" src={tool.img} alt="Card image" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{tool.name}</h5>
        <p className="card-text">{tool.description}</p>
      </div>
    </a>
  </div>
  )
}

export default ListTools;