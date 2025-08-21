import React from 'react'
import './About.css'
import aboutImage from '../../assets/about.png'
import playIcon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={aboutImage} alt="" className='about-img' />
        <img src={playIcon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>About Univeristy</h3>
        <h2>Nurturing TOmorrow</h2>
        <p>The Wristbands Company develop custom functional solutions to automate and improve your operations.We specialize in tailored digital solutions that seamlessly integrate software with hardware, catering to businesses, recreational centers, and the hospitality industry. Our expertise allows us to streamline your operations and enhance efficiency</p>
        <p>The Wristbands Company develop custom functional solutions to automate and improve your operations.We specialize in tailored digital solutions that seamlessly integrate software with hardware, catering to businesses, recreational centers, and the hospitality industry. Our expertise allows us to streamline your operations and enhance efficiency</p>
      </div>
    </div>
  )
}

export default About
