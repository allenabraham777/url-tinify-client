import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import LoginSignup from './pages/LoginSignup'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/user/:type' exact component={LoginSignup} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes