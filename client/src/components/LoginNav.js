import React, { useContext, useEffect, useState, useRef, Component } from 'react';
import { NavLink, Route } from "react-router-dom";
import LoginSearch from './LoginSearch'



const LoginNav = () => {

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
        <div className="login-nav-c">
            <NavLink to="/" activeClassName="login-nav-c__flicker" >
                <svg viewBox="0 0 72 50" id="login-icon-flickr_logo"><path d="M3.008 23.64H0V20h3.095v-.977c0-4.484 2.112-6.046 6.276-6.046 1.13 0 1.998.174 2.663.29l-.32 3.587c-.433-.145-.866-.234-1.65-.234-1.33 0-1.848.926-1.848 2.403V20h3.77v3.64h-3.77v11.38H3.008V23.64zM14 13.32h5.21v21.7H14v-21.7zM21.808 13.668h5.205v3.82h-5.205zM21.808 19.984h5.205v15.034h-5.205zM41.136 24.256c-.956-.577-1.908-.836-3.15-.836-2.26 0-3.994 1.563-3.994 4.165 0 2.398 2.024 3.96 4.28 3.96 1.187 0 2.372-.258 3.24-.72l.117 3.875c-1.302.433-2.864.666-4.255.666-4.974 0-8.763-2.894-8.763-7.87 0-5.006 3.79-7.897 8.763-7.897 1.563 0 2.952.262 4.138.84l-.377 3.816zM43.798 13.32h5.206v12.962h.057l4.34-6.334h5.698l-5.234 6.916 5.668 8.155h-6.306l-4.166-7.465h-.057v7.464h-5.206v-21.7zM71.745 24.113c-.578-.175-1.154-.175-1.763-.175-2.43 0-3.792 1.767-3.792 4.718v6.363h-5.203V19.947h4.743v2.777h.056c.898-1.91 2.2-3.125 4.457-3.125.607 0 1.245.085 1.763.174l-.26 4.34z"></path></svg>
            </NavLink>
            <LoginSearch ></LoginSearch>
            <svg id="login-magnifying-glass--right" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" /></svg>
            <div id="login-nav-c__login"  ><span>Log in</span></div>
            <div id="login-nav-c__signup"  ><span>Signup</span></div>
        </div>
    )
}

export default LoginNav;