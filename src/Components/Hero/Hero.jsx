import React from 'react'
import './Hero.css'
import wave_icon from '../Assets/wave.png'
import hero_image from '../Assets/woman1.png'
import arrow from '../Assets/arrow-right.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={wave_icon} alt='hello' />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-button">
                <div>Latest Collection</div>
                <img src={arrow} alt="" />
            </div>
        </div>

        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
