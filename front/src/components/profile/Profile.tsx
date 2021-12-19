import React, { useContext, useEffect } from 'react'
import profilecontext from '../../context/profile/ProfileContext';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

    const Profilecontext = useContext(profilecontext);
	const { personal, getProfile } = Profilecontext;

    useEffect(() => {    
		getProfile();
	}, []);

    if (!personal) return(<div></div>);

    return(
    <div className='bg-profile'>
        <div className='container d-flex flex-column justify-content-center align-items-center vh-100' id="Profile">
            <div className='display-1'>{personal.name}</div>
            <hr className='w-100'/>
            <div className='mt-2'>{personal.career.toUpperCase()}</div>
            <div className='mt-2'>{personal.location.toUpperCase()}</div>
        </div>
        <a href='#Projects' className='btn-profile d-flex justify-content-center align-items-center'>
            <span><FontAwesomeIcon icon={faChevronDown} size = '2x'/></span>
        </a>
    </div>
    )
}

export default Profile;