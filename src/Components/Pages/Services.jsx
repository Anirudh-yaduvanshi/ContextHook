import React, { useContext } from 'react'
import userContext from "../../context/usercontext"

const Services = () => {
  const values = useContext(userContext);
  return (
    <div>Services kre ge aapki vo jinak naam ahi {values.username} aur inki umar hai {values.age}</div>
  )
}

export default Services