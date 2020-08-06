import React, {useContext, useEffect, useState, useRef} from 'react';
import {NavLink, Route} from "react-router-dom";
import NavBar from './Navbar';
import BelowNav from './BelowNav';



const Explore = () => {
  const [pictures, setPictures] = useState('Not getting picks')
  let numPics = 500;
  let searchArray = ['mystical']
  let searchString = searchArray.toString()
  const rand = function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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
              <img  className="pic" loading="lazy" alt="loading..." src={srcPath}></img>
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
        <NavBar></NavBar>
        <BelowNav></BelowNav>
        <div className="pic-array-container" >
          <ul>
          {pictures}
          </ul>
        </div>
      </div>
    );

}
 

export default Explore;