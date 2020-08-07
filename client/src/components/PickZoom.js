import React from 'react';

const PickZoom = (props) => {
    return (
        <div id="full-screen"  className={`${props.fullScreen ? "visible" : "hidden"}`} >
            <img src={props.largePic} onClick={props.zoomOut}/>
            <svg id="star" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z" className={`${props.starState ? "star-none" : "star-fill"}`} onClick={props.toggleStar} /></svg>
            <div id="star-backing" onClick={props.toggleStar}></div>
        </div>
    )
    
}

export default PickZoom;