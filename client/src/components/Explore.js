import React, {useContext, useEffect, useState, useRef, forceUpdate} from 'react';
import {NavLink, Route} from "react-router-dom";
import NavBar from './Navbar';
import BelowNav from './BelowNav';
import PickZoom from './PickZoom';




const Explore = () => {

  const [pictures, setPictures] = useState('🌟 Wait for it 🌟')
  let numPics = 250;

  const [searchArrayState, setSearchArray] = useState(['fun'])
  console.log(searchArrayState)
  
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
        <NavBar searchFunction={searchFunction} ></NavBar>
        <BelowNav fullScreen={fullScreen} ></BelowNav>

        <PickZoom fullScreen={fullScreen} toggleFullScreen={toggleFullScreen} largePic={largePic} starState={starState} toggleStar={toggleStar} zoomOut={zoomOut} ></PickZoom>
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