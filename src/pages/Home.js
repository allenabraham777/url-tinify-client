import React, { useState, useEffect } from 'react';

import UrlForm from '../components/UrlForm'
import UrlList from '../components/UrlList'

import hero from './hero.png'
import './Home.css'
import NavBar from '../components/Navbar';

function Home() {
  const [urls, updateUrls] = useState([])

  useEffect(() => {
    const localUrls = JSON.parse(localStorage.getItem('urls'))
    updateUrls(localUrls!==null?localUrls:[])
  },[])
  const changeHandler = (url, shortUrl) => {
    updateUrls([{url, shortUrl}, ...urls])
    localStorage.setItem('urls', JSON.stringify([{url, shortUrl},...urls]))
  }
  return (
    <div className="App">
      <NavBar />
      <div className="landing">
        <div className="landing-right">
          <img src={hero} alt="HeroImage"/>
        </div>
        <div className="landing-left">
          <UrlForm changeHandler={changeHandler}/>
        </div>
      </div>
      <UrlList urls={urls}/>
    </div>
  );
}

export default Home;
