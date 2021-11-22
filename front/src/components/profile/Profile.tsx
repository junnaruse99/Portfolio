import React, { useContext, useEffect } from 'react'
import profilecontext from '../../context/profile/ProfileContext';

const Profile = () => {

    const Profilecontext = useContext(profilecontext);
	const { personal, getProfile } = Profilecontext;

    useEffect(() => {    
		getProfile();
	}, []);

    return(
        <div className='container' id="Profile">
            <div className='d-flex flex-row justify-content-center align-items-center vh-100 display-1'>
                {personal ? personal.name : null}
            </div>
        </div>
    )
}

export default Profile;