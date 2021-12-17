import React, { useContext } from 'react'
import profilecontext from '../../context/profile/ProfileContext';
import ListExperience from './ListExperience';
import './experience.css';

const Experience = () => {
    const Profilecontext = useContext(profilecontext);
	const { experiences } = Profilecontext;

    return (
        <div className='container' id='Experience'>
            <h1 className='mb-4 text-center'>Experience</h1>
            {experiences.length ? (
                experiences.map( experience => 
                    <ListExperience experience={experience}  key={experience.id} /> 
                )
            ) : null}
        </div>
    )
}

export default Experience;