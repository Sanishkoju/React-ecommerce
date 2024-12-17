import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import './Hero.css'
export const Hero = () => {
  return (

        <section className='hero-sec'>
            <div className="container">
            <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className='hero-hand-icon'>
                   <p>new</p> 
                   <img src={hand_icon} alt="hand icon"/>
                </div>
                <p>collection</p>
                <p>for evryone</p>
                <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt='arrow icon'  />
            </div>
            </div>
             
            <div className="hero-right">
                <img src={hero_image} alt='arrow icon'  />
            </div>
        </div>
        </div>
        </section>

  )
}
