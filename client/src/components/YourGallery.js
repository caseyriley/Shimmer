import React, {useState, useEffect} from 'react';
import NavBar from './Navbar';
import ACTIONS from '../App';

const YourGallery = (props) => {
    const [galleryPictures, setGalleryPictures] = useState('🌟 Wait for it 🌟')

    useEffect(()=>{
        let count = 0;
        let picArray = props.gallery.map((srcPath)=>{
            count++;
            return (
                <li 
                // key={pic.id} 
                key={count} 
                >
                    <img className="gallery-pic" loading="lazy" alt="loading..."
                    //  onClick={zoomFunction} 
                     src={
                        srcPath ? srcPath : "https://twistedsifter.files.wordpress.com/2019/04/mystical-by-nei-burnell-2.jpg"
                    }></img>
                </li>
            )
        })
        setGalleryPictures(picArray);
    }, [props.gallery])

    return (
        <div id="your-gallery" className={`${props.galleryPageState ? 'page-showing' : 'page-hidden'}`}>
        {/* <div id="your-gallery" className='page-showing'> */}
            <NavBar></NavBar>
            <div id="your-gallery-top">
                <div onClick={props.hideGallery}> <ion-icon id="your-gallery__back-arrow" name="arrow-back-outline"></ion-icon> <p id="your-gallery__back-arrow_text" >Back to explore</p> </div>
                <p id="your-gallery__title">Your Gallery</p>
                <p id="your-gallery__description">a gallery currated by you!</p>
            </div>
            <div id="your-gallery__pic-c" className={`${props.galleryPageState ? 'page-showing' : 'page-hidden'}`} >

                <div className="gallery-pic-array-container" >
                    <ul>
                        {galleryPictures}
                    </ul>
                </div>

            </div>
            

        </div>
    )
    
}

export default YourGallery;