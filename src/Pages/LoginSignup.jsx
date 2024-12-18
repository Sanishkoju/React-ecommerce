import React from 'react'
import './CSS/Login.css'
const LoginSignup = () => {
  return (
    <section className='loginsignup-sec'>
      <div className="container">
        <div className="loginsignup">
          <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <input type='text' placeholder='Your Name' />
              <input type='email' placeholder='Email Address' />
              <input type='password' placeholder='Password' />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">Already have an account? <span>Login</span></p>
            <div className="loginsignup-agree">
              <input  type="checkbox" name='' id='aggree' />
              <p for="aggree">By continuing, i agree the terms and condition</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginSignup