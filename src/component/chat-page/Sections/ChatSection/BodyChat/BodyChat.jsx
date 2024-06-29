import React, { useEffect, useRef, useState } from 'react'
import ReciveMessage from '../../../../../Utils/ReciveMessage'
import image from "../../../../../assets/p.jpeg"
import SendMessage from '../../../../../Utils/SendMessage'
const BodyChat = () => {
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
      }, []);
  return (
    <div onClick={toggleScrollbar} className={` overflow-y-scroll p-4 ${showScrollbar?'show-scroll' : "hide-scroll"}`}>
        <ReciveMessage message='hello how are you' image={image} />
        <SendMessage message='hello , fine thank you ... i miss you' image={image} />
        <ReciveMessage message='ooh nice can you give me some minutes i want to ask you about some thing please' image={image} />
        <SendMessage message='i Can help you if you want? but my phone is broken ,,,can we go to the garden' image={image} />
        <ReciveMessage message='ok in the evening I will go to the garden and wait you' image={image} />
        <SendMessage message='ok when you go please talk with me' image={image} />
        <ReciveMessage message='of Course ' image={image} />
        <SendMessage message='thank you' image={image} />
        <ReciveMessage message='welcome' image={image} />
        <div ref={messagesEndRef} />
    </div>
  )
}

export default BodyChat