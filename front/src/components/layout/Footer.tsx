import React, { useContext, useState } from 'react'
import profilecontext from '../../context/profile/ProfileContext';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Email from './Email';

const Footer = () => {
    const Profilecontext = useContext(profilecontext);
    const { medias } = Profilecontext;
    const [contactFormState, updateContactFormState] = useState('contactFormHidden');

    if (medias.length == 0) return null;


    const updateState = () => {
        if (contactFormState === 'contactFormHidden') {
            updateContactFormState('contactFormActive');
        } else {
            updateContactFormState('contactFormHidden');
        }
    }

    return(
        <footer className='bg-dark text-white'>
            <div className='container' id="Contact">
                <h3 className='mb-5'>Contact</h3>

                <div className='row'>
                    <a className='col-sm-3 col-6 contact-link' href={medias[0].contact} target='_blank'><p><FontAwesomeIcon icon={faGithub}/> {medias[0].description}</p></a>
                    <a className='col-sm-3 col-6 contact-link' href={medias[1].contact} target='_blank'><p><FontAwesomeIcon icon={faGitlab}/> {medias[1].description}</p></a>
                    <a className='col-sm-3 col-6 contact-link' href={medias[2].contact} target='_blank'><p><FontAwesomeIcon icon={faLinkedin}/> {medias[2].description}</p></a>
                    <a className='col-sm-3 col-6 contact-link' href={`mailto:${medias[3].contact}`} onClick={updateState}><p><FontAwesomeIcon icon={faEnvelope}/> {medias[3].description}</p></a>
                </div>
                {/* <hr className={`mb-4 ${contactFormState}`}/>
                <div className={`row ${contactFormState}`}>
                    <Email myEmail={`mailto:${medias[3].contact}`}/>
                </div> */}
                
            </div>
        </footer>
    )
}

export default Footer;