import React from 'react'

const Profile = ({image,name,job,message}) => {
  return (
    <div className='flex justify-between items-center gap-3 cursor-pointer'>
        <div className='w-14 h-14 '>
            <img className='rounded-full w-full h-full' src={image} />
        </div>
        <div className='flex flex-col gap-1'>
            <div className='text-sm font-bold text-primary'>{name}</div>
            <div className='text-xs text-text1 font-bold'>{job}</div>
            <div className='text-xs text-text2'>{message}</div>

        </div>
    </div>
  )
}

export default Profile