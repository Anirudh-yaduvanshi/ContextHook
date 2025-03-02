import React, { useContext, useState } from 'react'
import  UserContext  from '../../context/usercontext';

const Contact = () => {
  const value = useContext(UserContext);
  const { setUsername, setAge } = value;


  const [naam, setnaam] = useState("")
  const [umr, setumr] = useState("")


  const submitHandler = (e) => {
    e.preventDefault();
    setUsername(naam);
    setAge(umr);
  }

  return (
    <div className='w-full text-center h-fit '>
      <form >
        <input
          placeholder='naam likh do'
          onChange={(e) => { setnaam(e.target.value) }}
          value={naam}
          type="text"
          name="naam"
          id="naam"
        />
        <input
          onChange={(e) => { setumr(e.target.value) }}
          value={umr}
          placeholder='age likh do'
          type="number"
          name="umr"
          id='umr' />
        <button onClick={submitHandler}>Submit</button>
      </form>
      </div>


  )
}

export default Contact