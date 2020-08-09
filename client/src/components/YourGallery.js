import React, {useState} from 'react';
import NavBar from './Navbar';
import ACTIONS from '../App';

const YourGallery = (props) => {
    const [galleryPictures, setGalleryPictures] = useState('🌟 Wait for it 🌟')
   

    

    return (
        <div id="your-gallery" className={`${props.galleryPageState ? 'page-showing' : 'page-hidden'}`}>
        {/* <div id="your-gallery" className='page-showing'> */}
            <NavBar></NavBar>
            <div id="your-gallery-top">
                <div onClick={props.hideGallery}> <ion-icon id="your-gallery__back-arrow" name="arrow-back-outline"></ion-icon> <p id="your-gallery__back-arrow_text" >Back to explore</p> </div>
                <p id="your-gallery__title">Your Gallery</p>
                <p id="your-gallery__description">a gallery currated by you!</p>
            </div>
            <div id="your-gallery__pic-c">

                <div className="pic-array-container" >
                    <ul>
                        {/* {pictures} */}
                    </ul>
                </div>

            </div>
            

        </div>
    )
    
}

export default YourGallery;