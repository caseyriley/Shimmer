import React, {useState, useEffect} from 'react';
import BelowNav from './BelowNav';


const YourGallery = (props) => {

    const [keyState, setKeyState] = useState(1);
    function uniqueKey(){
        setKeyState(keyState + 1);
        return keyState
    }

    const [galleryPictures, setGalleryPictures] = useState('🌟 Wait for it 🌟')
    // useEffect(()=>{
    //     let count = 0;
    //     let picArray = props.gallery.map((srcPath)=>{
    //         count++;
    //         return (  
    //             <li 
    //             key={count} 
    //             >
    //                 <img className={"gallery-pic"} loading="lazy" alt="loading..."
    //                 //  onClick={zoomFunction} 
    //                  src={
    //                     srcPath ? srcPath : "https://twistedsifter.files.wordpress.com/2019/04/mystical-by-nei-burnell-2.jpg"
    //                 }></img>
    //             </li>
    //         )
    //     })
    //     setGalleryPictures(picArray);
    // }, [props.gallery])

    return (
        <>
        <div id="your-gallery" className={`${props.galleryPageState ? 'page-showing' : 'page-hidden'}`}>
                <BelowNav fullScreen={props.fullScreen} layoutStateTrue={props.layoutStateTrue} layoutStateFalse={props.layoutStateFalse}></BelowNav>
        {/* <div id="your-gallery" className='page-showing'> */}
            {/* <NavBar></NavBar> */}
            <div id={`${props.galleryPageState === true ? "your-gallery-top" : "hide"}`}>
                <div onClick={props.hideGallery}> <ion-icon id={"your-gallery__back-arrow"} name="arrow-back-outline"></ion-icon> 
                  <p id="your-gallery__back-arrow_text" >Back to explore</p> 
                </div>
                <p id="your-gallery__title">Your Gallery</p>
                <p id="your-gallery__description">a gallery currated by you!</p>
            </div>
            <div id="your-gallery__pic-c" className={`${props.galleryPageState ? 'page-showing' : 'page-hidden'}`} >

                <div className="your-gallery__pic-c__array-c" >
                    <ul>
                        {props.gallery.map((srcPath, index) => {
                            return (
                                <li key={index} className={props.layoutState}>
                                    <img className={"pic"} loading="lazy" alt="loading..."
                                        //  onClick={zoomFunction} 
                                        src={
                                            srcPath ? srcPath : "https://twistedsifter.files.wordpress.com/2019/04/mystical-by-nei-burnell-2.jpg"
                                        }></img>
                                </li>
                        )})}
                    </ul>
                </div>

            </div>
            

        </div>
        </>
    )
    
}


export default YourGallery;