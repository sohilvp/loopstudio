import React,{useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoClose} from 'react-icons/io5'
import './navbar.css'
const Navbar = () => {
  const[active,setActive] =useState(false)
  const hamActive=()=>{
    setActive(!active)
    
  }
  

  return (
    <div className='nav-container'>
       <h1>loopstudio</h1>
          <div className="hamburger" style={active? {color:"black"}:{color:"white"}}  onClick={hamActive}>
            {active ? <IoClose /> :<RxHamburgerMenu />}
            </div>
      <ul className={active ? 'mob-nav' :'nav-list'}>
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
      </ul>
    </div>
  )
}

export default Navbar