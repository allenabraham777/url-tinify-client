import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {isAuthenticated} from '../utils/isAuthenticated'
const LoginSignup = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated())
  const [message, setMessage] = useState({success: "", error: ""})
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const history = useHistory()

  useEffect(() => {
    if(isLoggedIn) {
      history.push('/dashboard')
    }
  }, [isLoggedIn,history])

  const updateValue = (e) => {
    const {name, value} = e.target

    setCredentials((oldValue)=> {
      return {...oldValue, [name]: value}
    })
  }

  const action = async (e) => {
    const tgt = e.target.textContent
    e.preventDefault()
    const response = await props.action(credentials)
    if(response.error) {
      setMessage({success: "", error: response.error})
      return
    }
    if(tgt==="Login")
      setIsLoggedIn(true)
    if(tgt==="SignUp"){
      history.push('/user/login')
      setMessage({success: "User Successfully Created", error: ""})
    }
  }

  return (
    <form>
      {props.signup?<h1>Create an Account</h1>:<h1>Login to cutcut.cf</h1>}
      {message.error?<h3 className="error">{message.error}</h3>:message.success?<h3 className="success">{message.success}</h3>:<></>}
      {props.signup?<input type="text" name="name" value={credentials.name} onChange={updateValue} placeholder="Name" required/>:null}
      <input type="email" name="email" value={credentials.email} onChange={updateValue} placeholder="Email" required/>
      <input type="password" name="password" value={credentials.password} onChange={updateValue} placeholder="Password" required/>
      {props.signup?<input type="password" name="password_confirmation" value={credentials.password_confirmation} onChange={updateValue} placeholder="Confirm password" required/>:null}
      <button onClick={action}>
        {props.signup?'SignUp':'Login'}
      </button>
      {props.signup?<p>
          Already a user? <NavLink to="/user/login">Login</NavLink>
        </p>
        :<p>
          New user? <NavLink to="/user/register">Sign Up</NavLink>
        </p>}
    </form>
  )
}

export default LoginSignup