import React, {useContext, useEffect, useState, useRef} from 'react';
import {NavLink, Route} from "react-router-dom";
import NavBar from './Navbar';
import BelowNav from './BelowNav';
import PickZoom from './PickZoom';




const Explore = () => {
  const [pictures, setPictures] = useState('Not getting picks')
  let numPics = 500;
  let searchArray = ['mystical']
  const [searchArrayState, setSearchArray] = useState(['mystical'])
  searchArray = searchArrayState;
  let searchString = searchArray.toString()
  const searchFunction = setSearchArray;

  const [fullScreen, setFullScreen] = useState(false);
  // useEffect(() => { console.log('drop drip') },[])
  const toggleFullScreen = () => {
    console.log('drop drip')
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
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + process.env.REACT_APP_API_KEY + '&tags='+searchString+'&per_page='+numPics+'&page=1&format=json&nojsoncallback=1')
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
          console.log('drip sauce')
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
  }, [])

  
    return (
      <div>
        <header>
          {/* <h1>Glimmerzzz</h1> */}
        </header>
        <NavBar searchFunction={"searchFunction"} ></NavBar>
        {/* <NavBar searchFunction={searchFunction} ></NavBar> */}
        <BelowNav></BelowNav>
        {/* <div id="full-screen" className={`${fullScreen ? "visible" : "hidden"}`} >
          <img src={largePic}/>
          <svg id="star" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z" className={`${starState ? "star-none" : "star-fill"}`} onClick={toggleStar}/></svg>
          <div id="star-backing" onClick={toggleStar}></div>                                                                                                                                                                                                             
        </div> */}
        <PickZoom fullScreen={fullScreen} toggleFullScreen={toggleFullScreen} largePic={largePic} starState={starState} toggleStar={toggleStar} zoomOut={zoomOut} ></PickZoom>
        
        <div className="pic-array-container" >
          <ul>
          {pictures}
          </ul>
        </div>
      </div>
    );

      

}
 

export default Explore;