import React from 'react';


const PickZoom = (props) => {
    const backArrowStyle1 = "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px";
    const backArrowStyle2 = "fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px";
    return (
        <div id="full-screen"  className={`${props.fullScreen ? "visible" : "hidden"}`} >
            <img className="full-screen__pic" src={props.largePic} onClick={props.zoomOut}/>
            {/* <img src={"arrow.svg"} /> */}
            <div> <ion-icon id="back-arrow" name="arrow-back-outline"></ion-icon> <p id="back-arrow_text" >Back to explore</p> </div>
            <ion-icon id="star" name="star-outline"></ion-icon>
            {/* <svg id="star" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z" className={`${props.starState ? "star-none" : "star-fill"}`} onClick={props.toggleStar} /></svg> */}
            <div id="star-backing" onClick={props.toggleStar}></div>
        </div>
    )
    
}

export default PickZoom;