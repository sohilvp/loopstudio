import React from 'react'
import imgInteractive from '../../assets/image-interactive.jpg'
import './about.css'
const About = () => {
  return (
    <div className='width-container'>
      <div className="about-container">
        <img src={imgInteractive} alt="" />
        <div className='about-text'>
          <h1>The leader in interactive VR </h1>
          <p> Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand</p>
        </div>
      </div>
    </div>
  )
}

export default About