import React, { useContext, useEffect, useState, useRef } from 'react';
import { NavLink, Route } from "react-router-dom";
import SearchBar from './SearchBar';

const NavBar = () => {
    const rand = function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    return (
        <div className="nav-c">
            <NavLink to="/" activeClassName="nav-c__flicker" >
                <svg viewBox="0 0 72 50" id="icon-flickr_logo"><path d="M3.008 23.64H0V20h3.095v-.977c0-4.484 2.112-6.046 6.276-6.046 1.13 0 1.998.174 2.663.29l-.32 3.587c-.433-.145-.866-.234-1.65-.234-1.33 0-1.848.926-1.848 2.403V20h3.77v3.64h-3.77v11.38H3.008V23.64zM14 13.32h5.21v21.7H14v-21.7zM21.808 13.668h5.205v3.82h-5.205zM21.808 19.984h5.205v15.034h-5.205zM41.136 24.256c-.956-.577-1.908-.836-3.15-.836-2.26 0-3.994 1.563-3.994 4.165 0 2.398 2.024 3.96 4.28 3.96 1.187 0 2.372-.258 3.24-.72l.117 3.875c-1.302.433-2.864.666-4.255.666-4.974 0-8.763-2.894-8.763-7.87 0-5.006 3.79-7.897 8.763-7.897 1.563 0 2.952.262 4.138.84l-.377 3.816zM43.798 13.32h5.206v12.962h.057l4.34-6.334h5.698l-5.234 6.916 5.668 8.155h-6.306l-4.166-7.465h-.057v7.464h-5.206v-21.7zM71.745 24.113c-.578-.175-1.154-.175-1.763-.175-2.43 0-3.792 1.767-3.792 4.718v6.363h-5.203V19.947h4.743v2.777h.056c.898-1.91 2.2-3.125 4.457-3.125.607 0 1.245.085 1.763.174l-.26 4.34z"></path></svg>
            </NavLink>
            <div className="nav-c__link-box">
                <NavLink to="/" activeClassName="nav-c__link-box__link" >You</NavLink>
                <NavLink to="/" activeClassName="nav-c__link-box__link" >Explore</NavLink>
                <NavLink to="/" activeClassName="nav-c__link-box__link" >Prints</NavLink>
                <NavLink id="get-pro" to="/" activeClassName="nav-c__link-box__link" >Get Pro</NavLink>
            </div>
            <div className="nav-c__spacer"></div>
            {/* <div className="nav-c__search"> <span>search</span> </div> */}
            <SearchBar></SearchBar>
            <div className="nav-c__icon-c">
                <img id="cloudArrow" alt='aroow' src={require("../images/cloudArrow.png")}/>
                <svg viewBox="0 0 24 24" id="icon-search"><path d="M21.707 18.88l-4.823-4.824A7.945 7.945 0 0 0 18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.48 0 2.865-.412 4.056-1.116l4.823 4.823a1 1 0 0 0 1.413 0l1.414-1.414a1 1 0 0 0 0-1.414zM4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z"></path></svg>
                <img id="bell" alt='bell' src={require("../images/bell.png")}/>
                <div id="camera" ></div>
            </div>
        </div>
    )
}

export default NavBar;