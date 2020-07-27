import React from 'react'
import Form from '../components/LoginSignup'
import {login, signup} from '../utils/auth'
import { useParams, Redirect } from 'react-router-dom'

const LoginSignup = () => {
  const {type} = useParams()

  return <div className="form-page">
    {type==='login'?<Form action={login}/>:type==='register'?<Form signup='true' action={signup}/>:<Redirect to='/' />}
  </div>
}

export default LoginSignup