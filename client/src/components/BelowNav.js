import React from 'react';
import { NavLink, Route } from "react-router-dom";

const BelowNav = (props) => {
    // const fullScreenState = props.fullScreen;
    return(
        <div id='below-nav-c' className={`${props.fullScreen ? "backwards" : "foreground"}`} >
            <div className='below-nav-c__centering-c'>
                <div className='below-nav-c__centering-c__left-c' >
                    <NavLink className="left-c__link-1" to={'/'}>Explore</NavLink>
                    <NavLink className="left-c__link-2" to={'/'}>Trending</NavLink>
                    <NavLink className="left-c__link-2" to={'/'}>Events</NavLink>
                </div>
                <div className='below-nav-c__centering-c__right-c' >
                    <NavLink className="left-c__link-3" to={'/'}>More </NavLink>
                    <svg className='caret-down' xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><title>ionicons-v5-b</title><path d='M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z' /></svg>
                </div>
            </div>

        </div>
    )

}

export default BelowNav;