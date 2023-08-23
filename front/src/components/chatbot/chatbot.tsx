import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import './chatbot.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faRobot } from '@fortawesome/free-solid-svg-icons';
import MessageComponent from './message';
import { IMessage } from '../../interfaces/Message';
import { ChatbotService } from '../../services/chatbotService';
import { toast } from 'react-toastify';

const INITIAL_MESSAGE = "I'm Jun Naruse's portfolio chatbot, here to share details about Jun's professional journey, skills, projects, and experiences. Feel free to ask any questions for a comprehensive overview of Jun's qualifications and work."

interface IContainerState {
    isOpen: boolean
}

const defaultContainerState : IContainerState = {
    isOpen: false
}

function useOutsideAlerter(ref: any, onClickOutside: () => void) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

const ChatbotComponent = () => {
    const [containerState, setContainerState] = useState<IContainerState>(defaultContainerState);
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [message, setMessage] = useState<string>("");
    const [sessionId, setSessionId] = useState<string>("");
    const [isSendEnable, setIsSendEnable] = useState<boolean>(false);
    const [offset, setOffset] = useState(0);
    const showChatbotIcon = offset > 0.5*Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, onDismiss);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        let localSessionId = localStorage.getItem("sessionId") || "";

        if (localSessionId === "") return;
        
        ChatbotService.getMessages(localSessionId).then(res => {
            if (res.status !== 200){
                throw new Error();
            }
            setMessages(res.data);
        }).catch(() => {
            toast.error("There was an error connecting to the chatbot");
        });

        setSessionId(localSessionId)

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    function onDismiss(){
        setContainerState({...containerState, isOpen: false})
    }

    function onSendMessageClick() {
        if (!isSendEnable || !message) return;
        setIsSendEnable(false);
        let messageCopy = message;
        let messageId = uuidv4();

        setMessage("");
        ChatbotService.sendMessage(message, sessionId).then(res => {
            if (res.status !== 200){
                throw new Error("")
            }
            if (!sessionId) {
                localStorage.setItem("sessionId", res.data.sessionId)
            }

            setSessionId(res.data.sessionId);

            setMessages([
                ...messages,
                res.data
            ])
        }, (res) => {
            if (res.response.status === 429) {
                toast.error("Maximum number of requests exceeded. Please try again tomorrow.")
            }
            else {
                throw new Error("")
            }
            throw new Error();
        }).catch(() => {
            toast.error("There was an error connecting to the chatbot");
            setMessage(messageCopy);
            setMessages(messages.filter(x => x.id !== messageId));
        }).finally(() => {
            setIsSendEnable(true);
        })
        setMessages([
            ...messages,
            {
                id: messageId,
                sessionId,
                createdOn: new Date(),
                description: message,
                response: ""
            }
        ])
    }

    function handleKeyDown(e: any) {
        if (e.key === 'Enter') {
            onSendMessageClick()
          }      
    }

    function onChatbotMessageChange(e: ChangeEvent<HTMLInputElement>) {
        if (e === undefined) return;
        if (e.currentTarget.value.length >= 1 && !isSendEnable) {
            setIsSendEnable(true);
        }
        if (e.currentTarget.value.length == 0 && isSendEnable) {
            setIsSendEnable(false);
        }
        setMessage(e.currentTarget.value)
    }

    if (!showChatbotIcon) return <></>

    return (
        <div className="chatbot-container" ref={wrapperRef}>
            {!containerState.isOpen &&
                <div className="circle-effect">
                    <div className="chatbot-circle clickable" onClick={() => setContainerState({...containerState, isOpen: true})}>
                        <FontAwesomeIcon style={{color:'white'}} icon={faRobot} size='lg'/>
                    </div>
                </div>
            }
            {containerState.isOpen &&
                <div className="chatbot-wrapper">
                    <div className="chatbot-header">
                        <span>Jun's AI</span>
                        <span className="clickable" onClick={onDismiss}>x</span> 
                    </div>
                    <div className="chatbot-body">
                        <MessageComponent key={uuidv4()} message={INITIAL_MESSAGE} isUser={false} />
                        {messages.map(messageInstance => (
                            <>
                                <MessageComponent key={uuidv4()} message={messageInstance.description} isUser={true} />
                                <MessageComponent key={uuidv4()} message={messageInstance.response} isUser={false} isGenerating={!messageInstance.response}/>
                            </>
                        ))}
                        <AlwaysScrollToBottom />
                    </div>
                    <div className="chatbot-footer">
                        <input 
                            type="text" 
                            className="chatbot-messageBox" 
                            name="message" 
                            id="message" 
                            placeholder="Type here..." 
                            value={message} 
                            onChange={onChatbotMessageChange}  
                            onKeyDown={handleKeyDown}
                        />
                        {isSendEnable && 
                            <FontAwesomeIcon 
                                onClick={onSendMessageClick} 
                                className={`clickable chatbot-messageIcon`}
                                icon={faPaperPlane} 
                                size='sm'
                            />
                        }
                    </div>
                </div>
            }
        </div>
    )
}

const AlwaysScrollToBottom = () => {
    const elementRef: any = useRef();
    useEffect(() => elementRef.current.scrollIntoView({ behavior: 'smooth' }));
    return <div ref={elementRef} />;
};

export default ChatbotComponent