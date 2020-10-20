import React, {useState} from 'react';
// import ACTIONS from './Explore';



const PickZoom = (props) => {
    const [zoomState, setZoomState] = useState(true);
    const zoomMore = () => {
        const nextState = !zoomState;
        setZoomState(nextState);
    }

    // useEffect(()=> {
    //     props.addToGallery('freaky!')
    // }, [])

    return (
        <div id="full-screen" className={`${props.fullScreen ? "visible" : "hidden"} ${zoomState ? "normal-size" : "zoomed-in"}`} >
            <img onClick={zoomMore} className={`${zoomState ? "normal-size" : "zoomed-in"} "full-screen__pic"`} src={props.largePic}  alt={""}/>
            {/* <img src={"arrow.svg"} /> */}
            <div onClick={props.zoomOut} className={`${zoomState ? "normal-size" : "hidden"}`} > <ion-icon id="back-arrow" name="arrow-back-outline"></ion-icon> <p id="back-arrow_text" >Back to explore</p> </div>
            {/* <ion-icon id="star" className={`${props.starState ? "star-none" : "star-fill"}`} onClick={props.toggleStar} name="star-outline"></ion-icon> */}
            <svg id="star" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z" className={`${props.starState ? "star-none" : "star-fill"}`} onClick={props.toggleStar} /></svg>
            <div id="star-backing" onClick={() => { props.toggleStar(); props.addToGallery(props.largePic)}}></div>
        </div>
    )
    
}

export default PickZoom;