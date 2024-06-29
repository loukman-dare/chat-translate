import React, { useState } from 'react'
import HeadChat from './HeadChat/HeadChat'
import BodyChat from './BodyChat/BodyChat'
import FootChat from './FootChat/FootChat'
const Chat = () => {
  const handleDataChange = async (newMessage) => {
    
    setMessages((prevMessages) => [...prevMessages, { type: 'sent', text: newMessage }]);
    
    try {
      const formData = new FormData();
      formData.append('from', "auto");
      formData.append('to', 'en');
      formData.append('text', 'Xin chào cảm ơn bạn đã sử dụng dịch vụ của chúng tôi"');

      const response = await fetch('https://google-translate113.p.rapidapi.com/api/v1/translator/text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'google-translate113.p.rapidapi.com',
          'x-rapidapi-key': '757daa46d0msh2fd4f0d89b525fcp192c6cjsnd46fcaea56b9'
        },
        body:JSON.stringify({
          from: 'auto',
          to: 'en',
          text: newMessage
        })
        
      });

      
      
      const translatedText = await response.json();
      console.log(translatedText);
      setMessages((prevMessages) => [...prevMessages, { type: 'received', text: translatedText.trans }]);
    } catch (error) {
      console.error('Error fetching translation', error);
    }
  };
  const [messages,setMessages] = useState([])

  return (
    <div className='flex flex-col h-full max-h-full '>
        <HeadChat />
        <BodyChat messages={messages}/>
        <FootChat onDataChange={handleDataChange} />
    </div>
  )
}

export default Chat