import React from 'react'
import SearchField from "../../../../Utils/SearchField"
import Profile from '../../../../Utils/Profile'
import image from "../../../../assets/p.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage, faFileInvoice, faFilePdf, faFileVideo, faHeart, faMessage, faPerson, faUser, faVideo } from '@fortawesome/free-solid-svg-icons'
const MemberInfo = () => {
  return (
    <div className='py-12 px-6 flex flex-col gap-5'>
        <SearchField />
        <div className='flex flex-col items-center gap-1 cursor-pointer'>
            <div className='w-24 h-24 '>
                <img className='rounded-full w-full h-full' src={image} />
            </div>
            <div className='flex flex-col  items-center leading-3'>
                <div className='text-2xl font-bold text-text1'>hiba alope</div>
                <div className='text-xs text-text1 font-bold'>content writer</div>

            </div>
        </div>
        <div className='flex h-fit gap-5 items-center justify-center'>
            <div className='flex flex-col items-center gap-1 cursor-pointer'>
                <FontAwesomeIcon icon={faMessage} className='text-xl text-primary p-5 rounded-full bg-secondary flex justify-center items-center' />
                <div className='text-xs text-text1'>vedio</div>
            </div>
            <div className='h-20 w-[2px] bg-white'></div>
            <div className='flex flex-col items-center gap-1 cursor-pointer'>
                <FontAwesomeIcon icon={faVideo} className='text-xl text-primary p-5 rounded-full bg-secondary flex justify-center items-center'/>
                <div className='text-xs text-text1'>chat</div>
            </div>

        </div>
        <div className='flex justify-center'>
            <div className='flex justify-between items-center w-[90%]'>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <FontAwesomeIcon className='text-xs' icon={faUser} />
                    <div className='text-xs'>view friends </div>
                </div>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <FontAwesomeIcon className='text-xs' icon={faHeart} />
                    <div className='text-xs'>add to favorite </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 items-center'>
            <div className='w-full'>Attachments</div>
            <div className='flex justify-center gap-10 mt-4 flex-wrap'>
                <div className='bg-secondary w-10 h-10 flex justify-center items-center cursor-pointer '>
                    <FontAwesomeIcon icon={faFilePdf} className=' text-xl text-primary  '/>
                </div>
                <div className='bg-secondary w-10 h-10  flex justify-center items-center cursor-pointer'>
                    <FontAwesomeIcon icon={faFileVideo} className=' text-xl text-primary '/>
                </div>
                <div className='bg-secondary w-10 h-10 flex justify-center items-center cursor-pointer'>
                    <FontAwesomeIcon icon={faFileInvoice} className=' text-xl text-primary' />
                </div>
                <div className='bg-secondary w-10 h-10  flex justify-center items-center cursor-pointer'>
                     <FontAwesomeIcon icon={faFileImage} className='text-xl text-primary'/>
                </div>
            </div>
            <button className='flex items-center justify-center py-[3px] px-8 border-primary text-primary rounded-full border-2 w-fit'>View All</button>

        </div>
    </div>
  )
}

export default MemberInfo