import React, { useContext } from 'react'
import UserContext from '../../context/usercontext'

const Home = () => {
  const{username , age }  = useContext(UserContext)
  return (
    <div>Home


      hello form home to {username} who is {age} years old
    </div>
  )
}

export default Home