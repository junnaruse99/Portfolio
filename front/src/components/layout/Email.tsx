import React, { useState } from 'react'
import './footer.css';
import { send } from 'emailjs-com';

const Email = ({myEmail}:{myEmail:string}) => {
    
    const [contactInfo, saveContactInfo] = useState({
        from_name:'',
        to_name: 'Jun Naruse',
        message: '',
        reply_to: ''
    });

    const [sent, updateSent] = useState({
        message: '',
        class: 'bg-success'
    });
    
    const handleChange = (e : any) => {
        saveContactInfo({
            ...contactInfo,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const { from_name, reply_to, message } = contactInfo;


    const sendEmail = (e:any) => {

        e.preventDefault();

        // Check that I have an input
        if (from_name.trim().length === 0 || reply_to.trim().length === 0 || message.trim().length === 0) {
            updateSent({
                message: 'All fields are mandatory',
                class: 'bg-danger'
            });
            setTimeout( () => {
                updateSent({
                    message: '',
                    class: 'bg-success'
                })},
                5000
            );

            return;
        }

        send(
            process.env.REACT_APP_EMAILJS_SERVICE as string,
            process.env.REACT_APP_EMAILJS_TEMPLATE as string,
            contactInfo,
            process.env.REACT_APP_EMAILJS_USER as string,
        )

        saveContactInfo({
            from_name:'',
            to_name: 'Jun Naruse',
            message: '',
            reply_to: ''
        });

        updateSent({
            message: 'Your email was sent',
            class: 'bg-success'
        });
        setTimeout( () => {
            updateSent({
                message: '',
                class: 'bg-success'
            })},
            5000
        )
    }

    return (
        <form id='ContactForm' onSubmit={sendEmail}>
            <div className='d-flex flex-row align-items-center justify-content-between'>
                <h4 className='pb-2 pt-2'>Contact Form</h4>
                {sent.message !== '' ? <span className={`pb-2 pt-2 badge text-white ${sent.class}`}>{sent.message}</span> : null}
            </div>

            <div className="form-group mb-2">
                <label htmlFor="contactName">Name</label>
                <input type="text" className="form-control" name="from_name" value={from_name} id="contactName" placeholder="Name" onChange={handleChange}/>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="contactEmail">Email address</label>
                <input type="email" className="form-control" name="reply_to" value={reply_to} id="contactEmail" placeholder="name@example.com" onChange={handleChange}/>
            </div>
            <div className="form-group mb-4">
                <label htmlFor="contactDescription">Description</label>
                <textarea className="form-control" name="message" value={message} id="contactDescription" onChange={handleChange}/>
            </div>
            <button type="submit" value='submit' className="btn btn-primary w-auto">Send</button>
            <span className='next-to-button'>or click <a href={myEmail} target='_blank'>here</a> to use your default email app</span>
        </form>  
    )
}

export default Email;