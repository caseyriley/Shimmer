import React, { useContext, useEffect, useState, useRef, Component } from 'react';
import { NavLink, Route } from "react-router-dom";
import LoginSearch from './LoginSearch'



const LoginNav = (props) => {

    const [dropD, setdropD] = useState(false);
    const toggleDropdown = () => {
        const nextState = !dropD;
        setdropD(nextState);
    };

    const [transform, setTransform] = useState(false);
    const toggleTransform = () => {
        const nextState = !transform;
        setTransform(nextState);
    };

   



    return (
        <>
        <div id="how-dropdown">
            <p>Welcome to shimmer. </p>
            <div></div>
            <p>Here are the steps to using shimmer: </p>
            <p className="indent">1. Login using the login button located in the upper right hand 
                corner of this page.  A demo user is provided for ease of use. </p>
            <p className="indent">2. </p>
        </div>
        <div className="login-nav-c">
            <NavLink to="/" activeClassName="login-nav-c__flicker" >
                <svg className="shimmer" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"viewBox="0 0 1366 768" enableBackground="new 0 0 1366 768" ><text transform="matrix(1 0 0 1 113.1719 450.7109)" fontFamily="'DINAlternate-Bold'" fontSize="301px">shimmer</text></svg> 
            </NavLink>
            <div className="login-nav-c__how" ><span>how to use this app</span> </div>
            {/* <LoginSearch searchFunction={props.searchFunction}></LoginSearch> */}
            {/* <svg id="login-magnifying-glass--right" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" /></svg> */}
            <div id="login-nav-c__login"  ><span>Log in</span></div>
            {/* <div id="login-nav-c__signup"  ><span>Signup</span></div> */}
        </div>
        </>
    )
}

export default LoginNav;