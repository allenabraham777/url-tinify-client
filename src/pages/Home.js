import React, { useState, useEffect } from 'react';

import UrlForm from '../components/UrlForm'
import UrlList from '../components/UrlList'

import hero from './hero.png'
import './Home.css'
import NavBar from '../components/Navbar';
import {isAuthenticated} from '../utils/isAuthenticated';
import { useHistory } from 'react-router-dom';

function Home() {
  const [urls, updateUrls] = useState([])
  const history = useHistory()

  useEffect(() => {
    // localStorage.clear()
    if(isAuthenticated())
    {
      history.push('/dashboard')
    }
    const localUrls = JSON.parse(localStorage.getItem('urls'))
    updateUrls(localUrls!==null?localUrls:[])
  },[history])
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
