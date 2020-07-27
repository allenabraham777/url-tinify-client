const axios = require('axios')

const login = async (credentials) => {
  const {email, password} = credentials
  return await axios.post(`${process.env.REACT_APP_BACKEND}/login`, {email, password})
  .then((response)=>{
    localStorage.setItem('token', response.data.token)
    return response
  })
  .catch((err)=>{
    console.table(err)
    return {error: err.response.data.message}
  })
}

const signup = async (credentials) => {
  const {name, email, password, password_confirmation} = credentials
  return await axios.post(`${process.env.REACT_APP_BACKEND}/signup`, {name, email, password, password_confirmation})
  .then((response)=>{
    return response
  })
  .catch((err)=>{
    console.table(err)
    return {error: err.response.data.message}
  })
}

module.exports = {login, signup}