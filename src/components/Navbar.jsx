import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../images/logo.jpeg'
import { BsFillCartFill } from 'react-icons/bs'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/">
          <img src={logo} alt="logo.jpeg" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
      <div className='cart'>
        <BsFillCartFill />
        <span>2</span>
      </div>
    </div>
  )
}

export default Navbar