import React from 'react'
import image from "../../../../../assets/p3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'

const HeadChat = () => {
  return (
    <div className='p-8'>
        <div className='flex justify-between items-center '>
            <div className='flex gap-2 cursor-pointer items-center'>
                <div className='w-14 h-14 flex gap-2'>
                    <img className='rounded-full w-full h-full' src={image} />
                </div>
                <div className='text-md  text-primary font-bold'>ahaya dj</div>
                <span className='w-4 h-4 rounded-full bg-green-400'></span>
            </div>
            <div className='flex gap-2'>
                <FontAwesomeIcon icon={faHeart} className='text-text2 text-2xl cursor-pointer' />
                <FontAwesomeIcon icon={faSearch} className='text-text2 text-2xl cursor-pointer' />
                <FontAwesomeIcon icon={faBell} className='text-text2 text-2xl cursor-pointer'  />
            </div>
        </div>
        <div className='w-full h-[2px] bg-third m-4'></div>

    </div>
  )
}

export default HeadChat