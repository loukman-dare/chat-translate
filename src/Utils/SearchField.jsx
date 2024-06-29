import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchField = () => {
  return (
    <div className='w-[95%] flex items-center gap-2  h-fit p-2 rounded-full bg-white'>
        <FontAwesomeIcon icon={faSearch} className='text-text2 text-2xl '/>
        <input type='search' placeholder='Search Here..' className='outline-none bg-transparent w-full placeholder:text-text2 placeholder:text-sm'/>
    </div>
  )
}

export default SearchField