import React, { useContext } from 'react'
import  UserContext  from '../context/usercontext'

const Footer = () => {
const {username, age} =useContext(UserContext)

  return (
    <div className='w-full bottom-0 absolute h-12 flex justify-center item-center text-center bg-gray-400'>
      <div>all rights reserved by {username} , {age} years ago</div>
    </div>
  )
}

export default Footer