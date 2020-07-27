import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav">
      <h1 className="brand-name">Brand</h1>
      <div className="button-wrapper">
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
      </div>
    </nav>
  )
}

export default NavBar