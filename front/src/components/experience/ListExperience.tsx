import React from 'react'
import { Experience } from '../../context/profile/ProfileModel'

const ListExperience = ({experience}:{experience:Experience})  => {
    return(
        <ul>
            <li>{experience.name}</li>
            <li>{experience.start_date}</li>
            <li>{experience.end_date}</li>
            <li>{experience.location}</li>
            <li>{experience.description}</li>
            <li>{experience.achievement}</li>

        </ul>
    )
}

export default ListExperience;