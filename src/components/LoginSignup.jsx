import React, { useState } from 'react'

const LoginSignup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const updateValue = (e) => {
    const {name, value} = e.target

    setCredentials((oldValue)=> {
      return {...oldValue, [name]: value}
    })
  }

  const action = (e) => {
    e.preventDefault()
    props.action(credentials)
  }

  return (
    <form>
      <div>
        {props.signup?<h1>SignUp</h1>:<h1>Login</h1>}
        {props.signup?<input type="text" name="name" value={credentials.name} onChange={updateValue} placeholder="Name" required/>:null}
        <input type="email" name="email" value={credentials.email} onChange={updateValue} placeholder="Email" required/>
        <input type="password" name="password" value={credentials.password} onChange={updateValue} placeholder="Password" required/>
        {props.signup?<input type="password" name="password_confirmation" value={credentials.password_confirmation} onChange={updateValue} placeholder="Confirm password" required/>:null}
        <button onClick={action}>
          {props.signup?'SignUp':'Login'}
        </button>
      </div>
    </form>
  )
}

export default LoginSignup