import React from 'react'
import HeadChat from './HeadChat/HeadChat'
import BodyChat from './BodyChat/BodyChat'
import FootChat from './FootChat/FootChat'

const Chat = () => {
  return (
    <div className='flex flex-col h-full max-h-full '>
        <HeadChat />
        <BodyChat />
        <FootChat />
    </div>
  )
}

export default Chat