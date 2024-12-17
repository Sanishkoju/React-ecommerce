import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'


const Offers = () => {
  return (
    <section className='offers-sec'>
        <div className="container">
            <div className="offers">
                <div className='offers-left'>
                    <h1>Exclusive</h1>
                    <h1>Offers for you</h1>
                    <p>ONLY ON BEST SELLIRS PRODUCTS</p>
                    <buttons>Check Now</buttons>
                </div>
                <div className='offers-right'>
                    <img src={exclusive_image} alt="exclusive image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Offers