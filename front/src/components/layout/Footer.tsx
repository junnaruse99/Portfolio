import React, { useContext, useEffect } from 'react'
import profilecontext from '../../context/profile/ProfileContext';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const Profilecontext = useContext(profilecontext);
    const { medias } = Profilecontext;

    if (medias.length == 0) return null;

    return(
        <footer className='bg-dark text-white'>
            <div className='container' id="Contact">
                <h3 className='mb-5'>Contact</h3>

                <div className='row'>
                    <a className='col-sm-3 col-6' href={medias[0].contact} target='_blank'><p><FontAwesomeIcon icon={faGithub}/> {medias[0].description}</p></a>
                    <a className='col-sm-3 col-6' href={medias[1].contact} target='_blank'><p><FontAwesomeIcon icon={faGitlab}/> {medias[1].description}</p></a>
                    <a className='col-sm-3 col-6' href={medias[2].contact} target='_blank'><p><FontAwesomeIcon icon={faLinkedin}/> {medias[2].description}</p></a>
                    <a className='col-sm-3 col-6' href={`mailto:${medias[3].contact}`} target='_blank'><p><FontAwesomeIcon icon={faEnvelope}/> {medias[3].description}</p></a>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;