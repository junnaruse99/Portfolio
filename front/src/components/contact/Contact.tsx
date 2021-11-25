import React, { useContext, useEffect } from 'react'
import profilecontext from '../../context/profile/ProfileContext';
import ListContact from './ListContact';

const Contact = () => {

    const Profilecontext = useContext(profilecontext);
	const { medias } = Profilecontext;

    return(
        <footer className='container vh-100' id="Contact">
            <h1 className='mb-4 text-center'>Contact</h1>

            {medias ? medias.map( media =>
                <ListContact media={media} key={media.id} />
            ) : null }
        </footer>
    )
}

export default Contact;