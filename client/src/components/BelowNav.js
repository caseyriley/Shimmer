import React from 'react';
import { NavLink, Route } from "react-router-dom";
import LayoutMozaic from './LayoutMozaic';

const BelowNav = (props) => {
    // const fullScreenState = props.fullScreen;
    return(
        <div id='below-nav-c'>
            <div className='below-nav-c__options'>
                <LayoutMozaic layoutStateTrue={props.layoutStateTrue} />
                <div onClick={props.layoutStateFalse} id={'layout-square'} ></div>
            </div>

        </div>
    )

}

export default BelowNav;