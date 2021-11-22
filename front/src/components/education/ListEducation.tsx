import React from 'react'
import { Education } from '../../context/profile/ProfileModel'

const ListEducation = ({education}:{education:Education})  => {
    return(
        <ul>
            <li>{education.name}</li>
            <li>{education.start_date}</li>
            <li>{education.end_date}</li>
            <li>{education.location}</li>
            <li>{education.description}</li>
        </ul>
    )
}

export default ListEducation;