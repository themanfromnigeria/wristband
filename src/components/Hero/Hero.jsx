import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Seamless Wristbands & Event Solutions</h1>
        <p>From custom wristbands to cutting-edge ticketing technology, we help brands and events simplify access, enhance security, and deliver unforgettable experiences.</p>
        <button className='btn'>Explore More <img src={darkarrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
