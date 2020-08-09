import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/authentication';
import LoginNav from './LoginNav';

const LoginPanel = ({ token, login }) => {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');

  const [pictures, setPictures] = useState('Not getting picks')
  const [pic, setPic] = useState('background')
  const [blurState, setBlurState] = useState(false);
  let numPics = 250;
  let searchArray = ['plants', 'landscape']
  let searchString = searchArray.toString()

  const [dropD, setdropD] = useState(false);
  const toggleDropdown = () => {
    const nextState = !dropD;
    setdropD(nextState);
  };

  useEffect(() => {
    // console.log(process.env.REACT_APP_API_KEY);  
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + process.env.REACT_APP_API_KEY + '&tags=' + searchString + '&per_page=' + numPics + '&page=1&format=json&nojsoncallback=1')
      .then(function (response) {
        return response.json();
      })
      .then(function (j) {

          const lookupPic = function(index){
            let pic = j.photos.photo[index];
            return 'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
          }
            let picCount = 0;

            setPic(lookupPic(picCount));
            picCount ++;
            setInterval(() => {
              setBlurState(true);
              setTimeout(() => {
                setPic(lookupPic(picCount));
              }, 150);
              
              setTimeout(() => {
                setBlurState(false);
              }, 500);
              // setBlurState(false);
              picCount ++;
            }, 5000);
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const updateEmail = e => setEmail(e.target.value);
  const updatePassword = e => setPassword(e.target.value);

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    
    <main className="centered middled">
        <LoginNav></LoginNav>
      <div id={'invisible-click-box'} onClick={toggleDropdown} ></div>
      <div id={'main__c'} style={{
        backgroundImage: 'url(' + pic + ')',
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
      }}
        className={`${blurState ? "blur" : "no-blur"}`}
        >
        
      </div>
      <div id="login-form-c" className={`${dropD ? "visible" : "hidden"}`} >
        <svg id={'balls'} viewBox="0 0 24 24">
          <circle cx="6" cy="12" r="5" fill="#005fde"></circle>
          <circle cx="18" cy="12" r="5" fill="#ff0084"></circle>
        </svg>
        <span id={"log-in-to-shimmer"}>Log in to Shimmer</span>
        <form id="login-form" onSubmit={handleSubmit}>

          <input
            id={'email-input'}
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail} />
          <input
            id={'password-input'}
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword} />
          <div id={'login-button-c'}>
            <button id={'login-button-c__button'} type="submit">Login</button>
          </div>
        </form>
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    token: state.authentication.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);
