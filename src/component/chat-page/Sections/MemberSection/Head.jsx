import React, { useState } from 'react'
import Profile from '../../../../Utils/Profile'
import pro from "../../../../assets/myp.jpg"
import image from "../../../../assets/p.jpeg"
import image1 from "../../../../assets/p1.jpg"
import image2 from "../../../../assets/p2.jpg"
import image4 from "../../../../assets/p3.jpg"
import image3 from "../../../../assets/p4.jpg"
import image5 from "../../../../assets/p5.jpg"
import SearchField from '../../../../Utils/SearchField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faEdit, faPencil } from '@fortawesome/free-solid-svg-icons'
const Head = () => {
  const [newMessage,SetNewMessage] = useState(false)
  const messages = [
    {
        name :"ali ali",
        message :"hello , how are you ?",
        newMessage:true,
        numberOfNewMessage : 2,
        date :"10:35 AM",
        image:image
    },
    {
        name :"maysaa hamoud",
        message :"let's greap abit of coffie",
        newMessage:true,
        numberOfNewMessage : 2,
        date :"10:35 AM",
        image:image1
    },
    {
        name :"lionel muyd",
        message :"I'm ib the house now",
        newMessage:true,
        numberOfNewMessage : 2,
        date :"10:35 AM",
        image:image2
    },
    {
        name :"hamdan",
        message :"No I dont want",
        newMessage:false,
        numberOfNewMessage : 2,
        date :"10:35 AM",
        image:image3
    },
    {
        name :"ahaya dj",
        message :"ok my friend I will talk with you later",
        newMessage:false,
        numberOfNewMessage : 2,
        date :"10:35 AM",
        image:image4
    },{
        name :"modar dwery",
        message :"hahaha that's funny",
        newMessage:false,
        numberOfNewMessage : 2,
        date :"10:35 AM",
        image:image5
    }
]
  return (
    <div className='flex flex-col gap-1 '>
        <div className='flex justify-between items-center'>
            <Profile image={pro} name="loukman dareusey" job="front end developer"/>
            <div onClick={()=>SetNewMessage(!newMessage)} className='h-10 w-10 hover:bg-white flex items-center justify-center rounded-full'>
              <FontAwesomeIcon  icon={faPencil}  className='text-text2 cursor-pointer'/>
            </div>
        </div>
        <div>
            <SearchField />
        </div>
        {
          newMessage ? (
            <div className='relative w-full h-screen flex flex-col gap-5'> 
                <div className=' flex justify-between items-center '>
                  <div>New message to :</div> 
                  <FontAwesomeIcon  icon={faClose} className='text-primary text-2xl cursor-pointer' onClick={()=>SetNewMessage(false)}/>
                 
                </div>
                <div>
                  <input type='text' className='w-full h-8 p-2 outline-none' placeholder='write your message...'/>
                </div>
                <div className='flex flex-col gap-2'>
                  {
                    messages.map((message,index)=>{
                      return(
                        <div key={index} className='flex justify-between items-center'>
                        <Profile name={message.name} image={message.image} />
                         <button className='flex items-center justify-center py-[3px] px-8 border-primary text-primary rounded-full border-2 w-fit hover:bg-primary hover:text-third '>Send</button>
                        
                      </div>
                      )
                    })
                  }
                </div>
            </div>
          ) :
          <></>
        }
    </div>
  )
}

export default Head