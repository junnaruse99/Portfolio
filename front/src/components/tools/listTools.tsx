import React from 'react'
import { Tool } from '../../context/tools/ToolModel'
import './tools.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';

const ListTools = ({tool}:{tool:Tool}) => {

  const starLevel = [1, 2, 3];

  return(
  <div className="card col-12 col-md-4 col-lg-3 align-items-stretch m-2">
    <a className='card-tool' href={tool.url} target="_blank">
      <div className='card-img-container row justify-content-center p-3'>
        <img className="card-img card-img-top" src={tool.img} alt="Card image" loading="lazy" />
      </div>
      <div className="card-tool-body">
        <h5 className="card-tool-title">{tool.name}</h5>
        <div className='text-center'>
          {starLevel.map(lvl => (
            lvl <= tool.level ? <FontAwesomeIcon icon={faStarSolid} /> : <FontAwesomeIcon icon={faStarRegular} />
          ))}
          </div>
        <p className="card-tool-text">{tool.description}</p>
      </div>
    </a>
  </div>
  )
}

export default ListTools;