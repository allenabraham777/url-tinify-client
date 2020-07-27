import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import LoginSignup from './pages/LoginSignup'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Logout from './pages/Logout'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/user/:type' component={LoginSignup} />
        <Route path='/logout' component={Logout} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes