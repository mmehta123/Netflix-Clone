import React, { useState } from 'react'
import { useRef } from 'react';
import "./register.scss"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleStart = () => {
        setEmail(emailRef.current.value);
    }
    
    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }

    return (
        <div className="register">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/028e62d2-2a59-4fc3-adaa-a0756a0512b9/IN-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <button className="loginbtn">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {
                    !email ? (
                        <div className="input">
                            <input type="email" ref={emailRef}  placeholder='Enter Your Email Address' className='email' />
                            <button className="registerbtn" onClick={handleStart}>Get Started</button>
                        </div>
                    ):(
                        <form className="input">
                                <input type="password" ref={passwordRef} placeholder='Enter Your Password' className='password' />
                                <button className="registerbtn" onClick={handleFinish}>Start Membership</button>
                        </form>
                    )
                }
            </div>
        </div>
    )
}

export default Register