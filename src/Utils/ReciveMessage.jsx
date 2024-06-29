import React from 'react'

const ReciveMessage = ({message,image}) => {
  return (
    <div className='flex gap-[3px] items-end'>
        <div className='w-7 h-7 flex gap-2'>
            <img className='rounded-full w-full h-full' src={image} />
        </div>
        <div className='bg-secondary p-5 text-text1 rounded-2xl rounded-bl-none max-w-[40%]'>
            {message}
        </div>
    </div>
  )
}

export default ReciveMessage