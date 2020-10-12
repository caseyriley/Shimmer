import React, {useEffect, useState} from 'react';
import NavBar from './Navbar';
import BelowNav from './BelowNav';
import PickZoom from './PickZoom';
import YourGallery from './YourGallery';






const Explore = () => {
 
  const [layoutState, setLayoutState] = useState("li-layout-1");
  console.log(layoutState)

  const layoutStateTrue = () => {
    setLayoutState("li-layout-1");
  };
  const layoutStateFalse = () => {
    setLayoutState("li-layout-2");
  };

  const [gallery, setgallery] = useState([]);

  const addToGallery = (largePic) => {
    setgallery([...gallery, largePic])
  };

  const [galleryPageState, setGalleryPageState] = useState(false);
  const showGalleryPage = () => {
    setGalleryPageState(true)
  };

  const hideGallery = () => {
    setGalleryPageState(false)
  }

  const [pictures, setPictures] = useState()
  let numPics = 250;

  const [searchArrayState, setSearchArray] = useState(['flower'])
  
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
      setPictures(j.photos.photo);
    })
  }, [JSON.stringify(searchArrayState)])

  
    return (
      <div>
        <header>
        </header>
        <NavBar hideGallery={hideGallery} showGalleryPage={showGalleryPage} searchFunction={searchFunction} ></NavBar>
        <BelowNav fullScreen={fullScreen} layoutStateTrue={layoutStateTrue} layoutStateFalse={layoutStateFalse}></BelowNav>
        <PickZoom addToGallery={addToGallery} fullScreen={fullScreen} toggleFullScreen={toggleFullScreen} largePic={largePic} starState={starState} toggleStar={toggleStar} zoomOut={zoomOut} ></PickZoom>
        <YourGallery hideGallery={hideGallery} galleryPageState={galleryPageState} gallery={gallery} ></YourGallery>
        <div>
          <div className="pic-array-container" >
            <ul>
              {pictures ? pictures.map((pic) => {
                let srcPath = 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
                return (
                  <li key={pic.id} className={layoutState} >
                    <img className="pic" loading="lazy" alt="loading..." onClick={() => { setLargePic(srcPath); toggleFullScreen() }} src={srcPath}></img>
                  </li>
                )
              }) : ""}
            </ul>
          </div>
        </div>
      </div>
      
    );

      

}
 

export default Explore;