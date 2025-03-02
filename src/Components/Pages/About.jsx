import React, { useContext } from 'react'
import userContext from '../../context/usercontext'


const About = () => {
const valuses =  useContext(userContext)

  return (
    <>
      <div>
      About : {valuses.username}
      </div>
      <div>

      age : {valuses.age}
      </div>
      
      thasts all we know till now
    
    </>
  )
}

export default About