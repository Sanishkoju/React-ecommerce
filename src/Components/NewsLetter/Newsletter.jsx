import React from 'react'
import './NewsLetter.css'

const Newsletter = () => {
  return (
    <section class="news-letter-sec">
        <div className="container">
            <div className="newsletter">
                <h1>Get Exclusive Offers On YOur Email</h1>
                <p>Subscribe to our newletter and stay updated</p>
                <div>
                   <input type="email" placeholder="Your Email id" />
                   <button>Subscribe</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter