import React, { useState, useEffect } from 'react';
import hero from './hero.png'
import './App.css'

import UrlForm from './components/UrlForm'
import UrlList from './components/UrlList'

function App() {
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
      <nav className="nav">
        <h1 className="brand-name">Brand</h1>
      </nav>
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

export default App;
