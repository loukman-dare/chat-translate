import React from 'react'
import image from "../../../../../assets/p.jpeg"
import image1 from "../../../../../assets/p1.jpg"
import image2 from "../../../../../assets/p2.jpg"
import image4 from "../../../../../assets/p3.jpg"
import image3 from "../../../../../assets/p4.jpg"
import image5 from "../../../../../assets/p5.jpg"


import Profile from '../../../../../Utils/Profile'
import Padge from '../../../../../Utils/Padge'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
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
const MessaageList = () => {
  return (
    <div className='flex flex-col gap-2 overflow-y-auto'>
        {
            messages.map((message , key)=>{
                return(
                    <div key={key} className='flex justify-between items-center hover:bg-white cursor-pointer'> 
                    <Profile image={message.image} name={message.name} message={message.message} />
                    <div className='flex flex-col gap-1 items-end'>
                        <div className='text-text2 text-xs'>{message.date}</div>
                        {message.newMessage ? <Padge num={2} /> : <FontAwesomeIcon icon={faCheck}  className="text-primary bg-secondary rounded-full"/>} 
                    </div>
                </div>  
                )
            })
        }
    </div>
  )
}

export default MessaageList