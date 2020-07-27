import React, { useEffect, useState } from 'react'
import {isAuthenticated} from '../utils/isAuthenticated'
import { useHistory } from 'react-router-dom'

import {fetchLinks} from '../utils/fetchLinks'

import NavBar from '../components/Navbar'
import UrlList from '../components/UrlList'
import UrlForm from '../components/UrlForm'

const Dashboard = () => {
  const [isLoggedIn] = useState(isAuthenticated())
  const [links, setlinks] = useState([]) 
  
  const history = useHistory()
  
  useEffect(()=>{
    if(!isLoggedIn)
      history.push('/user/login')

    fetchLinks()
    .then((lks)=> {
      console.log(lks);
      setlinks(lks.reverse())
    })
    .catch(()=>{})
  },[history, isLoggedIn])

  const callBack = (data) => {
    setlinks([{_id: data._id, shortUrl: data.shortUrl, url: data.longUrl, clicks: data.clicks}, ...links])
  }

  if(isLoggedIn)
    return<div>
      <NavBar/>
      <div className="dashboard-form">
        <UrlForm isLoggedIn={isLoggedIn} callBack={callBack} style={{padding:'100px 10% 20px 10%'}} />
      </div>
      <UrlList urls={links} isLoggedIn={isLoggedIn}/>
    </div>
  else
    return <></>
}

export default Dashboard