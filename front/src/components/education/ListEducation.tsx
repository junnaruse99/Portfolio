import React from 'react'
import { Education } from '../../context/profile/ProfileModel'

const ListEducation = ({education}:{education:Education})  => {
    return(
        <div className='mb-5'>
            <div className='d-flex justify-content-between'>
                <h5>{education.name}</h5>
                <p className='font-weight-bold'>{`${education.start_date} - ${education.end_date}`}</p>
            </div>
            <div className='font-weight-bold'>{education.location}</div>
            <ul>
                <li>{education.description}</li>
                {education.extra? <li>{education.extra}</li> : null}
            </ul>
        </div>
    )
}

export default ListEducation;