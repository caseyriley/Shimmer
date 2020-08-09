import React, {useContext, useEffect, useState, useRef, useReducer} from 'react';
import {NavLink, Route} from "react-router-dom";
import NavBar from './Navbar';
import BelowNav from './BelowNav';
import PickZoom from './PickZoom';
import YourGallery from './YourGallery';





const Explore = () => {
 
  const [gallery, setgallery] = useState(['woop']);

  const addToGallery = (largePic) => {
    setgallery([...gallery, largePic])
  }

  const [galleryPageState, setGalleryPageState] = useState(false);
  const showGalleryPage = () => {
    setGalleryPageState(true)
  }

  const hideGallery = () => {
    setGalleryPageState(false)
  }

  console.log(gallery)

 

  
  

  const [pictures, setPictures] = useState('🌟 Wait for it 🌟')
  let numPics = 250;

  const [searchArrayState, setSearchArray] = useState(['festival'])
  
  let searchString = searchArrayState.toString()

  
  const searchFunction = (srch) => {
    setSearchArray(srch)
  
  }


  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => {
    const nextState = !fullScreen;
    setFullScreen(nextState);
  };
  


  const [largePic, setLargePic] = useState('finding pic')

  const [starState, setStarState] = useState(true);
  const toggleStar = () => {
    const nextState = !starState;
    setStarState(nextState);
  }

  const turnOffStar = () => {
    setStarState(true)
  }
  const zoomOut = () => {
    toggleFullScreen();
    turnOffStar();
  }

  useEffect(() => {
    // alert(process.env.REACT_APP_API_KEY);
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + process.env.REACT_APP_API_KEY + '&tags=' + searchArrayState.toString()+'&per_page='+numPics+'&page=1&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      // alert(JSON.stringify(j));
      let picArray = j.photos.photo.map((pic) => {
        let srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        
        const zoomFunction = () => {
          setLargePic(srcPath);
          toggleFullScreen()
        }

        return(
          <li key={pic.id} >
            {/* <div className="pic-frame"> */}
            <img className="pic" loading="lazy" alt="loading..." onClick={zoomFunction}  src={
              srcPath ? srcPath : "https://twistedsifter.files.wordpress.com/2019/04/mystical-by-nei-burnell-2.jpg"
                }></img>
            {/* </div>   */}
          </li>
        )
      })
      setPictures(picArray);
    })
  }, [JSON.stringify(searchArrayState)])

  
    return (
      <div>
        <header>
        </header>
        <NavBar hideGallery={hideGallery} showGalleryPage={showGalleryPage} searchFunction={searchFunction} ></NavBar>
        <BelowNav fullScreen={fullScreen} ></BelowNav>
        <PickZoom addToGallery={addToGallery} fullScreen={fullScreen} toggleFullScreen={toggleFullScreen} largePic={largePic} starState={starState} toggleStar={toggleStar} zoomOut={zoomOut} ></PickZoom>
        <YourGallery hideGallery={hideGallery} galleryPageState={galleryPageState} gallery={gallery} ></YourGallery>
        <div 
        // className={`${ fullScreen ? 'backwards' : 'foreground'}`}
        >
          <div className="pic-array-container" >
            <ul>
            {pictures}
            </ul>
          </div>
        </div>
      </div>
      
    );

      

}
 

export default Explore;