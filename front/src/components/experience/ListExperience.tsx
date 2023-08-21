import React from 'react'
import { Experience } from '../../context/profile/ProfileModel'

const ListExperience = ({experience}:{experience:Experience})  => {
    return(
        <div className='mb-5'>
            <div className='d-flex justify-content-between'>
                <h5>{experience.name}</h5>
                <p className='font-weight-bold'>{`${experience.start_date} - ${experience.end_date}`}</p>
            </div>
            <div className='font-weight-bold'>{experience.location}</div>
            <ul>
                {experience.description.map(description => (
                    <li>{description}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListExperience;