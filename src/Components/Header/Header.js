import React from 'react'
import Navbar from '../Navbar/Navbar'
import './header.css'
const Header = () => {
  return (
    <div className='header-container'>
      <div className="width-container container">
      <Navbar />
      <div className="heading-container">
        <h1 className='header-text' > Immersive experiences <br/> that deliver</h1>
      </div>
      </div>
      
    </div>
  )
}

export default Header