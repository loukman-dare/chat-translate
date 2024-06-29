import React from 'react'
import MemberSection from './Sections/MemberSection/MemberSection'
import Chat from './Sections/ChatSection/Chat'
import MemberInfo from './Sections/MemberInfoSection/MemberInfo'
const ChatPage = () => {
  return (
    <div className='w-full h-screen overflow-hidden  bg-slate-400 flex relative'>
        <div className='w-1/4 h-full  bg-third p-4'>
            <MemberSection />
        </div>
        <div className='w-2/4 h-full bg-white'>
            <Chat />
        </div>
        <div className='w-1/4 h-full bg-third'>
            <MemberInfo />
        </div>

    </div>
  )
}

export default ChatPage