import React, { useContext } from 'react'
import profilecontext from '../../context/profile/ProfileContext';
import ListEducation from './ListEducation';
import './education.css';

const Education = () => {
    const Profilecontext = useContext(profilecontext);
	const { educations } = Profilecontext;

    return (
        <div className='bg-white'>
            <div className='container' id='Education'>
                <h1 className='mb-5 text-center'>Education</h1>
                {educations.length ? (
                    educations.map( education => 
                        <ListEducation education={education}  key={education.id} /> 
                    )
                ) : null}
            </div>
        </div>
    )
}

export default Education;