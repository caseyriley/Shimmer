import React, {useContext, useEffect, useState, useRef} from 'react';
import {NavLink, Route} from "react-router-dom";
import NavBar from './Navbar';
import BelowNav from './BelowNav';




const Explore = () => {
  const [pictures, setPictures] = useState('Not getting picks')
  let numPics = 500;
  let searchArray = ['mystical']
  const [searchArrayState, setSearchArray] = useState(['mystical'])
  searchArray = searchArrayState;
  let searchString = searchArray.toString()

  const searchFunction = setSearchArray;

  const [dropD, setdropD] = useState(false);
  const toggleDropdown = () => {
    const nextState = !dropD;
    setdropD(nextState);
  };

  const [largePic, setLargePic] = useState('finding pic')
  window.addEventListener('click', event => {
    // console.log(event.target)
    if (event.target.src){
      let picSrc = event.target.src;
      console.log(picSrc)
      setLargePic(picSrc)
      toggleDropdown()
    }
  })

  const [starState, setStarState] = useState(true);
  const toggleStar = () => {
    const nextState = !starState;
    setStarState(nextState);
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
        
        return(
          <li key={pic.id} >
            {/* <div className="pic-frame"> */}
              <img  className="pic" loading="lazy" alt="loading..." src={
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
        <div id="full-screen" className={`${dropD ? "visible" : "hidden"}`} >
          <img src={largePic}/>
          <svg id="star" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M480,208H308L256,48,204,208H32l140,96L118,464,256,364,394,464,340,304Z" className={`${starState ? "star-none" : "star-fill"}`} onClick={toggleStar}/></svg>
          <div id="star-backing" onClick={toggleStar}></div>                                                                                                                                                                                                             
        </div>
        <div id="star-backing" onClick={toggleStar}></div>
        <div className="pic-array-container" >
          <ul>
          {pictures}
          </ul>
        </div>
      </div>
    );

      

}
 

export default Explore;