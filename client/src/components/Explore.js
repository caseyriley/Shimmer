import React, {useEffect, useState} from 'react';
import NavBar from './Navbar';
import BelowNav from './BelowNav';
import PickZoom from './PickZoom';
import YourGallery from './YourGallery';
import LayoutMozaic from './LayoutMozaic';





const Explore = () => {
 
  const [layoutState, setLayoutState] = useState(true);
  console.log(layoutState)

  const layoutStateTrue = () => {
    setLayoutState(true);
  };
  const layoutStateFalse = () => {
    setLayoutState(false);
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

  const [pictures, setPictures] = useState('🌟 Wait for it 🌟')
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
      // alert(JSON.stringify(j));
      let picArray = j.photos.photo.map((pic) => {
        let srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        
        const zoomFunction = () => {
          setLargePic(srcPath);
          toggleFullScreen()
        }

        return(
          <li key={pic.id} className={`${layoutState ? "li-layout-1" : "li-layout-2"}`} >
            <img className="pic" loading="lazy" alt="loading..." onClick={zoomFunction}  src={srcPath}></img>
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
        <BelowNav fullScreen={fullScreen} layoutState={layoutState}></BelowNav>
        <PickZoom addToGallery={addToGallery} fullScreen={fullScreen} toggleFullScreen={toggleFullScreen} largePic={largePic} starState={starState} toggleStar={toggleStar} zoomOut={zoomOut} ></PickZoom>
        <YourGallery hideGallery={hideGallery} galleryPageState={galleryPageState} gallery={gallery} ></YourGallery>
        <div>
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