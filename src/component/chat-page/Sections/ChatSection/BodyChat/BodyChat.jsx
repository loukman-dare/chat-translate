import React, { useEffect, useRef, useState } from 'react'
import ReciveMessage from '../../../../../Utils/ReciveMessage'
import image from "../../../../../assets/p.jpeg"
import SendMessage from '../../../../../Utils/SendMessage'
const BodyChat = ({messages}) => {
    const [showScrollbar, setShowScrollbar] = useState(false);
    const messagesEndRef = useRef(null);

   
    const toggleScrollbar = () => {
      setShowScrollbar(!showScrollbar);
      
    };
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
     
      useEffect(() => {
        scrollToBottom();
      }, [messages]);
  return (
    <div onClick={toggleScrollbar} className={`h-3/4 overflow-y-scroll p-4 flex flex-col gap-2 ${showScrollbar?'show-scroll' : "hide-scroll"}`}>
        
        {messages.map((message, index) => (
        message.type === 'sent' ? (
          <SendMessage key={index} message={message.text} image={image} />
        ) : (
          <ReciveMessage key={index} message={message.text} image={image} />
        )
      ))}
        <div ref={messagesEndRef} />
    </div>
  )
}

export default BodyChat