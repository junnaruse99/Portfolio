import React, { useContext } from 'react'
import profilecontext from '../../context/profile/ProfileContext';
import ListEducation from './ListEducation';

const Education = () => {
    const Profilecontext = useContext(profilecontext);
	const { educations } = Profilecontext;

    return (
        <div className='container vh-100' id='Education'>
            <h1 className='mb-4 text-center'>Education</h1>
            {educations.length ? (
                educations.map( education => 
                    <ListEducation education={education}  key={education.id} /> 
                )
            ) : null}
        </div>
    )
}

export default Education;