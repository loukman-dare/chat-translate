import React from 'react'

const SendMessage = ({message,image}) => {
  return (
    <div className='flex gap-[3px] w-full items-end flex-row-reverse justify-start'>
        <div className='w-7 h-7 flex gap-2'>
            <img className='rounded-full w-full h-full' src={image} />
        </div>
        <div className='bg-primary text-white p-5 w-fit  rounded-xl rounded-br-none max-w-[40%]'>
            {message}
        </div>
    </div>
  )
}

export default SendMessage