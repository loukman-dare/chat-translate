import React from 'react'
import Head from './Head'
import MessaageList from './message_list/MessageList'
const MemberSection = () => {
  return (
    <div className='overflow-y-auto'>
        <Head />
        <div className='w-full h-[1px] bg-text2  mt-4 mb-2'></div>
        <MessaageList />
    </div>
  )
}

export default MemberSection