import React, { useContext } from 'react'
import { Link } from 'react-router'
import Themecontext from '../context/Themecontext'

const Header = () => {
  const {toggleTheme} =useContext(Themecontext)
  return (
    <div>
      <ul className="flex gap-3">
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/services">services</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        <li>
          <button onClick={toggleTheme}>Theme</button>
        </li>
      </ul>
    </div>
  );
}

export default Header