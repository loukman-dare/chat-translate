import React from 'react'

const Padge = ({num}) => {
  return (
    <div className='w-4 h-4 bg-primary text-xs text-white rounded-full flex justify-center items-center font-bold'>
        {num}
    </div>
  )
}

export default Padge