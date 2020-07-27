import React, { useEffect, useState } from 'react'
import {isAuthenticated} from '../utils/isAuthenticated'
import { useHistory } from 'react-router-dom'
import NavBar from '../components/Navbar'

const Dashboard = () => {
  const [isLoggedIn] = useState(isAuthenticated())
  const history = useHistory()
  useEffect(()=>{
    if(!isLoggedIn)
      history.push('/user/login')
  })
  return<div>
    <NavBar/>
  </div>
}

export default Dashboard