import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { render } from '@testing-library/react';
import React from 'react'
import Linkify from 'react-linkify';
import SpinnerComponent from '../common/Spinner';

interface IMessageProps {
    message: string,
    isUser: boolean,
    isGenerating?: boolean
}

const MessageComponent = (props: IMessageProps) => {

    function renderLinkifiedText(text: string) {
        return text.split(/(https?:\/\/\S+)/).map((segment, index) => {
            if (/https?:\/\/\S+/.test(segment)) {
                return (
                    <a key={index} href={segment} target="_blank" rel="noopener noreferrer">
                        Click me!
                    </a>
                );
            } else {
                return <span key={index}>{segment}</span>;
            }
        });
    }
      
    return (
        <div className="message-container row">
            {!props.isUser &&
                <div className="message-chatbot-circle col-sm-2">
                    <FontAwesomeIcon style={{color:'white'}} icon={faRobot} size='sm'/>
                </div>
            }
            {props.isGenerating 
                ? 
                    <SpinnerComponent />
                : 
                <div className={`message-content ${props.isUser ? "message-content-user" : "message-content-bot col-sm-9"}`}>
                    <Linkify componentDecorator={renderLinkifiedText}>
                        {props.message}
                    </Linkify>
                </div>
            }
        </div>
    )
}

export default MessageComponent