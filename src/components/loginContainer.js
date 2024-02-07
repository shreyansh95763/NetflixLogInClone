import React from 'react';
import {NavLink} from "react-router-dom";

export const LoginContainer = () => {
    return (
        <div className='login-container'>
            <div className='middle-element'>
                <h2>Sign In</h2>
                <form className="sighIn-form">
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password " placeholder="Password" />
                    <button className="btn" type="submit"><NavLink className="navlink" to="/">Sign In</NavLink></button>
                </form>
                {/* <div> <NavLink className="navlink" to="/">Forget Password</NavLink></div> */}
                <NavLink to="https://www.netflix.com/in/LoginHelp" className="nav">Forget Password?</NavLink>
                <div className='lower-section'>
                    <div className='checkbox-container display-flex'><input type='checkbox' className='checkbox' /><p>Remember me</p></div>
                    <div className='container display-flex'><p>New to Netflix?</p> <NavLink to="#" className=" signUp">Sigh up Now.</NavLink></div>
                    <p className='container'>This page is protected by google reCAPTCHA to ensure you are not bot,<NavLink to="#" className=" learn-more">Learn more.</NavLink></p>
                </div>
            </div>
        </div>
    );
}