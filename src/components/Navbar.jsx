import React from 'react'
import { NavLink } from 'react-router-dom';
import { isAuthenticated } from '../utils/isAuthenticated';

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="brand-name">chipit.tk</h1>
      <div className="button-wrapper">
        {isAuthenticated() ?
          <NavLink to="/logout">
            <button className="login-button">
              Logout
            </button>
          </NavLink>
          : <>
            <NavLink to="/user/register">
              <button className="signup-button">
                Signup
              </button>
            </NavLink>
            <NavLink to="/user/login">
              <button className="login-button">
                Login
              </button>
            </NavLink>
          </>
        }
      </div>
    </nav>
  )
}

export default NavBar
